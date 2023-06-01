import { legacy_createStore } from "redux";
import allreducers from "./Components/Reducer/Reducers";


const store = legacy_createStore(allreducers);


export default store;