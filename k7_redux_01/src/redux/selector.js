import {useSelector} from 'react-redux'
import { createSelector } from 'reselect'


const getVariable = (variable) => {
    return useSelector((state) => state[variable])
}

const getSubjects = createSelector(
    [
        state => state.subjects,
        state => state.search
    ],
    (subjects, search) => {
        if (search.name) {
            return subjects.subjects.filter(subject => {
                return subject.subjects.name.includes(search.name) ;
            })
        }
        return subjects.subjects
    }
)

export { getVariable, getSubjects }
