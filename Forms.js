import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import Logg from "./Logg";

const Forms = ({ onShorten }) => {
  const [url, setUrl] = useState("");
  const [validity, setValidity] = useState("");
  const [shortcode, setShortcode] = useState("");

  const validateUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateUrl(url)) {
      Logg.log("Invalid URL entered", "error");
      alert("Please enter a valid URL.");
      return;
    }
    const validityPeriod = validity ? parseInt(validity, 10) : 30;
    onShorten({ url, validity: validityPeriod, shortcode });
    Logg.log("URL shortened successfully", "success");
    setUrl("");
    setValidity("");
    setShortcode("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField 
            label="Enter Long URL"
            fullWidth
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Validity (minutes)"
            fullWidth
            type="number"
            value={validity}
            onChange={(e) => setValidity(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Custom Shortcode"
            fullWidth
            value={shortcode}
            onChange={(e) => setShortcode(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" fullWidth>
            Shorten URL
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Forms;
