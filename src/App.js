import Toursection from "./components/Toursection";
import Container from '@mui/material/Container';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Container>
      <Toursection/>
      </Container >
    </div>
  );
}

export default App;
