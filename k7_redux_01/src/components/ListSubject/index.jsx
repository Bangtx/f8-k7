import {useSelector} from 'react-redux'
import { getVariable } from '../../redux/selector.js'

const ListSubject = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.subjects.status) === 'pending'
    console.log('isLoading', isLoading)
    useEffect(() => {
        dispatch(getSubject())
    }, [])


    // get count variable and show it
    const subjects = getVariable('subjects')

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