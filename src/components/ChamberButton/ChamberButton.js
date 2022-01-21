import { Button } from "antd";

export const ChamberButton = ({ isSelected, onClick, title }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Button size="large" type={isSelected && "primary"} onClick={onClick}>
        {title}
      </Button>
    </div>
  );
};
