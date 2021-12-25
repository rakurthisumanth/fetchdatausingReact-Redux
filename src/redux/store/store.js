import { createStore ,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { TableReducer } from "../tabledata/reducers/TableReducer";
const store=createStore(TableReducer,applyMiddleware(thunk))
export default store 