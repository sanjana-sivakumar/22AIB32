import React, { useState } from "react";
import UrlForm from "../components/Forms";
import UrlList from "../components/Lists";
import { Container, Typography } from "@mui/material";

const Shorturl = () => {
  const [urls, setUrls] = useState([]);

  const handleShorten = ({ url, validity, shortcode }) => {
    const code = shortcode || Math.random().toString(36).substring(2, 7);
    const newUrl = { url, validity, shortcode: code, createdAt: new Date(), clicks: [] };
    setUrls((prev) => [...prev, newUrl]);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>URL Shortener</Typography>
      <UrlForm onShorten={handleShorten} />
      <UrlList urls={urls} />
    </Container>
  );
};

export default Shorturl;
