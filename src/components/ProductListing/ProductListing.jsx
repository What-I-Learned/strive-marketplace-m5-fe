import "./productListing.css";
import { Spinner, Row, Col } from "react-bootstrap";
import ShopItem from "../ProductCard/ShopItem";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3001/products");
      if (response.ok) {
        const productsArray = await response.json();
        setProducts(productsArray);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else {
    if (error) {
      return <div>{error}</div>;
    } else {
      return (
        <Row>
          <p style={{ textAlign: "right", marginTop: 20 }}>
            <AddVideo fetchVideos={fetchVideos} />
          </p>
          {products.map((product, index) => (
            <Col key={index}>
              <Link to={`/products/${product._id}`}>
                <ShopItem item={product} />
              </Link>
            </Col>
          ))}
        </Row>
      );
    }
  }
};

export default ProductListing;
