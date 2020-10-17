import React from 'react';
import { Grid, Card, CardHeader, CardMedia, Avatar, IconButton, CardContent, Typography, CardActions } from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import IProducts from '../../models/Product';

interface IContentProps {
  products: IProducts[];
}

const Content: React.FC<IContentProps> = props => {
  return (<Grid container justify='space-around' alignItems='baseline'>
    {props.products.map(product => {
      return (<Grid item xs={4}>
        <Card>
          <CardHeader
            avatar={<Avatar> T </Avatar>}
            action={<IconButton>
              <MoreVertIcon />
            </IconButton>}
            title={product.name}
            subheader={product.codigo}
          />
          <CardMedia
            image={product.img}
            title={product.name}
          />
          <CardContent>
            <Typography variant='body1'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Incidunt vero totam, eos reprehenderit sunt corporis officiis voluptate numquam
              eligendi praesentium amet error. Similique magnam aperiam delectus adipisci debitis sunt provident?
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton onClick={() => alert('produto favoritado')}
              aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>);
    })}
  </Grid>
  );
}

export default Content;