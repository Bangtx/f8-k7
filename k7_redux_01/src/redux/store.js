import {createStore} from 'redux' 
import { ADD_SUBJECT, SEARCH_BY_NAME } from './action'
 
const reducer = (state, action) => {
    // console.log(123, state, action)
    // action = {type: string, payload: any}
    switch (action.type) {
        case 'subject/add_subject':
            console.log('stage', state, 'action', action)
            const newSubjects = [...state.subjects, action.payload]
            return {...state, subjects: newSubjects}
        case SEARCH_BY_NAME:
            return {
                ...state,
                search: {
                    ...state.search,
                    name: action.payload
                }
            }
        default: 
            return {...state}
    }
}

const initState = {
    search: {
        name: null,
        priority: null
    },
    count: 0,
    subjects: [
        {id: 1, name: 'database', priority: 'High'},
        {id: 2, name: 'web programming', priority: 'Medium'},
        {id: 3, name: 'AI', priority: 'Low'}
    ]
} 

const store = createStore(reducer, initState)

export default store