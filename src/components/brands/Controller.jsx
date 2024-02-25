import { MdOutlineShoppingCart } from "react-icons/md";
import { TbHomeMove } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Controller(prop) {
  const {onSavat} = prop
  const totalQuantity = useSelector(state=>state.savat.totalQuantity)

  return (
    <div className="controller">
    <Link to='/'>
    <TbHomeMove className="controlIcon" />
      <p>Home</p>
    </Link>
    <div>
    <CiDiscount1 className="controlIcon" />
    <p>Chegirma</p>
    </div>
    <div>
    <SlLocationPin className="controlIcon"/>
    <p>{`Do'konlar`}</p>
    </div>
    <div onClick={()=>onSavat(true)}>
    <MdOutlineShoppingCart className="controlIcon"/>
    <p>Savat</p>
    <p className="totalQuantity">{totalQuantity}</p>
    </div>
  </div>
  )
}
