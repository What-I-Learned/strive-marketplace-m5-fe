import "./addProduct.css";
import { Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const AddProduct = (props) => {
  const [file, setFile] = useState(null);
  const [productDetails, setProductDetaisl] = useState({
    product_name: "",
    description: "",
    brand: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetaisl((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        process.env.REACT_APP_HOSTING + "/products",
        {
          method: "POST",
          body: JSON.stringify(productDetails),
          headers: {
            "Content-type": "application/json",
          },
          // body: formData,
        }
      );
      if (response.ok) {
        let product = await response.json();
        let productId = product.newProduct.id;
        try {
          const formData = new FormData();
          formData.append("image", file);
          const response = await fetch(
            process.env.REACT_APP_HOSTING + `/products/${productId}/upload`,
            {
              method: "POST",
              body: formData,
            }
          );
          if (response.ok) {
            console.log("it worked");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("not sent");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Form onSubmit={submitForm} className="new-product-form">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="product_name"
            value={productDetails.name}
            onChange={handleChange}
            type="text"
            placeholder="Item name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            value={productDetails.description}
            onChange={handleChange}
            placeholder="Item Description"
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            name="brand"
            value={productDetails.brand}
            onChange={handleChange}
            type="text"
            placeholder="Brand name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            value={productDetails.price}
            onChange={handleChange}
            type="number"
            placeholder="Item price"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Product Category</Form.Label>
          <Form.Control
            name="category"
            as="select"
            defaultValue="Mobile Phones"
            value={productDetails.category}
            onChange={handleChange}
          >
            <option>Mobile Phones</option>
            <option>Computers</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            onChange={(e) => {
              const file = e.target.files[0];
              setFile(file);
            }}
            accept="image/*"
            type="file"
            placeholder="Image"
            // required
          />
        </Form.Group>
        <Button style={{ marginLeft: 10 }} type="submit" variant="primary">
          Upload a Product
        </Button>
      </Form>
    </div>
  );
};
export default AddProduct;
