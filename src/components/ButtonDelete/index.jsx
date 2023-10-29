const ButtonDelete = ({deleteProduct, id}) => {
    return (  <button type="button" onClick={() => {deleteProduct(id)}}> 
    {/* говорим что будет запущена стрелочная функция, а когда она запуститься после его выполнения */}
    <img src="./img/icons/x.svg" alt="delete" />
  </button> );
}
 
export default ButtonDelete;