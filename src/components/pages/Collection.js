import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Mycontext } from '../../App';
import { useNavigate } from 'react-router-dom';


const Collection = () => {

  const navigate = useNavigate()
 

  const {products,search,setCartId,logo,setCart,cartId,setprice }= useContext(Mycontext)
  const [pdata,setPdata] = useState(products)
  useEffect(() => {
    // Filter cart based on the logo.id and set the result to cartId
    setCart(cartId.filter((car) => logo.id === car.userid));
  }, [cartId, logo.id]);

  const searchFilter = useCallback(() => {
    const result = products.filter((val) =>
      search === "" ? val : val.name.toLowerCase().includes(search.toLowerCase())
    );
    setPdata(result);
  }, [search, products]);
  

  useEffect(()=>{
    searchFilter(products)
  },[search,products,searchFilter])

const addToCart =(valueu) => {
const itemIndex =cartId.findIndex((item) => item.id===valueu.id &&item.userid==logo.id );

if(itemIndex !== -1){
 const updcart = [...cartId];
 updcart[itemIndex].quantity=(updcart[itemIndex].quantity|| 1)+1;
 setCartId(updcart);
}
else{

  setCartId([...cartId,{...valueu, quantity:1,userid:logo.id }])
}
}


  

  return (
    <div className='main Collection'>
      <div>
        <h1>Collection</h1>
      </div>
      <Row className="m-5" >
        {
          pdata.map((value) => {
            const { id, name, image, price } = value;
            return (
              <div>

                <Card key={id} style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item style={{ fontSize: "25px", fontWeight: 'bolder', color: '#6E7051' }}>
                      💲{price}
                      </ListGroup.Item>
                    </ListGroup>
                    <Button variant="primary" 
                   
                    onClick={() =>{
                      if(!logo){
                        alert("Please Login to Continue")
                        navigate("/login")
                      
                        // ToCart(value)
                      }else
                       {addToCart(value)}}}
                    >addToCart</Button>
                    <Button variant="primary"    
                     style={{marginLeft:'10px'}}              
                    onClick={() => {setprice(price)
                    navigate("/payment")
                    }}
                    >BUY NOW</Button>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
      </Row>
    </div>
  )

}

export default Collection;
