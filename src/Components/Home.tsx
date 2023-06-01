import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Translate from "./Data.json"
export type AppState = {
  changeTheLanguage: string;
};

const Home = () => {
  const [content, setContent] = useState(Translate.English)
  const myStateLang = useSelector((state: AppState) => state.changeTheLanguage)
  useEffect(() => {
    if (myStateLang === "English") {
      setContent(Translate.English)
    }
    if (myStateLang === "عربي") {
      setContent(Translate.عربي)
    }
  }, [myStateLang])
  return (
    <div className={`main_p ${myStateLang === "عربي" && "Direction"}`}>
      <div className='paragraph'>
        <div className='main_heading' >
          <h1>{content.Paragraph_home}</h1>
          </div>
        <div className='para1'>
          <h2>{content.Paragraph_home}</h2>
          <p>{content.Description_Home}</p>
        </div>
        <div className='para2'>
          <h2>{content.Paragraph_home}</h2>
          <p>{content.Description_Home}</p>
        </div>
          <div className='down_heading'>
            <h2>{content.Help}</h2>
            <h2>{content.Btn}</h2>
            <h2>{content.Home}</h2>
          <div className='para1_btn'><button onClick={()=>alert("hello")}>{content.Btn}</button></div>
          <div className='down_heading2'>
            <h3>{content.Home}</h3>
            <h3>{content.Heading}</h3>
          </div>
          </div>
      </div>
      <div className='paragraph2'>
        <div className='main_heading' >
          <h1>{content.Paragraph_home}</h1>
          </div>
        <div className='para1'>
          <h2>{content.Paragraph_home}</h2>
          <p>{content.Description_Home}</p>
        </div>
        <div className='para2'>
          <h2>{content.Paragraph_home}</h2>
          <p>{content.Description_Home}</p>
        </div>
          <div className='down_heading'>
            <h2>{content.Help}</h2>
            <h2>{content.Btn}</h2>
            <h2>{content.Home}</h2>
          <div className='para1_btn'><button onClick={()=>alert("hello")}>{content.Btn}</button></div>
          <div className='down_heading2'>
            <h3>{content.Home}</h3>
            <h3>{content.Heading}</h3>
          </div>
          </div>
      </div>
    </div>
  )
}

export default React.memo(Home);