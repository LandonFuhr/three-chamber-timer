import { Typography } from "antd";
import { useMemo } from "react";
import { formatTimeFromMs } from "../../utils/formatTimeFromMs";

export const Timer = ({ isSelected, isCounting, timeInMs }) => {
  const textType = useMemo(() => {
    if (isCounting) return "success";
    if (isSelected) return "warning";
    return "secondary";
  }, [isSelected, isCounting]);

  const timeToShow = useMemo(() => formatTimeFromMs(timeInMs), [timeInMs]);

  return (
    <Typography.Text
      className={isSelected && "blinking"}
      style={{ fontSize: "24px" }}
      strong
      type={textType}
    >
      {timeToShow}
    </Typography.Text>
  );
};
