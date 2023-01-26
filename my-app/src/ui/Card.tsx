import React, { ReactNode } from "react";

import classes from "./Card.module.css";

type Props = {
  className?: string;
  children: JSX.Element | ReactNode;
};

const Card: React.FC<Props> = ({ className, children }) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
