import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import '../index.css';

const MainContent = () => (
  <div className="main-content">
    <Card>
      <CardContent>
        <Typography variant="h5">Selected</Typography>
        {/* Insert chart or image here */}
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <Typography variant="h5">Projects Received</Typography>
        {/* Insert chart or image here */}
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <Typography variant="h5">Scheduled (Pending)</Typography>
        {/* Insert chart or image here */}
      </CardContent>
    </Card>
  </div>
);

export default MainContent;
