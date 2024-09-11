import { useState } from "react"
import { useDispatch } from "react-redux"
import { onUpdateSearchInput } from '../../redux/action'

const SearchCondition = () => {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')

    const onInput = (e) => {
        setSearchValue(e.target.value)
        // why do we use 'searchValue' variable
        // how come
        dispatch(onUpdateSearchInput(e.target.value))
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