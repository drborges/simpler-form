import React from "react";

const Form = ({ children, onSubmit, ...props }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({});
  };

  return (
    <form {...props} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
