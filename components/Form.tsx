"use client";
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { CheckCircle, Person, Email, Phone, Note } from "@mui/icons-material";

const Form = () => {
  const [name, setName] = useState("");
  const nameFun = (event: any) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "600px",
            width: "100%",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                <span style={{ fontSize: "40px", color: "#333" }}>
                  Get in contact
                </span>
              </Typography>
              <Typography variant="body1" gutterBottom>
                <span style={{ fontSize: "20px", color: "#333" }}>
                  Get in contact with one of the members of our team to
                  understand how we support you.
                </span>
              </Typography>
              <List>
                {["Save time", "Spend less", "Get organized"].map(
                  (text, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: "#333" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="h6" sx={{ color: "#333" }}>
                            {text}
                          </Typography>
                        }
                      />
                    </ListItem>
                  )
                )}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <form noValidate autoComplete="off">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormControl fullWidth margin="normal">
                      <InputLabel id="help-label" style={{ color: "black" }}>
                        What can we help you with?
                      </InputLabel>
                      <Select
                        labelId="help-label"
                        id="help-select"
                        defaultValue=""
                        label="What can we help you with?"
                        
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "black",
                            },
                            "&:hover fieldset": {
                              borderColor: "black",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "black",
                            },
                          },
                          "& .MuiInputBase-input": {
                            color: "black",
                          },
                          "& .MuiFormLabel-root": {
                            color: "black",
                          },
                          backgroundColor: "white",
                        }}
                      >
                        <MenuItem
                          value="Product enquiry"
                          style={{ color: "black" }}
                        >
                          Product enquiry
                        </MenuItem>
                        <MenuItem
                          value="Customer Support"
                          style={{ color: "black" }}
                        >
                          Customer Support
                        </MenuItem>
                        <MenuItem
                          value="Feedback & suggestions"
                          style={{ color: "black" }}
                        >
                          Feedback & suggestions
                        </MenuItem>
                        <MenuItem
                          value="Partnership Opportunities"
                          style={{ color: "black" }}
                        >
                          Partnership Opportunities
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      margin="normal"
                      required
                      onChange={nameFun}
                      InputProps={{
                        startAdornment: (
                          <Person sx={{ mr: 1, color: "#333" }} />
                        ),
                      }}
                      InputLabelProps={{
                        style: { color: "#333" },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#333",
                          },
                          "&:hover fieldset": {
                            borderColor: "#333",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#333",
                          },
                        },
                        "& .MuiInputBase-input": {
                          color: "#333",
                        },
                        "& .MuiFormLabel-root": {
                          color: "#333",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      margin="normal"
                      required
                      InputProps={{
                        startAdornment: (
                          <Person sx={{ mr: 1, color: "#333" }} />
                        ),
                      }}
                      InputLabelProps={{
                        style: { color: "#333" },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#333",
                          },
                          "&:hover fieldset": {
                            borderColor: "#333",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#333",
                          },
                        },
                        "& .MuiInputBase-input": {
                          color: "#333",
                        },
                        "& .MuiFormLabel-root": {
                          color: "#333",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      margin="normal"
                      type="email"
                      required
                      InputProps={{
                        startAdornment: <Email sx={{ mr: 1, color: "#333" }} />,
                      }}
                      InputLabelProps={{
                        style: { color: "#333" },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#333",
                          },
                          "&:hover fieldset": {
                            borderColor: "#333",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#333",
                          },
                        },
                        "& .MuiInputBase-input": {
                          color: "#333",
                        },
                        "& .MuiFormLabel-root": {
                          color: "#333",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Notes"
                      margin="normal"
                      multiline
                      rows={4}
                      InputProps={{
                        startAdornment: (
                          <Note
                            sx={{
                              mr: 1,
                              alignSelf: "flex-start",
                              color: "#333",
                            }}
                          />
                        ),
                      }}
                      InputLabelProps={{
                        style: { color: "#333" },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#333",
                          },
                          "&:hover fieldset": {
                            borderColor: "#333",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#333",
                          },
                        },
                        "& .MuiInputBase-input": {
                          color: "#333",
                        },
                        "& .MuiFormLabel-root": {
                          color: "#333",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginTop: "20px",
                    backgroundColor: "#333",
                    border: "1px solid #626262",
                    borderRadius: "9px",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: "11px 38px",
                    textDecoration: "none",
                    display: "flex",
                    textTransform: "none",
                    color: "white",
                  }}
                >
                  Get in Touch
                </Button>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Form;
