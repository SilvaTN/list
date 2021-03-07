import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import CardMedia from '@material-ui/core/CardMedia';

  
const CoffeeCard = props => {
    const {avatarUrl, title, subtitle, description, imageUrl } = props;
  
    return (
      <Card>
        <CardHeader
            avatar={ <Avatar src={avatarUrl} /> }
            action={
                // IconButton makes nested element behave like a button
            <IconButton aria-label="settings">
                <ShareIcon />
            </IconButton>
            }
            title={title}
            subheader={subtitle}
        />
        
        <CardMedia
        // you have to set a height, otherwise it won't display
            style={{ height: "150px" }}
            image={imageUrl}
            title="Paella dish" 
        />
        <CardContent>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">BUY NOW</Button>
          <Button size="small">OFFER</Button>
        </CardActions>
      </Card>
    );
}


export default CoffeeCard;