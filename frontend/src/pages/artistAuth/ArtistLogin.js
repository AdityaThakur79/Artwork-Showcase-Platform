
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import Header from '../../Components/Header'
import ContentWrapper from '../../Components/ContentWrapper'
const ArtistLogin = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setInput((initialState) => ({
            ...initialState,
            [e.target.name]: e.target.value
        }))

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('/api/v1/artist/login', { email: input.email, password: input.password })
            if (data.success) {
                navigate('/')
                toast.success(data.message)
                localStorage.setItem('Artist', data.artist._id)
                localStorage.setItem('Artisttoken', data.token)
            }
        } catch (error) {
            console.log(error)
            toast.error('something went wrong')
        }
    }
    return (
        <ContentWrapper>
            <div className='mt-20'>
                <form onSubmit={handleSubmit}>
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h1 className='text-center  text-3xl font-bold tracking-tighter text-indigo-600'>Artwork Showcase Platform</h1>
                            <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Sign in as Artist
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
                                            Password
                                        </label>
                                        <div className="text-sm">
                                            <Link to={'/artist-forgot-password'} href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                Forgot password?
                                            </Link>
                                        </div>
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
                                <div>
                                    <button

                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={() => { navigate('/login') }}
                                    >
                                        Sign in As user
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
                </form>
            </div>
        </ContentWrapper>
    )
}

export default ArtistLogin
