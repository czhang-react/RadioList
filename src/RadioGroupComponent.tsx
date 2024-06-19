import React, { useState } from "react";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { styled } from "@mui/system";

const CustomRadio = styled(Radio)(({ theme }) => ({
  "&.Mui-checked": {
    color: theme.palette.primary.main,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 28,
  },
}));

const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  "& .MuiFormControlLabel-label": {
    fontSize: "1.2rem",
    font: "Roboto",
    color: "gray",
    marginLeft: "5px",
  },
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "10px 15px",
  margin: "10px 0",
  width: "500px",
  boxSizing: "border-box",
  "&.Mui-checked": {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.action.selected,
  },
}));

const RadioGroupComponent = () => {
  const [selectedValue, setSelectedValue] = useState("with-css-only");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup value={selectedValue} onChange={handleChange}>
        <CustomFormControlLabel
          value="learn-how-to-design"
          control={<CustomRadio />}
          label="Last Day"
          className={
            selectedValue === "learn-how-to-design" ? "Mui-checked" : ""
          }
        />
        <CustomFormControlLabel
          value="custom-radio-inputs"
          control={<CustomRadio />}
          label="Last Week"
          className={
            selectedValue === "custom-radio-inputs" ? "Mui-checked" : ""
          }
        />
        <CustomFormControlLabel
          value="with-css-only"
          control={<CustomRadio />}
          label="Last Month"
          className={selectedValue === "with-css-only" ? "Mui-checked" : ""}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupComponent;
