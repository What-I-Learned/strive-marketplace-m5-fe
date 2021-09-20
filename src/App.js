import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <Container id="main-contaier">
      <Router>
        <Navigation />
        {/* <Navigation /> */}
        {/* <Route component={AlbumDetails} path="/album/:albumId" /> */}
        {/* <Route component={ArtistDetails} path="/artist/:artistId" /> */}
        {/* music player */}
        {/* <Player /> */}
      </Router>
    </Container>
  );
}

export default App;
