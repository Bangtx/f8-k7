import {createStore} from 'redux'
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


// const reducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'subject/add_subject':
//             return [...state, action.payload]
//         default:
//             return [...state]
//     }
// }

export const getSubjects = createAsyncThunk(
    'subject/fetchSubjects',
    async () => {
        const data = await mockupData()
        return data
    }
)
const mockupData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {id: 1, name: 'database', priority: 'High'},
                {id: 2, name: 'web programming', priority: 'Medium'},
                {id: 3, name: 'AI', priority: 'Low'}
            ])
        }, 100)
    })
}

const reducer = createSlice({
    name: 'subject',
    initialState: {
        loading: 'idle',
        subjects: []
    },
    reducers: {
        addSubject: (state, action) => {
            state.subjects.subjects.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getSubjects.pending, (state, action) => {
            console.log('pendding')
            state.loading = 'loading'
        })
        builder.addCase(getSubjects.fulfilled, (state, action) => {
            console.log('vao day ah')
            state.loading = 'idle'
            state.subjects = action.payload
        })
        builder.addCase(getSubjects.rejected, (state, action) => {
            console.log('vao day', action)
            state.loading = 'idle'
            state.subjects = []
        })
    }
})


export const addSubject = (subject) => {
    return (dispatch, getState) => {
        subject.name = 'test'
        dispatch(reducer.actions.addSubject(subject))
    }
}


export default reducer