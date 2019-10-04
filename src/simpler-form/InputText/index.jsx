import React from "react";

const InputText = ({ inputRef, valid, invalid, prestine, ...props }) => {
  return <input {...props} type="text" ref={inputRef} />;
};

export default InputText;
