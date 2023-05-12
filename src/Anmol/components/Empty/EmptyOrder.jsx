import React,{useEffect} from "react";
import "./EmptyCart.css";
import cartimg from "../../Images/cartImage.png";
import { useNavigate } from "react-router-dom";
import { getuser } from "../../../Reducers/Auth/AuthSlice";
import { useDispatch,useSelector } from "react-redux";

const EmptyOrder = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const{user}=useSelector((state)=>state.auth);

  const handleclientview = () => {
    navigate("/viewres");
  };
  const handleadminview = () => {
    navigate("/viewadminres");
  };

  useEffect(()=>{
    if(user)
    {
        dispatch(getuser(user._id));
    }
  },[]);


  return (
    <>
    <div className="bg_div_empty_cart"></div>
    <div className="empty-cart-container">
      <div className="empty-cart">
        <h1>You have not done any order yet!!</h1>
        <img src={cartimg} alt="Empty cart" />

        {user.isAdmin?(<>
            <button className="shop-btn" 
                onClick={handleadminview}
            >Go shopping</button>
        </>):(<>
            <button className="shop-btn"
            onClick={handleclientview}
            >Go shopping</button>
        </>)}
        
      </div>
    </div>
    </>
  );
};

export default EmptyOrder;