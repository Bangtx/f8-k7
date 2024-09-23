import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getSubject} from '../../redux/subject'
import { getVariable, subjects as subjectsSeletor } from '../../redux/selector.js'

const ListSubject = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.subjects.status) === 'pending'
    console.log('isLoading', isLoading)
    useEffect(() => {
        dispatch(getSubject())
    }, [])


    // get count variable and show it
    // useSelector se handle subjects trong selector.js
    const subjects = useSelector(subjectsSeletor)

    return (
        <>
            <ul>
                {
                    subjects.map((subject) => {
                        return (
                            <li key={subject.id}>{subject.name} {subject.priority}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default ListSubject