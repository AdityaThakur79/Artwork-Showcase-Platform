import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import ContentWrapper from '../../Components/ContentWrapper'
const Register = () => {

    const navigate = useNavigate()

    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
        answer: '',
        phone: ''
    })

    const handleChange = (e) => {
        setInput((intialState) => ({
            ...intialState,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('/api/v1/user/register', { name: input.name, email: input.email, phone: input.phone, answer: input.answer, password: input.password, })
            if (data.success) {
                navigate('/login')
                toast.success(data.message)
            }
        } catch (error) {
            toast.error('something went wrong')
        }
    }


    return (
        <ContentWrapper>
            <div className='mt-20'>
                <form onSubmit={handleSubmit}>
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h1 className='text-center text-3xl font-bold tracking-tighter text-indigo-600'>Artwork Showcase Platform</h1>
                            <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Register As User
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="#" method="POST">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            name="name"
                                            type={"name"}
                                            autoComplete="name"
                                            value={input.name}
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={handleChange} />
                                    </div>
                                </div>
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
                                <div className='flex justify-between'>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            phone
                                        </label>

                                        <input
                                            id="phone"
                                            name="phone"
                                            type={"name"}
                                            autoComplete="phone"
                                            value={input.phone}
                                            required
                                            className="mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={handleChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Favourite sport
                                        </label>

                                        <input
                                            id="answer"
                                            name="answer"
                                            type={"name"}
                                            autoComplete="answer"
                                            value={input.answer}
                                            required
                                            className="mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={handleChange} />
                                    </div>


                                </div>





                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
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
                                        Register
                                    </button>
                                </div>
                                <div>
                                    <button

                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={() => { navigate('/artist-register') }}
                                    >
                                        Register As Artist
                                    </button>
                                </div>
                            </form>

                            <p className="mt-6 text-center text-sm text-gray-500">
                                Already a member?{' '}
                                <Link to='/login' href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" >
                                    Please Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </ContentWrapper>
    )
}

export default Register
