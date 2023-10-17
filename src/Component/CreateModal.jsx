import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { styled } from "@mui/material/styles";

function CreateModal() {
  return (
    // <Modal
    //   open={open}
    //   onClose={handleClose}
    //   aria-labelledby="modal-modal-description"
    //   aria-describedby="modal-modal-description"
    // >
    //   <Box sx={style}>
    //     <div className="modal-overlay">
    //       <div style={{ textAlign: "center", color: "white" }}>
    //         <div className="HeaderTitle">
    //           <h1 id="ModalTitle">Create new post</h1>
    //           <hr />
    //         </div>

    //         <br />
    //         <div className="ModalTitle">
    //           <label style={{ textAlignLast: "right", paddingRight: "420px" }}>
    //             Title
    //           </label>
    //           <br />
    //           <input
    //             type="text"
    //             id="post"
    //             style={{
    //               width: "90%",
    //               height: "20px",
    //               borderRadius: "10px",
    //               backgroundColor: "#686262",
    //             }}
    //             onChange={handleTitleChange}
    //           />
    //         </div>

    //         <br />
    //         <div className="ModalTitle">
    //           <label style={{ textAlignLast: "right", paddingRight: "420px" }}>
    //             Body
    //           </label>
    //           <br />
    //           <textarea
    //             id="post"
    //             name="body"
    //             rows="8"
    //             cols="73"
    //             onChange={handledescriptionChange}
    //             style={{
    //               width: "90%",
    //               height: "80px",
    //               borderRadius: "10px",
    //               backgroundColor: "#686262",
    //             }}
    //           ></textarea>
    //         </div>
    //         <br />

    //         <Button component="label" variant="contained">
    //           Upload file
    //           <VisuallyHiddenInput type="file" onChange={handleImageChange} />
    //         </Button>
    //         <br />
    //         <br />
    //         <br />

    //         <Button
    //           variant="contained"
    //           type="submit"
    //           sx={{
    //             width: "90px",
    //             borderRadius: "50px",
    //             paddingBottom: "10px",
    //           }}
    //           onClick={handleSubmit}
    //         >
    //           POST
    //         </Button>
    //       </div>
    //     </div>
    //     <br />
    //     <br />
    //   </Box>
    // </Modal>
    <h1>hello world</h1>
  );
}

export default CreateModal;
