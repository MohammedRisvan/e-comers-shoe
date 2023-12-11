
// import React,{ useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Button, Card, ListGroup, Row } from 'react-bootstrap';
// import { Mycontext } from '../../App';
// import "./Admin.css";

// // import React, { useContext, useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { Button, Card, ListGroup, Row } from 'react-bootstrap';
// // import { Mycontext } from '../../App';
// // import './Admin.css';
// const AdminPanelProducts = () => {
//   const navigate=useNavigate()
//   const { products,setProducts,setindex} = useContext(Mycontext);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [filterType, setFilterType] = useState("All");
  

//   console.log( products);



//  const setIndexcatch = (value)=>{
//   console.log(value);
//     const indexnum = products.indexOf(value);
 
//       setindex(indexnum);
//       navigate("/AdminSaidbar/edit")
   
//   }
//   //   const setIndexcatch = (value) => {
// //     const indexnum = products.indexOf(value);
// //     setIndex(indexnum);
// //     navigate('/AdminSaidbar/edit');
// //   };

//   const deleteProduct = (e,itemId) => {
//     const updatedProduct = products.filter((item) => item.id !== itemId);
//     setProducts(updatedProduct);
//     console.log(itemId);
//   };
//   const filteredData = filterType === "All" ? products : products.filter(item => item.type === filterType);

//   return (
//     <div className="contend">
//       <h1>Welcome to Admin Panel</h1>
//       <Link to=""><button onClick={navigate("/AdminSaidbar/add")}>Add Product</button></Link>
//       <Row className='container'>
//       {
//       products.length===0?
//         <tr >
//           <td colSpan='6'>
//             <h1>Empty product</h1>
//           </td>
//         </tr>:filteredData.map((value ,index) => {
//   const { id, image, name, price } = value;
//   return (
//     <div>

//     <Card key={id} style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={image} />
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         <ListGroup className="list-group-flush">
//           <ListGroup.Item style={{ fontSize: "25px", fontWeight: 'bolder', color: '#6E7051' }}>
//             ${price}
//           </ListGroup.Item>
//         </ListGroup>
//         <Button variant="primary"className="float-start mr-5"
//          onClick={(e)=>{
//           deleteProduct(e,id)}}>Delete</Button>
//           <Button variant="primary" className="float-end ml-6"
//          onClick={()=>{
//           setIndexcatch(value);
          
//          }}>Edit</Button>
//       </Card.Body>
//     </Card>
  
//    </div>
//   );
// })}
// </Row >  

//     </div>
//   );
// }

// export default AdminPanelProducts;
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, ListGroup, Row } from 'react-bootstrap';
import { Mycontext } from '../../App';
import './Admin.css';

const AdminPanelProducts = () => {
  const navigate = useNavigate();
  const { products, setProducts, setIndex } = useContext(Mycontext);
  const [showEditModal, setShowEditModal] = useState(false);
  const [filterType, setFilterType] = useState('All');

  // const setIndexcatch = (value) => {
  //   const indexnum = products.indexOf(value);
  //   setIndex(indexnum);
  //   navigate('/AdminSaidbar/edit');
  // };// 
   const setIndexcatch = (value)=>{
  console.log(value);
    const indexnum = products.indexOf(value);
 
      setIndex(indexnum);
      navigate("/AdminSaidbar/edit")
   
  }

  const deleteProduct = (itemId) => {
    const updatedProduct = products.filter((item) => item.id !== itemId);
    setProducts(updatedProduct);
    console.log(itemId);
  };

  const filteredData =
    filterType === 'All' ? products : products.filter((item) => item.type === filterType);

  return (
    <div className="contend">
      <h1>Welcome to Admin Panel</h1>
      <div className='btnadminpro'>
     

        <button onClick={() => navigate('/AdminSaidbar/add')}>Add Product</button>

        <button onClick={() => setFilterType('men')}>Men</button>
        <button onClick={() => setFilterType('women')}>Women</button>
        <button onClick={() => setFilterType('All')}>Collection</button>
     </div>
      <Row className="container">
        {products.length === 0 ? (
          <tr>
            <td colSpan="6">
              <h1>Empty product</h1>
            </td>
          </tr>
        ) : (
          filteredData.map((value) => {
            const { id, image, name, price } = value;
            return (
              <div key={id}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item style={{ fontSize: '25px', fontWeight: 'bolder', color: '#6E7051' }}>
                        ${price}
                      </ListGroup.Item>
                    </ListGroup>
                    <Button variant="primary" className="float-start mr-5" onClick={() => deleteProduct(id)}>
                      Delete
                    </Button>
                    <Button
                      variant="primary"
                      className="float-end ml-6"
                      onClick={() => {
                        setIndexcatch(value);
                      }}
                    >
                      Edit
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })
        )}
      </Row>
    </div>
  );
};

export default AdminPanelProducts;
