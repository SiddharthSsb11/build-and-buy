import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
export default function SearchBox() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/name/${name}`);
  };
  return (
   <div>hello</div>
  );
}