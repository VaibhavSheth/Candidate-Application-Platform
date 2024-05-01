// JobCard.js

import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const JobCard = ({ job }) => {
  const { title, company, location, description, experience, applyLink } = job;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle1">{company}</Typography>
        <Typography variant="subtitle2">{location}</Typography>
        <Typography>{description}</Typography>
        <Typography variant="subtitle2">Experience Required: {experience}</Typography>
        <Button variant="contained" href={applyLink} target="_blank">Apply</Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
