import { AiOutlineMinus } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { SavatActions } from "../../redux/SavatSlice";
import { useDispatch } from "react-redux";

export default function Product(prop) {
  const { details } = prop;
  const dispatch = useDispatch();

  const AddProduct = () => {
    console.log(details.id);
    dispatch(SavatActions.addItem(details));
  };
  
  const DecProduct = () => {
    dispatch(SavatActions.removeItem(details.id));
  };
  
  return (
    <div className="product" key={details.id}>
      <img src={details.img} alt={details.img} />
      <p className="description">{details.description}</p>
      <p className="price">{details.price}</p>
      <div className="actionBtn">
        <AiOutlineMinus className="decProduct" onClick={DecProduct} />
        <IoMdAdd className="addProduct" onClick={AddProduct} />
      </div>
    </div>
  );
}
