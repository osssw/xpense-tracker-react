import { Typography } from "@mui/material";
import React from "react";
import "./error.scss";

type Props = {
  text: string;
};

const Error: React.FunctionComponent<Props> = ({ text }) => {
  return <Typography className="error">{text}</Typography>;
};

export default Error;
