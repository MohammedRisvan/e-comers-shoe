
import "./Home.css";
import React from 'react' 
import Collection from "./Collection";
import { useNavigate } from "react-router-dom";


 const Home = () => {
  const navigate = useNavigate()
  return (
    <div id='total'>
      <div className='firest'>
        <div className='firesta'>
          <h1>Love the Planet we walk on</h1>
          <p>Bibendum fermentum, aenean donec<br/> pretium aliquam  blandit tempor 
            imperdiet arcu arcu ut nunc in dictum mauris at ut.</p>
        <button onClick={() =>navigate("/men")}>SHOP MEN</button>
        <button onClick={() =>navigate("/women")}>SHOP WOMEN</button>
        </div>
      </div><div>
      <div className='second'>
        <h4>AS SEEN IN:</h4>
        <img decoding="async" loading="lazy" width="179" height="100" src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-5.svg" alt="text" />      
        <img  decoding="async" loading="lazy" width="179" height="100" src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-4.svg"  alt="text"/>
        <img decoding="async" loading="lazy" width="178" height="100" src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-1.svg" alt=""></img>
        <img decoding="async" loading="lazy" width="178" height="100" src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-1.svg" alt=""></img>
      </div></div>
      <div className='third'>
        <div className="thirda">
          <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-home-about-image.jpg" alt="shoe" />
          </div>
          <div className='thirdb'>
            <h5>ABOUT US</h5>
          <h1>designed for comfort and sustainability</h1>
          <p>Nullam auctor faucibus ridiculus dignissim sed et auctor sed eget auctor nec sed elit nunc, magna non urna amet ac neque ut quam enim pretium risus gravida ullamcorper adipiscing at ut magna</p>
          <button>READ MORE</button>
          </div>
      </div>
      <div>
             <Collection />  {/* data={item} */}
    </div>
     
      </div>
  )
}

export default Home

