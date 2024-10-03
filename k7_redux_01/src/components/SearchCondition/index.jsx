import { useState } from "react"
import { useDispatch } from "react-redux"
// import { onUpdateSearchInput, onUpdatePriority } from '../../redux/action'
import searchSlice from "../../redux/search"

const SearchCondition = () => {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')
    const [priority, setPriority] = useState('Low')

    const onChangePriority = (e) => {
        setPriority(e.target.value)
        // store at the store
        dispatch(searchSlice.actions.updatePriority(e.target.value))
    }

    const onInput = (e) => {
        setSearchValue(e.target.value)
        // why do we use 'searchValue' variable
        // how come
        dispatch(searchSlice.actions.updateName(e.target.value))
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