import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useForm, Controller } from "react-hook-form";

const initialFormValues = {
  name: "",
  consentCheckbox: "",
  gender: "",
  profession: "",
  experienceLevel: "",
  age: "",
};

function BasicSelect() {
  const { control, register, reset, resetField } = useForm({
    defaultValues: initialFormValues,
  });

  return (
    <Container
      sx={{
        marginTop: "50px",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ba9fba",
        paddingTop: "30px",
        paddingBottom: "30px",
        borderRadius: "10px",
      }}
    >
      <TextField
        sx={{ marginBottom: "25px" }}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="name"
        {...register("name")}
        inputProps={{
          sx: {
            WebkitBoxShadow: "0 0 0 1000px #ba9fba inset !important",
          },
        }}
      />

      <Box sx={{ marginBottom: "25px" }}>
        <label htmlFor="gender">Gender</label>
        <Controller
          render={({ field }) => (
            <RadioGroup aria-label="gender" {...field}>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          )}
          id="gender"
          name="gender"
          control={control}
        />
      </Box>

      <Box sx={{ marginBottom: "25px" }}>
        <Controller
          sx={{ marginBottom: "25px" }}
          render={({ field }) => (
            <TextField
              {...field}
              {...register("profession")}
              label="Profession"
              inputProps={{
                sx: {
                  WebkitBoxShadow: "0 0 0 1000px #ba9fba inset !important",
                },
              }}
            />
          )}
          id="profession"
          name="profession"
          control={control}
        />
      </Box>

      <FormControl sx={{ width: "150px", marginBottom: "25px" }}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Controller
          render={({ field }) => (
            <Select {...field} label="Age">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
              <MenuItem value={40}>Forty</MenuItem>
            </Select>
          )}
          name="age"
          id="age"
          control={control}
        />
      </FormControl>

      <Box sx={{ marginBottom: "25px" }}>
        <Controller
          {...register("experienceLevel")}
          render={({ field }) => (
            <label htmlFor="experienceLevel">
              Experience Level
              <Slider
                {...field}
                name="experienceLevel"
                id="experienceLevel"
                onChange={(_, value) => {
                  field.onChange(value);
                }}
                valueLabelDisplay="auto"
                max={10}
                step={1}
              />
            </label>
          )}
          control={control}
          defaultValue={[0, 10]}
        />
      </Box>

      <Box sx={{ marginBottom: "25px" }}>
        <label htmlFor="consentCheckbox">Data collection consent</label>
        <Controller
          {...register("consentCheckbox")}
          render={({ field }) => (
            <Checkbox
              onChange={(e) => field.onChange(e.target.checked)}
              checked={field.value}
              id="consentCheckbox"
            />
          )}
          id="consentCheckbox"
          name="consentCheckbox"
          control={control}
        />
      </Box>

      <Box>
        <Button
          sx={{ marginRight: "35px", backgroundColor: "purple" }}
          variant="contained"
          onClick={() => resetField("age")}
        >
          reset age
        </Button>
        <Button
          sx={{ backgroundColor: "purple" }}
          variant="contained"
          onClick={() => reset()}
        >
          reset all
        </Button>
      </Box>
    </Container>
  );
}

export default BasicSelect;
