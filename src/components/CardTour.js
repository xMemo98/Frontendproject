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
        title: 'Immerse into the Falls',
        img: 'https://images.unsplash.com/photo-1489447068241-b3490214e879?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        description: 'From $200',
        rating: '3.5',
        duration: ' 2 hours',
        reviews: '(200 review)',
        tourInfo: "Niagara Falls is a group of three waterfalls at the southern end of Niagara Gorge, spanning the border between the province of Ontario in Canada and the state of New York in the United States. The largest of the three is Horseshoe Falls, which straddles the international border of the two countries."
    }


    ,
    {
        title: 'The Falls at night',
        img: 'https://images.unsplash.com/photo-1510798970928-720aaba7bcb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        description: 'From $300',
        rating: '4',
        duration: ' 2 hours',
        reviews: '(250 review)',
        tourInfo: "If you think the Falls put on a show by day, wait until you see Niagara Falls at night. Niagara Falls' nightly illuminations transform the water wonder into a kaleidoscopic cascade of color — 365 nights a year."
    }

    ,
    {
        title: 'The Falls with a ferry',
        img: 'https://images.unsplash.com/photo-1529073353492-23aa380d4647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80',
        description: 'From $350',
        rating: '4.5',
        duration: ' 1 hour',
        reviews: '(230 review)',
        tourInfo: "The 20-minute Voyage to the Falls boat tour will take you on the journey of a lifetime! Enjoy breathtaking views of the Niagara Gorge, American Falls and Bridal Veil Falls, and come face-to-face with the famous Canadian Horseshoe Falls. Feel the thunderous roar and incredible power of one of the world’s most stunning natural wonders."
    }

    ,
    {
        title: 'The Falls from the sky',
        img: 'https://images.unsplash.com/photo-1607787744445-2130b6f31c6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=463&q=80',
        description: 'From $500',
        rating: '5',
        duration: ' 1 hour',
        reviews: '(305 review)',
        tourInfo: "From the sensation of lift-off, to the excitement of soaring above the turbulent rapids and cascading waterfalls, your Niagara Helicopters ride is a unique and spectacular experience. Your all-scenic flight gives you a thrilling view of Niagara’s natural and man-made wonders."
    }


]

let renderMe = ''

const CardTour = () => {

    const theme = useTheme();
    const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    renderMe = DataArray.map((element => {
        return (<Grid item sm={12} md={3}>
            <Card sx={{ maxWidth: 350, minWidth: onlySmallScreen ? '290px' : '' }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={element.img}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" >
                        {element.title}
                    </Typography>
                    <Container maxWidth='lg' disableGutters sx={{ marginBottom: '2rem' }} >
                        <AccessTimeIcon sx={{ fontSize: '1.1rem', verticalAlign: 'sub' }} />
                        <Typography sx={{ display: 'inline' }}>{element.duration}</Typography>
                    </Container >
                    <Container disableGutters maxWidth='lg' >
                        <Rating name="read-only" readOnly value={element.rating} precision={0.5} size='small' sx={{ verticalAlign: 'middle' }} />
                        <Typography sx={{ display: 'inline', fontSize: '0.7rem', fontWeight: '600' }}> {element.rating}</Typography>
                        <Typography sx={{ display: 'inline', fontSize: '0.7rem', fontWeight: '600' }}> {element.reviews}</Typography>
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



export default CardTour;