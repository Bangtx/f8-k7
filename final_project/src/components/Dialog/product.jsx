import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {TextField, Box} from '@mui/material';
import DialogContainer, {WhiteBar} from './container'

export default function({data, show, onClose}) {
    return (
        <DialogContainer show={show} onClose={onClose}>
            <WhiteBar/>
            <TextField
                label={'Name'}
                placeholder={'name'}
                fullWidth
                value={data.name}
            />
            <WhiteBar/>
            <TextField
                label={'Short name'}
                placeholder={'short name'}
                fullWidth
                value={data.short_name}
            />
            <WhiteBar/>
            <TextField
                label={'Order num'}
                placeholder={'order num'}
                fullWidth
                value={data.order_num}
            />
        </DialogContainer>
    );
}