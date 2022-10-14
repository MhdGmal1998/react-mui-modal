import * as React from 'react';
import {
    Button,
    Modal,
    Box,
    Input,
    FormControl,
    InputLabel,
    IconButton,
} from '@mui/material';

import {
    BottomControl,
    InputContainer,
    inputFeild,
    InputStyle,
    CloseBtnStyle,
    ModalContainerStyle,
    SaveBtnStyle,
} from './UpdateInfoModalStyle'


const UpdateInfoModal = (props) => {
    const { open, setOpen, handleClose } = props
    const [values, setValues] = React.useState({
        email: 'johand@gmail.com',
        phoneNumber: '+918 000 000 000'
    })

    const handleChange = (prop) => (event) => setValues({ ...values, [prop]: event.target.value });
    const handleClickShowPassword = () => setValues({ ...values, showPassword: !values.showPassword });
    const handleMouseDownPassword = (event) => event.preventDefault();


    const getTypeOfInput = (label) => label == 'e-mail address' ? 'email' : 'text'
    const getValueOfInput = (label) => label == 'e-mail address' ? values.email : values.phoneNumber
    const getLabelText = (label) => label == 'e-mail address' ? 'e-mail address' : 'phone number'
    const callOnChangeFunction = (label) => label == 'e-mail address' ? handleChange('email') : handleChange('phoneNumber')


    const RenderInput = (label) => {
        return (
            <FormControl fullWidth variant='standard'
                sx={InputContainer}
                role='input'>
                <InputLabel htmlFor={label} sx={{ color: 'gray' }} shrink={true}>
                    {getLabelText(label)}
                </InputLabel>
                <Input
                    sx={inputFeild}
                    aria-label="input-feild"
                    id={label}
                    type={getTypeOfInput(label)}
                    value={getValueOfInput(label)}
                    onChange={callOnChangeFunction(label)}
                />
            </FormControl>
        )
    }


    return (
        <Modal
            role='update-modal'
            open={open}
            onClose={handleClose}>
            <Box sx={{ ...ModalContainerStyle }}>
                <Box sx={{ width: 400, }}>
                    <h1>Edit contract details</h1>
                    <h2 style={{ margin: '32px 0' }}>Contract Details</h2>
                    {
                        RenderInput('e-mail address')
                    }
                    {
                        RenderInput('phone number')
                    }
                </Box>
                <Box sx={BottomControl}>
                    <Button variant='text'
                        role='update-save-btn'
                        sx={CloseBtnStyle}
                        onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant='outlined'
                        role='update-close-btn'
                        onClick={handleClose}
                        sx={SaveBtnStyle}
                    >
                        Save
                    </Button>
                </Box>
            </Box>

        </Modal>
    );
}
export default UpdateInfoModal