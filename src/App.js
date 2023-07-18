import Toursection from "./components/Toursection";
import Container from '@mui/material/Container';
import NavBar from './components/NavBar'
import ChangeBody from './components/ChangeBody'
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Container>
      <Toursection/>
      </Container >
      <ChangeBody></ChangeBody>
    </div>
  );
}

export default App;
