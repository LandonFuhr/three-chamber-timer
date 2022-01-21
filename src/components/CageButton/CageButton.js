import "./CageButton.css";
import { Button } from "antd";

export const CageButton = ({ onClick, isSelected }) => {
  return (
    <Button
      type={isSelected && "primary"}
      size="large"
      shape="circle"
      onClick={onClick}
    >
      Cage
    </Button>
  );
};
