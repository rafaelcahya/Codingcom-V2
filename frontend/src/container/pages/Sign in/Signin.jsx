import React from 'react'
import {Link} from 'react-router-dom'

import help_icon from '../../asset/icon/help-circle.svg'
import google_icon from '../../asset/icon/google.png'
import github_icon from '../../asset/icon/github.png'

export default function Signin(){
    return (
        <>
            <div className='signin black flex flex-col items-center gap-10 pt-10 pb-20'>
                <p className='poppins-600 text-25'>Sign In to your account</p>
                <form className='poppins text-15 flex flex-col gap-5 sm:gap-10'>
                    <div className='flex flex-col gap-5 sm:gap-10'>
                        <div className='flex flex-col items-start gap-3'>
                            <label htmlFor="">Username or Email</label>
                            <input type="text" placeholder='Input your username or email' className='border-gray width-20 gray2 px-5 py-2 rounded-lg outline-none' />
                        </div>
                        <div className='flex flex-col items-start gap-3'>
                            <label htmlFor="">Password</label>
                            <div className='border-gray flex items-center justify-between gap-5 width-20 px-1 py-1 rounded-lg pr-3' >
                                <input type="password" placeholder='Input your password' className='gray2 px-4 py-1 w-full outline-none' />
                                <img src={help_icon} alt="" width={17} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-5'>
                        <p className='bg-purple text-white rounded-lg py-3 cursor-pointer w-full text-center'>Sign In</p>
                        <Link to='/reset-password'>
                            <p className='purple hover:underline cursor-pointer text-center'>Reset Password</p>
                        </Link>
                        <div className='flex flex-col gap-10'>
                            <p>Or Sign In with</p>
                            <div className='flex items-center gap-10'>
                                <img src={google_icon} alt="" width={36}/>
                                <img src={github_icon} alt="" width={36}/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}