import {useSelector} from 'react-redux'
import { getSubjects } from '../../redux/selector.js'

const ListSubject = () => {
    // get count variable and show it
    const subjects = useSelector(getSubjects)

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