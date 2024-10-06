'use client'
import {FCommonTable, CategoryDialog} from "@/components";
import {useState, useEffect} from "react";
import {getMethod} from '@/utils'

export default function () {
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState({
        id: null,
        name: '',
        short_name: '',
        order_num: null,
    })
    const [showDialog, setShowDialog] = useState(false)

    const getCategories = async () => {
        const response = await getMethod('/categories/')
        setCategories(response)
    }

    useEffect(() => {
        getCategories()
    }, [])

    // const columns = ['id', 'name', 'short_name', 'order_num']
    const columns = [
        { value: 'id', text: 'Id' },
        { value: 'name', text: 'Tên' },
        { value: 'short_name', text: 'Tên  Ngắn' },
        { value: 'order_num', text: 'Vị Trí' },
        { value: 'action', text: '' },
    ]

    const onUpdate = (row) => {
        setCurrentCategory(row)
        setShowDialog(true)
    }

    const onDelete = (id) => {
        console.log(id)
    }

    const closeDialog = () => {
        setShowDialog(false)
    }


    return (
        <>
            <FCommonTable
                columns={columns}
                rows={categories}
                maxWidth={800}
                onUpdate={onUpdate}
                onDelete={onDelete}
            />
            <CategoryDialog
                show={showDialog}
                onClose={closeDialog}
                data={currentCategory}
            />
        </>
    )
}