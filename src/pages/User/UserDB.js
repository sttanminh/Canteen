import '../../css/UserDB.scss'
import '../../general.scss';
import { useNavigate } from 'react-router-dom';



function UserDB() {
  const navigate = useNavigate();
  var foodList = ["Dish A","Dish B","Dish C","Dish 8","Dish 7","Dish 6","Dish 5","Dish 3","Dish 4"]
  
  function FoodListing(){
    return (
      foodList.map(d =>
        <div>
          <button  onClick={()=>{
        navigate('/userfoodpick')
      }} id="food"> {d} </button>
        </div>)
    )
  }




    return (
      <div>
        <button id="logout" onClick={()=>{
        navigate('/login')
      }}> Log out</button>
        <h1 id="userId"> 403 </h1>
        <h2> Current week:</h2>
        <div id="fooddiv">{FoodListing()}</div>
        
       
      </div>
    );
  }
  
  export default UserDB;