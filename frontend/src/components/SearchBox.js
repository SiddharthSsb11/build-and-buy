import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const SearchBox = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(keyword, "///search box text");
    if (keyword.trim()) {
      //navigate(`/search/keword/${keyword}`);
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex ">
      <Form.Control style={{marginLeft: "1.5rem"}}
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mr-sm2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="outline-secondary" style={{marginLeft: "0.5rem"}}>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
