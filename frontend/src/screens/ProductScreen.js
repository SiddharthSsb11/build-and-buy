import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import classes from './ProductScreen.module.css';
import axios from 'axios';

const ProductScreen = ({ match }) => {
    const params = useParams();
    //console.log(params);

    const [product, setProduct] = useState({})

    useEffect(() => {
      const fetchProduct = async () => {
        const { data } = await axios.get(`/api/products/${params.id}`)
  
        setProduct(data)
      }
  
      fetchProduct()
    }, [params]);
    
    //<ListGroup variant='flush'>
    return (
      <>
        <Link className='btn btn-outline-secondary my-3' to='/'>
          Go Back
        </Link>
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
                <ListGroup.Item>
                  <Button className='w-100' type='button' disabled={product.countInStock === 0}>
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </>
    )
  }
  
  export default ProductScreen