import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Lists = ({ urls }) => {
  return (
    <>
      {urls.map((item, index) => (
        <Card key={index} sx={{ margin: 2 }}>
          <CardContent>
            <Typography variant="body1">Original: {item.url}</Typography>
            <Typography variant="body2">
              Short: <Link to={`/r/${item.shortcode}`}>{window.location.origin}/r/{item.shortcode}</Link>
            </Typography>
            <Typography variant="body2">Expires in: {item.validity} minutes</Typography>
            <Button component={Link} to={`/stats/${item.shortcode}`} variant="outlined" sx={{ mt: 1 }}>
              View Stats
            </Button>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default Lists;
