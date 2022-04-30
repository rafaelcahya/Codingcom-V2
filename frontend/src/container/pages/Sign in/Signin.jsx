import React, { useState } from 'react'
import Axios from 'axios'
import help_icon from '../../asset/icon/help-circle.svg'

export default function Signin(){
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const Submit = ()=>{
        Axios.post("http://localhost:3001/user/login", { username: username, password: password }).then((response) => {
            if (response.data.In) {
                localStorage.setItem("In", response.data.In)
                localStorage.setItem("code", response.data.code)
                window.location.replace("/")
                
            } else {
                setErrorMessage(response.data.message)
            }
        })
    }

    return (
        <>
            <div className='bg_gray py-24 letter_spacing_1 h-screen'>
                <div className='black bg_white mx-auto p-14 rounded-xl box_shadow w-fit'>
                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col gap-2'>
                            <p className='inter-600 text-[25px] black'>Sign in</p>
                            <p className='inter text_14 secondary_text'>Enter your credential to access your account</p>
                        </div>
                        <form className='inter text_14 flex flex-col gap-7'>
                            <div className='flex flex-col gap-3'>
                                <label htmlFor="">Username or Email</label>
                                <input type="text" placeholder='Input your username or email' className='border_gray w-[350px] gray2 px-5 py-2 rounded-md outline-none' onChange={(event)=>{
                                    setUserName(event.target.value)
                                }}/>
                            </div>
                            <div className='flex flex-col items-start gap-3'>
                                <div className='flex justify-between w-full'>
                                    <label htmlFor="">Password</label>
                                    <p className='inter-600 blue'>Forgot password ?</p>
                                </div>
                                <div className='border_gray flex items-center justify-between gap-5 w-[350px] px-1 py-1 rounded-md pr-3' >
                                    <input type="password" placeholder='Input your password' className='gray2 px-4 py-1 w-full outline-none' onChange={(event)=>{
                                        setPassword(event.target.value)
                                    }}/>
                                    <img src={help_icon} alt="" width={17} />
                                </div>
                            </div>
                        </form>
                        <div className='bg_blue rounded-md'>
                            <p onClick={Submit} className='white text text-center py-2'>Sign in</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
