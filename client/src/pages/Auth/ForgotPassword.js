import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import ContentWrapper from '../../Components/ContentWrapper'
const ForgotPassword = () => {
    const [input, setInput] = useState({ email: '', answer: '', password: '' })
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/v1/user/forgot-password', { email: input.email, answer: input.answer, newpassword: input.password })
            if (res.data.success) {
                toast.success(res.data.message)
                navigate('/login');
            }
        } catch (error) {
            toast.error('something went wrong')
        }
    }

    const handleChange = (e) => {
        setInput((intialState) => ({
            ...intialState,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <ContentWrapper>
            <form onSubmit={handleSubmit}>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h1 className='text-center  text-3xl font-bold tracking-tighter text-indigo-600'>Artwork Showcase Platform</h1>
                        <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Set New Password
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type={"email"}
                                        autoComplete="email"
                                        value={input.email}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={handleChange} />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Favourite Sport
                                    </label>

                                </div>
                                <div className="mt-2">
                                    <input
                                        id="answer"
                                        name="answer"
                                        type={"name"}
                                        value={input.answer}
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={handleChange} />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        New Password
                                    </label>

                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type={"password"}
                                        value={input.password}
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={handleChange} />
                                </div>
                            </div>

                            <div>
                                <button

                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={handleSubmit}
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?{' '}
                            <Link to={'/register'} href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Please Register
                            </Link>
                        </p>
                    </div>
                </div>
            </form></ContentWrapper>

    )
}

export default ForgotPassword
