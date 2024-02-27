import logoK from "../../imgs/korzinkaLogo.png";
import logoMag from "../../imgs/magnumLogo.png";
import karrafour from "../../imgs/karrafour.png";
import logoHavas from "../../imgs/havas.png";
import logoMakro from "../../imgs/makro.png";
import logoBaraka from "../../imgs/baraka.png";
import { useEffect, useState } from "react";

export default function Logo(prop) {
  const { id } = prop;
  const location = window.location.pathname;
  const [logo,setLogo] = useState('');

  useEffect(()=>{
    setLogo(location.split('/').at(-2))
  },[location,logo])

  let img;
  if (id === "korzinka" || logo === "korzinka") {
    img = logoK;
  } else if (id === "magnum" || logo === 'magnum') {
    img = logoMag;
  } else if (id === "karrafour" || logo === 'karrafour') {
    img = karrafour;
  } else if (id === "havas" || logo === 'havas') {
    img = logoHavas;
  } else if (id === "makro" || logo === 'makro') {
    img = logoMakro;
  } else if (id === "baraka" || logo === 'baraka') {
    img = logoBaraka;
  }

  return (
    <div className="logo">
      <img src={img} alt="" className={id === 'korzinka'? 'korzinka' : ''} />
    </div>
  );
}
