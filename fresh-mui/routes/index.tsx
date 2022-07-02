/** @jsx h */
import { h } from "preact";

import Container from 'https://esm.sh/@mui/material/Container';
import Typography from 'https://esm.sh/@mui/material/Typography/Typography.js';
import Box from 'https://esm.sh/@mui/material/Box/Box.js';

export default function App() {
  return (
    <div>
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Preact example
        </Typography>
      </Box>
    </Container>
    </div>
  );
}