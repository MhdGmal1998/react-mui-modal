import * as React from 'react';
import {
    TextField,
    Button,
    Modal,
    Box,
    Input,
    FormControl,
    InputLabel,
    InputAdornment,
    IconButton,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { InputStyle, LoginBtnStyle, ModalContainerStyle } from './LoginModalStyle'


const LoginModal = (props) => {
    const { open, setOpen, handleClose, openUpdate } = props
    const [values, setValues] = React.useState({
        showPassword: false,
        password: '',
        username: ''
    })

    const handleChange = (prop) => (event) => setValues({ ...values, [prop]: event.target.value });
    const handleClickShowPassword = () => setValues({ ...values, showPassword: !values.showPassword });
    const handleMouseDownPassword = (event) => event.preventDefault();

    const RenderEyeIcon = () => {
        return (
            <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    role="eyeIcon"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword} >
                    {values.showPassword ? <VisibilityOff sx={{
                        color: 'black'
                    }}
                        role='hidePassword'
                    /> : <Visibility sx={{
                        color: 'black'
                    }}
                        role='showPassword'
                    />}
                </IconButton>
            </InputAdornment>
        )
    }
    const getEndAdorment = (label) => label == 'password' ? <RenderEyeIcon /> : null
    const getTypeOfInput = (label) => label == 'password' ? values.showPassword ? 'text' : 'password' : 'text'
    const getValueOfInput = (label) => label == 'password' ? values.password : values.username
    const getLabelText = (label) => label == 'password' ? 'Password' : 'Username'
    const callOnChangeFunction = (label) => label == 'password' ? handleChange('password') : handleChange('username')


    const hanldeEditModal = () => {
        handleClose()
        setTimeout(() => openUpdate(), 200)
    }
    const RenderInput = (label) => {
        return (
            <FormControl fullWidth variant="standard"
                sx={InputStyle}
                role='input'>
                <InputLabel htmlFor={label} sx={{ color: 'black' }}>{getLabelText(label)}</InputLabel>
                <Input
                    aria-label="input feild"
                    id={label}
                    type={getTypeOfInput(label)}
                    value={getValueOfInput(label)}
                    onChange={callOnChangeFunction(label)}
                    endAdornment={getEndAdorment(label)}
                />
            </FormControl>
        )
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}>
            <Box sx={{ ...ModalContainerStyle, width: 280 }}
            >
                {
                    RenderInput('username')
                }
                {
                    RenderInput('password')

                }
                <Button variant='contained' fullWidth

                    onClick={hanldeEditModal}
                    role='loginButton'
                    sx={LoginBtnStyle}>
                    Log In
                </Button>
            </Box>
        </Modal>
    );
}
export default LoginModal