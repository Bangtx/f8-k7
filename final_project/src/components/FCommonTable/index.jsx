import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function({columns, rows, maxWidth, onUpdate, onDelete}) {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ maxWidth: maxWidth, margin: '0 auto' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            columns.map(column => <TableCell key={column.value}>{column.text}</TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map((row) => {
                            return (
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    {
                                        columns.map(column => {
                                            if (column.value === 'action') {
                                                return  (
                                                    <TableCell key={`${row.id}${column.value}`}>
                                                        <EditIcon
                                                            sx={{color: 'green'}}
                                                            onClick={() => onUpdate(row)}
                                                        />
                                                        <DeleteIcon
                                                            sx={{color: 'red', marginLeft: '5px'}}
                                                            onClick={() => onDelete(row.id)}
                                                        />
                                                    </TableCell>
                                                )
                                            }
                                            return <TableCell key={`${row.id}${column.value}`}>{row[column.value]}</TableCell>
                                        })
                                    }
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}