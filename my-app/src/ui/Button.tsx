import React from "react";

import classes from "./Button.module.css";

type Props = {
  children: string;
  onClick?: () => void;
};

const Button: React.FC<Props> = (props: Props) => {
  return (
    <div className={classes["button-container"]}>
      <button className={classes["button"]} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
