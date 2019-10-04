import React from "react";
import ReactDOM from "react-dom";

import {
  Form,
  InputCheckbox,
  InputText,
  InputNumber,
  InputSelect,
  Button,
  useInput,
  validators
} from "./simpler-form";

const { required, min, minLen } = validators;

const handleSubmit = fields => {
  console.log(">>>>", fields);
};

const useFormFields = () => {
  return {
    active: useInput(true),
    name: useInput("Diego", {
      validators: [required, minLen(3)]
    }),
    age: useInput(34, {
      validators: [required, min(18)]
    }),
    email: useInput("drborges.cic@gmail.com", {
      validate: "onBlur",
      validators: [required, minLen(10)]
    }),
    territory: useInput(2, {
      validate: "onChange",
      validators: [required]
    })
  };
};

function App() {
  const fields = useFormFields();

  return (
    <div className="App">
      <Form name="my_form" onSubmit={() => handleSubmit(fields)}>
        <div>
          <label>Name: </label>
          <InputText name="name" {...fields.name.input} />
        </div>

        <div>
          <label>Email: </label>
          <InputText name="email" {...fields.email.input} />
        </div>

        <div>
          <label>Email: </label>
          <InputNumber name="age" {...fields.age.input} />
        </div>

        <div>
          <label>Active: </label>
          <InputCheckbox name="active" {...fields.active.input} />
        </div>

        <div>
          <label>Territory: </label>
          <InputSelect name="territory" {...fields.territory.input}>
            <option>Select a Territory</option>
            <option value={1}>Philly</option>
            <option value={2}>New York</option>
            <option value={3}>Austin</option>
          </InputSelect>
        </div>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
