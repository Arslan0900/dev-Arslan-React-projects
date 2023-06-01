import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { AppState } from './Home';
import Translate from "./Data.json"

const Contect = () => {
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
        {content.Contect}
        </h1>
      <div>{content.Description_Contect}</div>
      </div>
  )
}

export default React.memo(Contect);