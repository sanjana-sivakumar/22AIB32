import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, List, ListItem } from "@mui/material";

const Static = ({ urls }) => {
  const { shortcode } = useParams();
  const urlData = urls.find((u) => u.shortcode === shortcode);

  if (!urlData) {
    return <Typography>No stats available for this URL.</Typography>;
  }

  return (
    <Container>
      <Typography variant="h5">Statistics for {shortcode}</Typography>
      <Typography>Original URL: {urlData.url}</Typography>
      <Typography>Created At: {urlData.createdAt.toString()}</Typography>
      <Typography>Expires At: {new Date(urlData.createdAt.getTime() + urlData.validity * 60000).toString()}</Typography>
      <Typography>Total Clicks: {urlData.clicks.length}</Typography>
      
      <Typography variant="h6" sx={{ mt: 2 }}>Click Details:</Typography>
      <List>
        {urlData.clicks.map((click, i) => (
          <ListItem key={i}>
            {click.timestamp} | Source: {click.source} | Location: {click.location}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Static;
