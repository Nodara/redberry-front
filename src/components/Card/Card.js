import * as React from 'react';
import { CardActionArea, Card as MaterialCard, CardContent, CardMedia, Typography } from '@mui/material';


const Card = ({
  title,
  text,
  path,
  imageName
}) => {
  console.log(imageName)
  return (
    <MaterialCard sx={{
      minWidth: 345,
      maxWidth: 345
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="345"
          image={require(`../../assets/${imageName}`)}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MaterialCard>
  );
}

export default Card