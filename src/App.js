import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation/Navigation";
import ProductListing from "./components/ProductListing/ProductListing";
import AddProduct from "./components/AddNewProduct/AddProduct";

function App() {
  return (
    <Container id="main-contaier">
      <Router>
        <Navigation />
        <main>
          <Switch>
            <Route exact path="/createNew" component={AddProduct} />
            {/* <Route exact path="/" component={ProductListing} /> */}
            {/* <Route exact path="/products/:id" component={ProductDetails} /> */}
          </Switch>
        </main>
      </Router>
    </Container>
  );
}

export default App;
