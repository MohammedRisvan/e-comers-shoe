import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import './App.css';
import Navebar from './components/Navebar';
import Home from './components/pages/Home';
import Men from './components/pages/Men';
import Women from './components/pages/Women';
import Collection from './components/pages/Collection';
import Sale from './components/pages/sale';
import LookBook from './components/pages/Lookbooke'
import Addcart from './components/pages/Cart';
import Register from './components/pages/Register';
import Ourstory from './components/pages/Ourstory';
import Contact from './components/pages/Contact';
import Payment from './components/pages/payment';
import Addproduct from './components/Adminpanal/addproduct';
import { ProductData } from './components/Data/ProductData';
import userData from './components/Data/UserData';
import Login from './components/pages/Login';
import AdminpanalProducts from './components/Adminpanal/AdminPanalproducts';
import AdminSaidbar from './components/Adminpanal/AdminSaidbar';
import Users  from './components/Adminpanal/AdminUser';
import AdminEdit from './components/Adminpanal/AdminEdit';
import AIndex from './components/Adminpanal/Adminindex';
export const Mycontext = createContext();


function App() {
  const [search,setSearch]=useState('')
  const [logo,setLogo] = useState('')
  const [user, setUser] = useState(userData);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(ProductData);
  const [username,setUsername] = useState("");
  const[password,setPassword]= useState(0);
  const [admin,setAdmin]=useState(false)
  const [index, setIndex] = useState(null);
  const [price,setprice] =useState(0);
  const[cartId,setCartId] =useState([])
  const value = {
    cartId,
    setCartId,
    price,
    setprice,
  index, 
  setIndex,
    password,
    setPassword,
    admin,
    setAdmin,
    search,
    setSearch,
    logo,
    setLogo,
    username,
    setUsername,
    cart,
    setCart,
    products,
    setProducts,
    user,
    setUser
  };

  return (
    <>
      <Mycontext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Navebar />}>
            <Route path='/' element={<Home />} />
            <Route path='/men' element={<Men />} />
            <Route path='/women' element={<Women />} />
            <Route path='/collection' element={<Collection />} />
            <Route path='/lookbook' element={<LookBook />} />
            <Route path='/sale' element={<Sale />} />
            <Route path='/cart' element={<Addcart />} />
            <Route path='/ourstory' element={<Ourstory />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
          <Route path='/AdminSaidbar' element={<AdminSaidbar/>}>
            <Route index element={<AIndex/>}/>
          <Route path="Adminproduct" element={<AdminpanalProducts/>}/>
          <Route path="userpanal" element={<Users/>}/>
          <Route path="add"element={<Addproduct/>}/>
          <Route path="edit" element={<AdminEdit/>}/>
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/Alogin" element={<AdminLogin />} /> */}
          <Route path='/payment'element={<Payment/>}/>
        </Routes>
      </Mycontext.Provider>
    </>
  );
}

export default App;
