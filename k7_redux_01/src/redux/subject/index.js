import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getMethod, postMethod } from '../../utils'
import { act } from "react"
// slice - split
const initialState = {
    value: [],
    status: 'idle'
}

const getSubject = createAsyncThunk('subject/fetchSubject', async () => {
    return await getMethod('subject')
})

const createSubject = createAsyncThunk('subject/createSubject', async (subject) => {
    return await postMethod('subject', subject)
})

const subjectSlice = createSlice({
    name: 'subject',
    initialState: {...initialState},
    reducers: {
        initStore: (state, action) => {
            console.log(state, action)
            state.value = action.payload
            // state = action.payload
        },
        addSubject: (state, action) => {
            // tu dong tao ra action subject/addSubject
            state.value.push(action.payload)
        }
    },
    extraReducers: builder => {
        builder.addCase(getSubject.pending, (state, action) => {
            state.status = 'pending'
        }),
        builder.addCase(getSubject.fulfilled, (state, action) => {
            state.status = 'idle'
            state.value = action.payload
        }),
        builder.addCase(createSubject.pending, (state, action) => {
            state.status = 'pending'
        }),
        builder.addCase(createSubject.fulfilled, (state, action) => {
            state.status = 'idle'
            state.value.push(action.payload)
        })
    }
})

export { createSubject, getSubject }
export default subjectSlice