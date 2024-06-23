"use client"
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {

  const notify = () => {
    toast("Login Successfull!!")
  }

  return (
    <>
      <div>
        <button onClick={notify}>Login</button>
        <ToastContainer />
      </div>
    </>
  )
}

export default page


// React Toasting Means Message ne btavo animation ma

// toast.info('🦄 Wow so easy!', {
//   position: "bottom-left",
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   theme: "colored",
//   transition: Bounce,
//   });


// toast.success('🦄 Wow so easy!', {
//   position: "top-center",
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   theme: "dark",
//   });