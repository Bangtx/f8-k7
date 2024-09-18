import {SubjectForm, SearchCondition, ListSubject} from './components'
import {getSubjects} from './redux/subject/reducer.js'
import {useDispatch} from "react-redux";
import {useEffect} from "react";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSubjects())
    }, [])

    return (
        <>
            <SearchCondition/>
            <ListSubject/>
            <SubjectForm/>
        </>
    )
}

export default App
