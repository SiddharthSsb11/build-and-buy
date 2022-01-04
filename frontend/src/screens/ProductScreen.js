import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import classes from './ProductScreen.module.css';
//import axios from 'axios';
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductDetails } from '../actions/productActions'

const ProductScreen = ({ match }) => {
    
    const [qty, setQty] = useState(1);//useState(0)

    const {id} = useParams();
    const navigate = useNavigate();
    //console.log(params);

    const dispatch = useDispatch();

    //const [product, setProduct] = useState({})

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
      /* const fetchProduct = async () => {
        const { data } = await axios.get(`/api/products/${params.id}`)
  
        setProduct(data)
      }
      fetchProduct() */

      dispatch(listProductDetails(id));

    }, [id, dispatch]);
    
    const addToCartHandler = () => {
      console.log('adding to cart');
      navigate(`/cart/${id}?qty=${qty}`);
      //optional?
    }

    //<ListGroup variant='flush'>
    return (
      <>
        <Link className='btn btn-outline-secondary my-3' to='/'>
          Go Back
        </Link>
        {loading ? ( <Loader />) : error ? (<Message variant='danger'>{error}</Message>) : 
        (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup>
              <ListGroup.Item className = {classes.border}>
                <h3 style={{color:'#32FBE2'}}>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item className = {classes.padding}>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item style={{paddingBottom: "14px"}} className={classes.border}>Price: ₹{product.price}</ListGroup.Item>
              <ListGroup.Item className={classes.padding}><h5 style={{color:'#32FBE2'}}>Description</h5> 
                {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>₹{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
  
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control style={{padding: '0.25rem 0.35rem'}} className='form-select' as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}> {x + 1} </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button className='w-100' type='button' disabled={product.countInStock === 0} onClick={addToCartHandler}>
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        )}
      </>
    )
  }
  
  export default ProductScreen