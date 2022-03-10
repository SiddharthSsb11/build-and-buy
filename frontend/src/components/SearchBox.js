import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
export default function SearchBox() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(keyword, "search box text")
    if(keyword.trim()){
        //navigate(`/search/keword/${keyword}`);
        navigate(`/search/${keyword}`);
    }else{
        navigate('/')
    }

  };

  return (
   <div>hello</div>
  );
}