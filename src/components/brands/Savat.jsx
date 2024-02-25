import { useSelector } from "react-redux";
import SavatAction from "./SavatActions";

export default function Savat(prop) {
  const { onSavat } = prop;
  const totalPrice = useSelector(state=>state.savat.totalPrice);
  return (
    <div className="savat">
      <div className="layer" onClick={() => onSavat(false)}></div>
      <div className="savatOn">
        <SavatAction />
        <div className="totalPrice">
          <p>Jami: {totalPrice}</p>
        </div>
      </div>
    </div>
  );
}
