import { Link } from "react-router-dom";
import {Images} from "../imgs/img"
export default function Home() {
  return (
    <div className="home">
      <div className="shopBrands">
        {Images.map((brand)=>(
          <Link to={brand.id} key={brand.id}>
            <img src={brand.img} alt="" className="carts"/>
          </Link>
        ))}
      </div>
    </div>
  );
}
