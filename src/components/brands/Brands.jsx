import "./Brands.css";
import Controller from "./Controller";
import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
import Savat from "./Savat";
import { store } from "../../store";
import Product from "./Product";

export default function Brands() {
  const brandId = useLoaderData();
  const [savat, setSavat] = useState(false);
  const [casual, setCasual] = useState("casual");
  const navigate = useNavigate()

  const handleCasual = () => {
    const location = window.location.pathname.split('/');
    const backCasual = window.location.pathname.split('/').at(-2);
    if(location.length === 3){
      navigate(`/${backCasual}`)
      setCasual('casual')
    }
  };

  return (
    <div className="brands">
      <div className="search">
        <input type="text" name="" id="" placeholder="Mahsulot qidirish" />
      </div>

      <Logo id={brandId} />

      <div className="category">
        <div onClick={handleCasual}>
        <img src="https://cdn-icons-png.flaticon.com/128/5278/5278722.png" alt="" />
        <p>{`Top`}</p>
        <p>{`10`}</p>
        </div>
        <Link onClick={() => setCasual(false)} to="meat">
          <img src="https://cdn-icons-png.flaticon.com/128/3076/3076125.png" alt="" />
          <p>{`Go'sht`}</p>
          <p>{`mahsulolari`}</p>
        </Link>
        <Link onClick={() => setCasual(false)} to="milky">
        <img src="https://cdn-icons-png.flaticon.com/128/9954/9954768.png" alt="" />
          <p>{`Sut`}</p>
          <p>{`mahsulotlari`}</p>
        </Link>
        <Link onClick={() => setCasual(false)} to="beverage">
        <img src="https://cdn-icons-png.flaticon.com/128/2722/2722527.png" alt="" />
          <p>{`Ichimliklar`}</p>
        </Link>
        <Link onClick={() => setCasual(false)} to="sweets">
        <img src="https://cdn-icons-png.flaticon.com/128/883/883431.png" alt="" />
          <p>{`Shirinliklar`}</p>
        </Link>
        <div>
        <img src="https://cdn-icons-png.flaticon.com/128/3993/3993874.png" alt="" />
          <p>{`Yuvinish`}</p>
          <p>{`mahsulotlari`}</p>
        </div>
      </div>

      <Outlet />

      {casual && (
        <div className="products">
          {store.korzinka
            .filter((a) => a.type === casual)
            .map((details, index) => (
              <Product details={details} key={index} />
            ))}
        </div>
      )}

      <Controller onSavat={setSavat} />
      {savat && <Savat onSavat={setSavat} />}
    </div>
  );
}

export const BrandDataLoader = ({ params }) => {
  const { id } = params;
  return id;
};
