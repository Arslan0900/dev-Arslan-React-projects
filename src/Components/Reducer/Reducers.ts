import { combineReducers } from "redux";
import changeTheLanguage from "./LanguageChanger";
import BtnToggler from "./BtnToggler";

const allreducers = combineReducers({changeTheLanguage,BtnToggler,});

export default allreducers;