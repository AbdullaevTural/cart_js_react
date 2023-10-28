import "./style.scss"
import Count from "../Count"
import ButtonDelete from "../ButtonDelete";

const Product = () => {
    return (  <section className="product">
    <div className="product__img">
      <img
        src="./img/products/macbook.png"
        alt="Apple MacBook Air 13"
      />
    </div>
    <div className="product__title">Apple MacBook Air 13</div>
    <div className="product__count">
     <Count/>
    </div>
    <div className="product__price">110 000 руб.</div>
    <div className="product__controls">
    <ButtonDelete/>
    </div>

    <div className="product__img">
      <img
        src="./img/products/watch.png"
        alt="Apple watch"
      />
    </div>
    <div className="product__title">Apple watch</div>
    <div className="product__count">
    <Count/>
    </div>
    <div className="product__price">29 000 руб.</div>
    <div className="product__controls">
    <ButtonDelete/>
    </div>
 
  
    <div className="product__img">
      <img
        src="./img/products/mac.png"
        alt="Mac Pro"
      />
    </div>
    <div className="product__title">Mac Pro</div>
    <div className="product__count">
    <Count/>
    </div>
    <div className="product__price">190 000 руб.</div>
    <div className="product__controls">
     <ButtonDelete/>
    </div>
  </section> );
}
 
export default Product;