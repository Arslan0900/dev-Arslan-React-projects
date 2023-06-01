import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { changeLanguages } from './Action/Actions';
import { useSelector } from 'react-redux';
import { AppState } from './Home';
import Translate from "../Components/Data.json";
import { Togglebtn } from './Action/Actions';
type ToggleState = {
  BtnToggler:boolean
}
const Navbar = () => {
  const [content, setContent] = useState(Translate.English)
  const myStateLang = useSelector((state: AppState) => state.changeTheLanguage);
  const menutoggle = useSelector((state: ToggleState) => state.BtnToggler);

  useEffect(() => {
    if (myStateLang === "English") {
      setContent(Translate.English)
    }
    if (myStateLang === "عربي") {
      setContent(Translate.عربي)
    }
  }, [myStateLang])
  const dispatch = useDispatch();
  return (
    <div className={`${myStateLang === "عربي" && "Direction"}`}>
      <div className="header">
        <div className='logo'>
          <Link to={'/'}><img className='logo_img' alt='logo' src='/Pics/logo.png' /></Link>
          <span className='fa fa-bars' onClick={()=>dispatch(Togglebtn())}></span>
        </div>
        <div className={`navLink ${menutoggle&&"navbar"}`} >
          <Link to={'/'}>{content.Home}</Link>
          <Link to={'/About'}>{content.About}</Link>
          <Link to={'/Contect'}>{content.Contect}</Link>
          <Link to={'/Help'}>{content.Help}</Link>
        </div>
        < div className={`btn ${menutoggle&&"btnN"}`} >
          <div className='btn1'>
            <button  onClick={() => dispatch(changeLanguages("عربي"))}>{myStateLang==="English"?"عربي":"English"}</button>
          </div>
          <div className='btn2'>
            <button  onClick={() => dispatch(changeLanguages("English"))}>{content.Btn}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;