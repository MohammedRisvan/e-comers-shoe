import React, { useContext } from 'react'//, useState
import { Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Mycontext } from '../../App';
import { FaUnderline } from 'react-icons/fa';

const Women = () => {

  const {products,cart,setCartId}= useContext(Mycontext)
 // const [pdata,setPdata] = useState(products)
  const womenitems = products.filter((value) => value.type === 'women')
  const addToCart =(valueu) => {
    const itemIndex =cart.findIndex((item) => item.id===valueu.id);
    
    if(itemIndex !== -1){
     const updcart = [...cart];
     updcart[itemIndex].quantity=(updcart[itemIndex].quantity|| 1)+1;
     setCartId(updcart);
    }
    else{
    
      setCartId([...cart,{...valueu, quantity:1 }])
    }
    }

  return (
    <div className='main Collection'>
      <div>
        <h1 style={{textDecoration:FaUnderline}}>Women</h1>
      </div>
      <Row className="m-5" >
        {
          womenitems.map((value) => {
            const { id, name, image, price } = value;
            return (
              <div>

                <Card key={id} style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item style={{ fontSize: "25px", fontWeight: 'bolder', color: '#6E7051' }}>
                        ${price}
                      </ListGroup.Item>
                    </ListGroup>
                    <Button variant="primary" onClick={()=>addToCart(value)}display="none">addToCart</Button>
                  </Card.Body>
                </Card>
              </div>
              //</div>
            )
          })}
      </Row>
    </div>
  )

}

export default Women;
