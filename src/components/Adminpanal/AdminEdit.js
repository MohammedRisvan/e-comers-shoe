

import React, { useContext, useState } from 'react';
import { Mycontext } from '../../App';
import { useNavigate } from 'react-router-dom';

const AdminEdit = () => {
  const Navigate = useNavigate();
  const { products, setProducts, index } = useContext(Mycontext);
  const [prodata, setProdata] = useState(products[index]);

  const addproduct = () => {
    const updatedProducts = products.map((item) =>
      item.id === prodata.id
        ? { ...item, name: prodata.name,type:prodata.type, price: prodata.price, image: prodata.image }
        : item
    );

    setProducts(updatedProducts);
    Navigate("/AdminSaidbar/userpanal");
  };

  return (
    <div style={{ marginLeft: "25vw" }}>
      {prodata ? (
        <>
          <div className="card" style={{ width: '18rem' }}>
            <img src={prodata.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{prodata.name}</h5>
              <p className="card-text" style={{ fontSize: "50px" }}>
                ${prodata.price}
              </p>
              <a href="/AdminSaidbar/userpanal" className="btn btn-primary">
                Go back
              </a>
            </div>
          </div>
          <div>
            <form>
              <label>Product Name</label>
              <input
                type="text"
                value={prodata.name}
                onChange={(e) =>
                  setProdata({
                    ...prodata,
                    name: e.target.value,
                  })
                }
              />
              <label>Image</label>
              <input
                type="text"
                name="image"
                value={prodata.image}
                onChange={(e) =>
                  setProdata({
                    ...prodata,
                    image: e.target.value,
                  })
                }
              />
              <label>Type</label>
              <select
                value={prodata.type}
                onChange={(e) =>
                  setProdata({
                    ...prodata,
                    type: e.target.value,
                  })
                }
              >
                <option value="men">Men</option>
                <option value="women">Women</option>
              </select>
              <label>Price</label>
              <input
                type="number"
                placeholder="Product price"
                value={prodata.price}
                onChange={(e) =>
                  setProdata({
                    ...prodata,
                    price: e.target.value,
                  })
                }
              />
              <button className="btn btn-primary" onClick={() => addproduct()}>
                SUBMIT
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <h1>Empty product</h1>
        </>
      )}
    </div>
  );
};

export default AdminEdit;
