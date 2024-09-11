import {useSelector} from 'react-redux'



const getVariable = (variable) => {
    if (variable === 'subjects') {
        return useSelector((state) => {
            if (state.search.name) {
                return state.subjects.filter(subject => {
                    return subject.name.includes(state.search.name) ;
                })
            }
            return state.subjects
        })
    }
    return useSelector((state) => state[variable])
}

export { getVariable }
