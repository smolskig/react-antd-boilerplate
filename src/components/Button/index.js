import React, { useState } from "react";
import { Button as Btn } from 'antd'

const Button = () => {
  const [btnText, setBtnText] = useState("Default");

  return (
    <Btn className="btn" type="primary" onClick={() => setBtnText("Clicked")}>
      {btnText}
    </Btn>
  );
};

export default Button;
