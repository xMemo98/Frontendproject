import { Container } from "@mui/material";
import CardTour from "./CardTour";
import Grid from '@mui/material/Grid';
import './Toursection.css'
import CardTour2 from "./CardTour2";

const Toursection = ()=>{
    return(
        <Container>
        <h2 className="SyleMe">Top Nigara Falls Tours</h2>
        <Container maxWidth='lg' sx={{marginBottom:'4rem'}} fixed>
        <CardTour/>
        </Container>
        <h2 className="SyleMe">Top Las Vegas Tours</h2>
        <Container maxWidth='lg' sx={{marginBottom:'4rem'}}>
        <CardTour2/>
        </Container>
        </Container>


    )
}


export default Toursection;