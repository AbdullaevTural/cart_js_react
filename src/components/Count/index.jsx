import "./style.scss"
const Count = ({count, increase, id, decrease, changeValue}) => {
    return (       <div className="count">
    <div className="count__box">
      <input
        onChange={(e)=>{changeValue(id, +e.target.value)}}
        type="number"
        className="count__input"
        min="1"
        max="100"
        value={count}
      />
    </div>
    <div className="count__controls">
      <button className="count__up" type="button" onClick={() => {increase(id)}}>
        <img src="./img/icons/icon_up.svg" alt="increase" />
      </button>
      <button className="count__down" type="button">
        <img src="./img/icons/icon_down.svg" alt="decrease" onClick={() => {decrease(id)}} />
      </button>
    </div>
  </div> );
}
 
export default Count;