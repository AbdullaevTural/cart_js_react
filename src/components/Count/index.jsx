import "./style.scss"
const Count = () => {
    return (       <div className="count">
    <div className="count__box">
      <input
        type="number"
        className="count__input"
        min="1"
        max="100"
        value="1"
      />
    </div>
    <div className="count__controls">
      <button className="count__up" type="button">
        <img src="./img/icons/icon_up.svg" alt="increase" />
      </button>
      <button className="count__down" type="button">
        <img src="./img/icons/icon_down.svg" alt="decrease" />
      </button>
    </div>
  </div> );
}
 
export default Count;