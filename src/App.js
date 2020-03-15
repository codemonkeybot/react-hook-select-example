import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

export default function App() {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = data => {
    alert(JSON.stringify(data, null));
  };
  const [value, setReactSelect] = useState({
    selectedOption: {}
  });

  const handleChange = selectedOption => {
    setValue("reactSelect", selectedOption);
    setReactSelect({ selectedOption });
  };

  useEffect(() => {
    register({ name: "reactSelect" });
  }, [register]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Select
            className="reactSelect"
            name="filters"
            placeholder="Filters"
            value={value.selectedOption}
            options={options}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
