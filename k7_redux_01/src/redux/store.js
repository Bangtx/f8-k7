import {createStore, combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
// import { ADD_SUBJECT, SEARCH_BY_NAME } from './action'
import searchReducer from "./search/reducer.js";
import subjectsReducer from "./subject/reducer.js";

// const store = createStore(reducer)

const store = configureStore({
    reducer: {
        search: searchReducer.reducer,
        subjects: subjectsReducer.reducer
    }
})
export default store