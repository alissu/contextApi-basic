import React from 'react';
import { Grid, Card, CardHeader, CardMedia, Avatar, IconButton, CardContent, Typography, CardActions } from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import IProducts from '../../models/Product';
import ThemeContext from '../../Contexts/Theme';

interface IContentProps {
  products: IProducts[];
}

const Content: React.FC<IContentProps> = props => {
  const context = React.useContext(ThemeContext);

  return (<Grid container justify='space-around' alignItems='baseline' style={{ backgroundColor: context.theme.background, color: context.theme.foreground }}>
    {props.products.map(product => {
      return (<Grid item xs={4} style={{ backgroundColor: context.theme.background, color: context.theme.foreground }}>
        <Card style={{ backgroundColor: context.theme.background, color: context.theme.foreground }}>
          <CardHeader
            avatar={<Avatar> T </Avatar>}
            action={<IconButton>
              <MoreVertIcon />
            </IconButton>}
            title={product.name}
            subheader={product.codigo}
            style={{ backgroundColor: context.theme.background, color: context.theme.foreground }}
          />
          <CardMedia
            image={product.img}
            title={product.name}
            style={{ backgroundColor: context.theme.background, color: context.theme.foreground }}
          />
          <CardContent style={{ backgroundColor: context.theme.background, color: context.theme.foreground }}>
            <Typography variant='body1'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Incidunt vero totam, eos reprehenderit sunt corporis officiis voluptate numquam
              eligendi praesentium amet error. Similique magnam aperiam delectus adipisci debitis sunt provident?
            </Typography>
          </CardContent>
          <CardActions style={{ backgroundColor: context.theme.background, color: context.theme.foreground }}>
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