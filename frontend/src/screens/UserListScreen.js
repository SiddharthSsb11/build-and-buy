import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listUsers, deleteUser } from '../actions/userActions';

const UserListScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      navigate('/');
    }
  }, [dispatch, navigate, userInfo, successDelete])
  //running useEffect again on deleting a user, to dispatch lustUsers-to get the new updated userLists after the reload/re-render 

  const deleteHandler = (id) => {
    //console.log('delete');
    if (window.confirm('Are you sure')) {
        dispatch(deleteUser(id));
    }
  }

  return (
    <>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr style = {{borderBottom: '3px solid #6F42C1'}}>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr style = {{borderBottom: '3px solid #6F42C1'}} key={user._id}>
                <td style = {{padding: '10px 0px'}}>{user._id}</td>
                <td style = {{padding: '10px 0px'}}>{user.name}</td>
                <td style = {{padding: '10px 0px'}}>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td style = {{padding: '10px 0px'}}>
                  {user.isAdmin ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td style = {{padding: '10px 0px'}}>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default UserListScreen