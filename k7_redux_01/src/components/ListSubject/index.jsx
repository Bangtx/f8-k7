import {useSelector} from 'react-redux'
import { getVariable, subjects as subjectsSeletor } from '../../redux/selector.js'

const ListSubject = () => {
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