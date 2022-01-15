import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listOrders } from '../actions/orderActions';

const OrderListScreen = ( ) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      navigate('/login');
    }
  }, [dispatch, navigate, userInfo])

  return (
    <>
      <h1>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr style = {{borderBottom: '3px solid #6F42C1'}}>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr style = {{borderBottom: '3px solid #6F42C1'}} key={order._id}>
                <td style = {{padding: '10px 0px'}} >{order._id}</td>
                <td style = {{padding: '10px 0px'}}>{order.user && order.user.name}</td>
                <td style = {{padding: '10px 0px'}}>{order.createdAt.substring(0, 10)}</td>
                <td style = {{padding: '10px 0px'}}>₹ {order.totalPrice}</td>
                <td style = {{padding: '10px 0px'}}>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td style = {{padding: '10px 0px'}}>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td style = {{padding: '10px 0px'}}>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant='secondary' className='btn-sm btn-outline-secondary'>
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default OrderListScreen