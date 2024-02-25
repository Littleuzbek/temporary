import { AiOutlineMinus } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { TbMoodSadSquint } from "react-icons/tb";
import { SavatActions } from "../../redux/SavatSlice";
import { Fragment } from "react";

export default function SavatAction() {
  const items = useSelector((state) => state.savat.items);
  const dispatch = useDispatch();
  const empty = `Hech narsa yo'q`;

  const AddProduct = (item) => {
    dispatch(
      SavatActions.addItem({
        id: item.id,
        price: item.price,
      })
      );
    };
    
    const DecProduct = (item) => {
    dispatch(
      SavatActions.removeItem(item.id)
    );
  };

  return (
    <Fragment>
      {items.length > 0 ? (
        items.map((item) => (
          <div className="onBuy" key={item?.id} id={item?.id}>
            <img src={item?.img} alt="" />
            <div className="onBuyDetails">
              <p>{item?.price}</p>
              <p>{item?.description}</p>
              <div>
                <AiOutlineMinus onClick={() => DecProduct(item)} className="onBuyBtn"/>
                <p>{item?.quantity}</p>
                <IoMdAdd onClick={() => AddProduct(item)} className="onBuyBtn"/>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="emptySavat">
          <p>{empty}</p>
          <TbMoodSadSquint className="sadEmoji" />
        </div>
      )}
    </Fragment>
  );
}
