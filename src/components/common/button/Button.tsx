import { Button as MaterialButton } from "@mui/material";
import React from "react";
import "./button.scss";

type Props = {
  children: any;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const ContainedButton: React.FunctionComponent<Props> = ({
  onClick,
  children,
}) => {
  return (
    <MaterialButton onClick={onClick} className="button" variant="contained">
      {children}
    </MaterialButton>
  );
};

export default ContainedButton;
