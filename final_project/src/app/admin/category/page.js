import {TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material";

export default async function () {
    const response = await fetch('http://localhost:3001/categories', {cache: 'no-store'})
    const categories = await response.json()

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = categories

    const columns = ['id', 'name', 'short_name', 'order_num']

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {
                                columns.map(column => <TableCell key={column}>{column}</TableCell>)
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map((row) => {
                                console.log(row)
                                return (
                                    <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        {
                                            columns.map(column => {
                                                console.log(column)
                                                return <TableCell>{row[column]}</TableCell>
                                            })
                                        }
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}