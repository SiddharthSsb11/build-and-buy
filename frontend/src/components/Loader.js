import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  //class='sr-only'
  //className="visually-hidden"
  //variant='primary'
  return (
    <Spinner animation='border' role='status' variant='secondary' 
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
      }}
    >
      <span className="visually-hidden" >Loading...</span>
    </Spinner>
  )
}

export default Loader