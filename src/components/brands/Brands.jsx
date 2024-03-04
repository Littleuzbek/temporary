import "./Brands.css";
import Controller from "./Controller";
import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
import Savat from "./Savat";
import { store } from "../../store";
import Product from "./Product";
import meat from '../../imgs2/meatCat.png'
import sut from '../../imgs2/12345.png'
import sweet from '../../imgs2/sweet3.jpg'
import ichimlik from '../../imgs2/1234.jpg'
import selfCare from '../../imgs2/123.png'
import top10 from '../../imgs2/123456.jpg'


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
        <img src={top10} alt="" />
        </div>
        <Link onClick={() => setCasual(false)} to="meat">
          <img src={meat} alt="" />
          <p>{`Go'sht`}</p>
          <p>{`mahsulolari`}</p>
        </Link>
        <Link onClick={() => setCasual(false)} to="milky">
        <img src={sut} alt="" />
          <p>{`Sut`}</p>
          <p>{`mahsulotlari`}</p>
        </Link>
        <Link onClick={() => setCasual(false)} to="beverage">
        <img src={ichimlik} alt="" />
          <p>{`Ichimliklar`}</p>
        </Link>
        <Link onClick={() => setCasual(false)} to="sweets">
        <img src={sweet} alt="" />
          <p>{`Shirinliklar`}</p>
        </Link>
        <div>
        <img src={selfCare} alt="" />
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
