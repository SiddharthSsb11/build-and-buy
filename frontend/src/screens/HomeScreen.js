import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Accordion } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";
import Paginate from "../components/Paginate";
import CoverImage from "./coverNew.png";
import Filter from "../components/Filter"
//import axios from 'axios'

const HomeScreen = () => {
  //const [filter, setFilter] = useState("");
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  const [filteredProducts, setFilteredProducts] = useState([]);

  console.log('products',products);

  const dispatch = useDispatch();
  const params = useParams();
  //console.log(params);
  const pageNumber = params.pageNumber;
  const keyword = params.keyword;

  /* const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList; */

 /*  const filterHandler = (e) => {
    e.preventDefault();
    console.log(filter);
  };
 */
  useEffect(() => {
    //side-effect, async,http req in thunk //linking them here
    dispatch(listProducts(keyword, pageNumber, setFilteredProducts));
    //setFilteredProducts(products);
    //// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, keyword, pageNumber]);
  //console.log('filtered products',filteredProducts)

  //filters //price sorting //category sorting //out of stock filtering

  return (
    <>
      <Meta />
      {!keyword ? (
        <>
          <img
            src={CoverImage}
            alt="coverPicture"
            width="100%"
            style={{
              marginBottom: "1rem",
              borderBottom: "3px double #6F42C1",
              paddingBottom: "1rem",
            }}
          />
          {/* <h1
            style={{
              width: "14%",
              color: "#EA39B8",
              //textDecoration: "none",
              fontSize: "20px",
              border: "4px solid #EA39B8",
              padding: "7px",
              borderRadius: "1p0x",
              letterSpacing: "1px",
              textAlign: "center"
            }}
          >
            Top Products
          </h1> */}

          <ProductCarousel />
        </>
      ) : (
        <Link to="/" className="btn btn-outline-secondary my-3">
          Go Back
        </Link>
      )}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",}}>
        <h1 style={{ marginTop: "8px" }}>Components & Peripherals</h1>

        <Accordion style={{width:"60%"}}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Filters</Accordion.Header>
            <Accordion.Body>
              <Filter products={products} setFilteredProducts={setFilteredProducts}/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          {products.length === 0 && (
            <h1 /* style={{textAlign: "center"}} */>
              😵 ❌ No Products Found ❌ 😵
            </h1>
          )}
          <Row>
            {filteredProducts.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
