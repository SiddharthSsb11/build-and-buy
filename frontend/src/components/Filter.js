import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const Filter = ({products, setFilteredProducts}) => {

  console.log('filter products initially',products);

  const componentsHandler = () =>{
      const components = products.filter(product => product.category === "Components");
      //console.log(components);
      setFilteredProducts(components);
  }

  const peripheralsHandler = () =>{
    const peripherals = products.filter(product => product.category === "Peripherals");
    setFilteredProducts(peripherals);
  }

  const assembledHandler = ()=> {
    const assembled = products.filter(product => product.category === "Assembled");
    setFilteredProducts(assembled);
  }

  const inStockHandler = () => {
    const inStock = products.filter(product => product.countInStock !== 0)
    setFilteredProducts(inStock);
  }

  const highToLowHandler = () => {
    //console.log('high')
    const productsCopy =[...products];
    //console.log(productsCopy)
    const highToLow = productsCopy.sort((a,b)=> b.price - a.price );
    setFilteredProducts(highToLow)
  }

  const lowToHighHandler = () => {
    //console.log('low')
    const productsCopy =[...products];
    const lowToHigh = productsCopy.sort((a,b)=> a.price - b.price );
    //console.log(lowToHigh);
    setFilteredProducts(lowToHigh);
  }

  const resetHandler = () => {
      setFilteredProducts(products)
      //console.log(products)
  }

  return (
    <div>
      <ButtonGroup aria-label="Show" className="me-3 mb-1" >
        <Button variant="secondary" onClick={componentsHandler}>Components</Button>
        <Button variant="secondary" onClick={peripheralsHandler}>Peripherals</Button>
        <Button variant="secondary" onClick={assembledHandler}>Assembled</Button>
        <Button variant="secondary" onClick={inStockHandler}>In Stock</Button>
      </ButtonGroup>

      <ButtonGroup aria-label="Price" className="me-3 mb-1">
        <Button variant="secondary" onClick={highToLowHandler}>₹ High to Low</Button>
        <Button variant="secondary" onClick={lowToHighHandler}>₹ Low to High</Button>
      </ButtonGroup>

      <Button variant="secondary" className="mb-1" onClick={resetHandler}>Reset</Button> 
    </div>
  );
};

export default Filter;
