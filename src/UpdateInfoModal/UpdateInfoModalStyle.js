const containerWidth = 550
const containerHeight = 450

export const ModalContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    height: containerHeight,
    paddingTop: '20px',
    // paddingLeft: '80px',
    // paddingRight: '120px',
    width: containerWidth
}


export const CloseBtnStyle = {
    borderRadius: 0,
    borderColor: 'black',
    textTransform: 'none',
    padding: '6px 25px',
    marginRight: '30px',
    color: 'black',

}
export const SaveBtnStyle = {
    ...CloseBtnStyle,
    borderColor: 'gray',
    color: 'gray',
    '&:hover': {
        borderColor: 'black',
        color: 'black',
        backgroundColor: 'white',
        opacity: 1
    }
}

export const inputFeild = {
    border: '1px solid gray',
    padding: '8px',
    borderRadius: '2px'
}

export const InputContainer = {
    marginBottom: '20px',
    '& label.Mui-focused': {
        color: 'black',
    },
    '& .MuiInput-underline:after': {
        borderWidth: 0
    }
}

export const BottomControl = {
    width: containerWidth,
    boxShadow: '0px -5px 5px 0px rgba(0,0,0,0.19)',
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingTop: '8px',
    paddingBottom: '8px',
    alignItems: 'center'
}