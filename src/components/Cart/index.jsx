import CartHeader from "../CartHeader";
import CartFooter from "../CartFooter";
import Product from "../Product";
import data from "./../../data"

const Cart = () => {
  console.log(data);
    return (  <section className="cart">
    <CartHeader/>
    <Product/>
    <CartFooter/>

   
  </section> );
}
 
export default Cart;