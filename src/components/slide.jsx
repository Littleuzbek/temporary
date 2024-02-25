import { Fragment } from "react"
import './slide.css'
import solo from "../imgs2/solo.jpg";
import solo1 from "../imgs2/solol.jpg";
import solo2 from "../imgs2/solole.jpg";


export default function slide() {
    const Next =()=>{
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0])
      }

      const Prev =()=>{
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1])
      }
  return (
    <Fragment>
    <div className="container">
    <div className="slide">
      <div className="item" style={{ backgroundImage: `url(${solo})` }}>
        <div className="content">
          <div className="name">solo leveling1</div>
          <div className="des">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
            cumque.
          </div>
          <button>see more</button>
        </div>
      </div>
      <div className="item" style={{ backgroundImage: `url(${solo1})` }}>
        <div className="content">
          <div className="name">solo leveling1</div>
          <div className="des">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
            cumque.
          </div>
          <button>see more</button>
        </div>
      </div>
      <div className="item" style={{ backgroundImage: `url(${solo2})` }}>
        <div className="content">
          <div className="name">solo leveling1</div>
          <div className="des">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
            cumque.
          </div>
          <button>see more</button>
        </div>
      </div>
      <div className="item" style={{ backgroundImage: `url(${solo})` }}>
        <div className="content">
          <div className="name">solo leveling1</div>
          <div className="des">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
            cumque.
          </div>
          <button>see more</button>
        </div>
      </div>
      <div className="item" style={{ backgroundImage: `url(${solo1})` }}>
        <div className="content">
          <div className="name">solo leveling1</div>
          <div className="des">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
            cumque.
          </div>
          <button>see more</button>
        </div>
      </div>
      <div className="item" style={{ backgroundImage: `url(${solo2})` }}>
        <div className="content">
          <div className="name">solo leveling1</div>
          <div className="des">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
            cumque.
          </div>
          <button>see more</button>
        </div>
      </div>
      </div>
      </div>

  <div className="btn">
    <button className="prev" onClick={Prev}>{`<`}</button>
    <button className="next" onClick={Next}>{`>`}</button>
  </div>
</Fragment>

  )
}
