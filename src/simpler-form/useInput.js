import { useState, useRef } from "react";
import { validate } from "./validation";

const useInput = (
  defaultValue,
  { validate: validationEvent = "onChange", validators = [] } = {}
) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState();
  const [validation, setValidation] = useState("prestine");
  const triggerValidation = newValue => {
    validate(newValue, validators)
      .then(() => {
        setValidation("valid");
        console.log(`Validation: ${newValue} is valid!`);
      })
      .catch(error => {
        setValidation("invalid");
        setError(error);
        console.log(`Validation: ${newValue} is invalid!`);
      });
  };

  return {
    error,
    valid: validation === "valid",
    invalid: validation === "invalid",
    prestine: validation === "prestine",
    input: {
      value,
      inputRef,
      onChange: event => {
        const newValue =
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value;

        setValue(newValue);
        if (validationEvent === "onChange") {
          triggerValidation(newValue);
        }
      },
      onBlur: event => {
        const newValue =
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value;

        if (validationEvent === "onBlur") {
          triggerValidation(newValue);
        }
      }
    }
  };
};

export default useInput;
