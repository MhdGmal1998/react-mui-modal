export const ModalContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    padding: '90px'
}

export const LoginBtnStyle = {
    borderRadius: 0,
    backgroundColor: 'black',
    textTransform: 'none',
    padding: '8px',
    marginTop: '10px',
    '&:hover': {
        backgroundColor: 'black'
    }
}

export const InputStyle = {
    marginBottom: '25px',
    '& label.Mui-focused': {
        color: 'black',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'black',
    }
}