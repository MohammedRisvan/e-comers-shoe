

import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Mycontext } from '../../App';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate = useNavigate()
  const {setProducts}=useContext(Mycontext)
  const [product, setProduct] = useState({
    type: '',
    name: '',
    image: '',
    price: 0,
  });
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const addProduct = (e) => {
    e.preventDefault();
      console.log('we are here');
      const validationErrors = {};
      if (!product.name.trim()) {
        validationErrors.name = "productname is not required"
      }
      if (!product.image.trim()) {
        validationErrors.image = "image is requird"
      } 
      if (!product.type.trim()) {
        validationErrors.type = "type is requird"
      } 
      if (!product.price) {
        validationErrors.price = "price not match"
      }
    
  
   setErrors(validationErrors);
      if (Object.keys(validationErrors).length === 0) {
        alert("add product Submitted is successfully")
        navigate("/AdminSaidbar/Adminproduct");
        //LastData();
        setProducts((products) => [...products, {
          id: products.length + 1,
          name: product.name,
          image: product.image,
          type: product.type,
          price: product.price,
        }])
      }
    
    console.log('Product Submitted:', product);
  };

  return (
    <div className='carta'>
      <h1>Welcome to my room</h1>
      <Form className='form' onSubmit={addProduct}>
        <Form.Group className='mb-3' controlId='formBasicProductName'>
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type='text'
            name='name'
            placeholder='Product name'
            onChange={handleChange}
          />
        {errors.name && <span id='ERROR'>{errors.name}</span>}<br />

        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicProductPrice'>
          <Form.Label>image link</Form.Label>
          <Form.Control
            type='text'
            name='image'
            placeholder='Product imag'
            onChange={handleChange}
          />
        </Form.Group>
        {errors.image && <span id='ERROR'>{errors.image}</span>}<br />

        <Form.Group className='mb-3' controlId='formBasicProductType'>
          <Form.Label>Product Type</Form.Label>
          <Form.Select name='type' onChange={handleChange}>
            <option value=''>Select Type</option>
            <option value='men'>Men</option>
            <option value='women'>Women</option>
            
          </Form.Select>
        </Form.Group>
        {errors.type && <span id='ERROR'>{errors.type}</span>}<br />

        <Form.Group className='mb-3' controlId='formBasicProductPrice'>
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type='number'
            name='price'
            placeholder='Product price'
            onChange={handleChange}
          />
        {errors.price && <span id='ERROR'>{errors.price}</span>}<br />

        </Form.Group>

        <Button variant='primary' className='submit' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default AddProduct;
export const Edit =()=>{

}