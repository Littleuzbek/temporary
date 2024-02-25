import "./Brands.css";
import Controller from "./Controller";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
import Savat from "./Savat";
import { store } from "../../store";
import Product from "./Product";

export default function Brands() {
  const brandId = useLoaderData();
  const [savat, setSavat] = useState(false);
  const [casual,setCasual] = useState('casual');

  const handleCasual = () =>{
    setCasual('casual')
    location.href = 'http://localhost:5173/korzinka'
  }

  return (
    <div className="brands">
      <div className="search">
        <input type="text" name="" id="" placeholder="Mahsulotlar qidirish" />
      </div>

      <Logo id={brandId} />

      <div className="category">
        <div onClick={handleCasual}>casual</div>
        <Link onClick={()=>setCasual(false)} to="meat">meat</Link>
        <Link onClick={()=>setCasual(false)} to="milky">milk</Link>
        <Link onClick={()=>setCasual(false)} to="beverage">beverage</Link>
        <Link onClick={()=>setCasual(false)} to="sweets">sweets</Link>
        <div>makeup</div>
      </div>

      <Outlet />

      {casual && <div className="products">
        {store.korzinka
          .filter((a) => a.type === casual)
          .map((details, index) => (
            <Product details={details} key={index} />
          ))}
      </div>}

      <Controller onSavat={setSavat} />
      {savat && <Savat onSavat={setSavat} />}
    </div>
  );
}

export const BrandDataLoader = ({ params }) => {
  const { id } = params;
  return id;
};
