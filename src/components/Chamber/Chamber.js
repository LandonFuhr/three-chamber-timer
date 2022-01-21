import { Col } from "antd";
import { useMemo } from "react";
import { CageButton } from "../CageButton";
import { ChamberButton } from "../ChamberButton";
import { Timer } from "../Timer";

export const Chamber = ({ chamberStopwatch, title, cageStopwatch = null }) => {
  const hasCage = useMemo(() => Boolean(cageStopwatch), [cageStopwatch]);
  const chamberIsSelected =
    chamberStopwatch.isRunning || cageStopwatch?.isRunning;
  const chamberIsCounting =
    chamberStopwatch.isCounting || cageStopwatch?.isCounting;

  const elapsedTimeInMs = useMemo(() => {
    let elapsedTime = chamberStopwatch.elapsedTimeInMs;
    if (cageStopwatch) {
      elapsedTime += cageStopwatch.elapsedTimeInMs;
    }
    return elapsedTime;
  }, [chamberStopwatch, cageStopwatch]);

  const handleToggleChamber = () => {
    chamberStopwatch.toggleIsRunning();
  };

  const handleToggleCage = () => {
    cageStopwatch?.toggleIsRunning();
  };

  return (
    <Col
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {hasCage && (
        <CageButton
          onClick={handleToggleCage}
          isSelected={cageStopwatch?.isRunning}
        />
      )}
      <ChamberButton
        isSelected={chamberStopwatch.isRunning}
        title={title}
        elapsedTimeInMs={chamberStopwatch.elapsedTimeInMs}
        onClick={handleToggleChamber}
      />
      <Timer
        timeInMs={elapsedTimeInMs}
        isSelected={chamberIsSelected}
        isCounting={chamberIsCounting}
      />
    </Col>
  );
};
