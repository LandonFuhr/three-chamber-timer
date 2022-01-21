import { CaretRightFilled, PauseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useMemo } from "react";

export const PlayPauseButton = ({ isPaused, onClick }) => {
  const contents = useMemo(() => {
    return isPaused
      ? { icon: <CaretRightFilled />, text: "Play" }
      : { icon: <PauseOutlined />, text: "Pause" };
  }, [isPaused]);

  return (
    <Button
      style={{ width: "100px" }}
      size="large"
      icon={contents.icon}
      onClick={onClick}
    >
      {contents.text}
    </Button>
  );
};
