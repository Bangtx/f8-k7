import { createSlice } from "@reduxjs/toolkit"

// slice - split

const initState = [
    {id: 1, name: 'database', priority: 'High'},
    {id: 2, name: 'web programming', priority: 'Medium'},
    {id: 3, name: 'AI', priority: 'Low'}
]

// day phai la reducer cua subject
// const reducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'subject/add_subject':
//             return [...state, action.payload]
//         default: 
//             return [...state]
//     }
// }

const subjectSlice = createSlice({
    name: 'subject',
    initialState: initState,
    reducers: {
        addSubject : (state, action) => {
            // tu dong tao ra action subject/addSubject
            state.push(action.payload)
        }
    }
})


export default subjectSlice