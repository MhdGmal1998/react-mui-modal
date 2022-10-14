import { Button } from "@mui/material";
import React, { useState } from "react";
import LoginModal from './LoginModal/LoginModal'
import UpdateInfoModal from "./UpdateInfoModal/UpdateInfoModal";
function App() {

  // 
  const [openLogin, setOpenLogin] = useState(false)
  const handleCloseLogin = () => setOpenLogin(false);
  const handleOpenLogin = () => setOpenLogin(true);

  // 
  const [openUpdate, setOpenUpdate] = useState(false)
  const handleCloseUpdate = () => setOpenUpdate(false);
  const handleOpenUpdate = () => setOpenUpdate(true);


  return (
    <div className="App">
      <Button onClick={handleOpenLogin}
        role='open-login-modal-btn'
      >
        Open Modal
      </Button>
      <LoginModal open={openLogin} setOpen={setOpenLogin} handleClose={handleCloseLogin} openUpdate={handleOpenUpdate} />
      <UpdateInfoModal open={openUpdate} setOpen={setOpenUpdate} handleClose={handleCloseUpdate} />
    </div>
  );
}

export default App;
