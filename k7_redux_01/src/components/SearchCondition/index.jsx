import { useState } from "react"
import { useDispatch } from "react-redux"
import searchReducer from '../../redux/search/reducer.js'

const SearchCondition = () => {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')

    const onInput = (e) => {
        setSearchValue(e.target.value)
        // why do we use 'searchValue' variable
        // how come
        dispatch(searchReducer.actions.setName(e.target.value))
    }

    return (
        <>
            <input 
                type="text" 
                placeholder="Search" 
                onChange={onInput}
            />
        </>
    )
}

export default SearchCondition