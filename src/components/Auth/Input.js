import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import { VisibilityOff } from "@material-ui/icons/VisibilityOff";

export const Input = ({
  name,
  handleChange,
  label,
  autoFocus,
  type,
  handleShowPassoword,
  half,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={
          name === "passoword" && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassoword}>
                  {type === "password" ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }
        }
      ></TextField>
    </Grid>
  );
};

export default Input;
