import React, { useEffect /* useState */ } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";
import { createOrder } from "../actions/orderActions";
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import { USER_DETAILS_RESET } from '../constants/userConstants';

const PlaceOrderScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);

  if (!cart.shippingAddress.address) {
    navigate('/shipping');
  } else if (!cart.paymentMethod) {
    navigate('/payment');
  }

  //   Calculate prices(prefer in reducer or in be)
  /*   const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  } */

  /*   cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  
  cart.shippingPrice = cart.itemsPrice > 9999 ? 0 : 499;
  //cart.taxPrice = (0.18 * cart.itemsPrice).toFixed(2);
  cart.taxPrice = (0.18 * cart.itemsPrice)
  cart.totalPrice =  Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice); */

  //console.log(cart.shippingPrice, cart.taxPrice, typeof cart.itemsPrice,);
  //avoiding the mutation of cart object

  const itemsPrice = cart.cartItems.reduce( (acc, item) => acc + item.price * item.qty, 0 );
  const shippingPrice = itemsPrice > 9999 ? 0 : 499;
  const taxPrice = 0.18 * itemsPrice;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;
  
  //console.log(cart, 'cart state');
  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
      dispatch({ type: USER_DETAILS_RESET });
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [navigate, success, order, dispatch]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice, //itemsPrice: itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      })
    );
  };

  //console.log(cart, 'order screen after maths');
  //console.log(totalPrice, "order screen");

  return (
    <>
      <CheckoutSteps step1 step2 step3 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address: </strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}{" "}
                {cart.shippingAddress.postalCode},{" "}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method: </strong>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={item.product}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ₹ {item.price} = ₹{" "}
                          {item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>₹ {itemsPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>₹ {shippingPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>₹ {taxPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>₹ {totalPrice.toFixed(2)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant='danger'>{error}</Message>}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block mb-1"
                  disabled={!cart.cartItems.length}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
