import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Container } from '@mui/material';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme'



const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

const DataArray = [
    {
        title: 'All Around the World',
        img: 'https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGFzJTIwVmVnYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80',
        description: 'From $350',
        rating: '5',
        duration: ' 5 hours',
        reviews: '(265 review)',
        tourInfo: "Las Vegas (Spanish for 'The Meadows'), often known simply as Vegas, is the 25th-most populous city in the United States, the most populous city in the state of Nevada, and the county seat of Clark County. The Las Vegas Valley metropolitan area is the largest within the greater Mojave Desert, and 2nd-largest in the Southwestern United States."
    }


    ,
    {
        title: 'View the Casions',
        img: 'https://plus.unsplash.com/premium_photo-1670005278847-3398f72aecdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGFzJTIwVmVnYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80',
        description: 'From $150',
        rating: '2.5',
        duration: ' 3 hours',
        reviews: '(113 review)',
        tourInfo: "No matter your style or your gambling game, Las Vegas has a casino for you."
    }

    ,
    {
        title: 'Show me the Magic',
        img: 'https://plus.unsplash.com/premium_photo-1671683370315-87306b0faf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TGFzJTIwVmVnYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80',
        description: 'From $50',
        rating: '4',
        duration: ' 1 hours',
        reviews: '(162 review)',
        tourInfo: "The show pokes fun at the traditional magic act and is a fun take on the art form. From an entertainment standpoint, I enjoyed the entire show. Still, the magic tricks are less dramatic than in other magic shows in Vegas."
    }

    ,
    { title: 'What happens in Vegas',
     img: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGFzJTIwVmVnYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80',
      description: 'From $600',
      rating: '4.5',
      duration: ' 1.5 hours',
      reviews: '(216 review)',
      tourInfo: "Stays in Vegas .." }


]

let renderMe = ''

const CardTour2 = () => {

    const theme = useTheme();
    const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    renderMe = DataArray.map((element => {
        return (<Grid item sm={12} md={3}>
            <Card sx={{ maxWidth: 350, minWidth: onlySmallScreen ? '290px' : '' }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image= {element.img}
                    title="tour image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" >
                        {element.title}
                    </Typography>
                    <Container disableGutters sx={{marginBottom:'2rem'}} > 
                        <AccessTimeIcon sx={{fontSize:'1.1rem', verticalAlign: 'sub'}}/>
                        <Typography sx={{display:'inline'}}>{element.duration}</Typography>
                    </Container >
                    <Container disableGutters >
                    <Rating name="read-only" readOnly value={element.rating} precision={0.5} size='small' sx={{verticalAlign: 'middle'}}/>
                    <Typography sx={{display:'inline', fontSize:'0.7rem', fontWeight:'600'}}> {element.rating}</Typography>
                    <Typography sx={{display:'inline', fontSize:'0.7rem', fontWeight:'600'}}> {element.reviews}</Typography>
                    </Container>
                    <Typography variant="h6" color="text.main">
                        {element.description}
                    </Typography>
                    <Container sx={{marginLeft:'2.6rem', marginTop:'2rem'}}>
                        <HtmlTooltip
                            title={
                                <React.Fragment>
                                    <Typography color="inherit">Tour Info</Typography>
                                    {element.tourInfo}
                                </React.Fragment>
                            }
                        >
                            <Button>View Info</Button>
                        </HtmlTooltip>


                    </Container>
                </CardContent>
            </Card>
        </Grid>


        )
    }))


    return (
        <Grid container spacing={2}>
            {renderMe}
        </Grid>


    )
}


export default CardTour2;