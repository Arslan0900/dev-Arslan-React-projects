
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { AppState } from './Home';
import Translate from "./Data.json"

const About = () => {
  const [content, setContent] = useState(Translate.English)
  const myStateLang = useSelector((state:AppState) =>state.changeTheLanguage )
  useEffect(()=>{
    if(myStateLang==="English"){
      setContent(Translate.English)
    }
    if(myStateLang==="عربي"){
      setContent(Translate.عربي)
    }
  },[myStateLang])
  return (
    <div className={`${myStateLang==="عربي"&&"Direction"}`}>
      <h1>
        {content.About}
        </h1>
        <h2>{content.Description_About}</h2>
    </div>
  )
}

export default React.memo(About);