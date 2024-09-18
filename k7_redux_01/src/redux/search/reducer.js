import {createSlice} from "@reduxjs/toolkit";
// import { SEARCH_BY_NAME } from '../action'


// const reducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'subject/search_by_name':
//             return {
//                 ...state,
//                 name: action.payload
//             }
//         default:
//             return {...state}
//     }
// }


const reducer = createSlice({
    name: 'subjects',
    initialState: {
        name: null,
        priority: null
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        }
    }
})

export default reducer