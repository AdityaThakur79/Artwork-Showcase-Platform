import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import ContentWrapper from '../../Components/ContentWrapper'

const ArtistRegister = () => {
    const navigate = useNavigate()

    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
        answer: '',
        phone: '',
        address: '',
        achievement: [],
        description: '',
        event: [],
        exhibition: [],
        instagram: '',
        facebook: '',
        twitter: ''

    })
    const [photo, setPhoto] = useState("")
    const handleChange = (e) => {
        setInput((intialState) => ({
            ...intialState,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // const { data } = await axios.post('/api/v1/artist/register', { name: input.name, email: input.email, phone: input.phone, answer: input.answer, password: input.password, address: input.address, achievement: input.achievement, description: input.description, event: input.event, exhibition: input.exhibition, instagram: input.instagram, facebook: input.facebook, twitter: input.twitter, photo: photo })
            const postData = new FormData()
            postData.append('name', input.name)
            postData.append('email', input.email)
            postData.append('phone', input.phone)
            postData.append('answer', input.answer)
            postData.append('password', input.password)
            postData.append('address', input.address)
            postData.append('achievement', input.achievement)
            postData.append('description', input.description)
            postData.append('event', input.event)
            postData.append('exhibition', input.exhibition)
            postData.append('instagram', input.instagram)
            postData.append('facebook', input.facebook)
            postData.append('twitter', input.twitter)
            postData.append('photo', photo)
            const { data } = await axios.post('/api/v1/artist/register', postData)
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
                                Register As Artist
                            </h2>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Post photo</label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    {!photo && <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                    </svg>}
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            {!photo && <span>Upload a file</span>}
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" accept='image/*' onChange={(e) => setPhoto(e.target.files[0])} />
                                            {photo && <img src={URL.createObjectURL(photo)} alt="post_photo" className='img img-responsive' style={{ height: '300px' }} />}
                                        </label>
                                        {!photo && <p className="pl-1">or drag and drop</p>}
                                    </div>
                                    {!photo && <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>}
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="#" method="POST">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
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
                                        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
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
                                        <label htmlFor="answer" className="block text-sm font-medium leading-6 text-gray-900">
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
                                    <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                                        Address
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="address"
                                            name="address"
                                            type={"name"}
                                            autoComplete="address"
                                            value={input.address}
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={handleChange} />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                        Description
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="description"
                                            name="description"
                                            type={"name"}
                                            autoComplete="description"
                                            value={input.description}
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={handleChange} />
                                    </div>
                                </div>

                                <div className='flex justify-between'>
                                    <div>
                                        <label htmlFor="event" className="block text-sm font-medium leading-6 text-gray-900">
                                            Event
                                        </label>

                                        <input
                                            id="event"
                                            name="event"
                                            type={"name"}
                                            autoComplete="event"
                                            value={input.event}
                                            required
                                            className="mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={handleChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="exhibition" className="block text-sm font-medium leading-6 text-gray-900">
                                            Exhibition
                                        </label>

                                        <input
                                            id="exhibition"
                                            name="exhibition"
                                            type={"name"}
                                            autoComplete="exhibition"
                                            value={input.exhibition}
                                            required
                                            className="mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={handleChange} />
                                    </div>


                                </div>
                                <div>
                                    <label htmlFor="achievement" className="block text-sm font-medium leading-6 text-gray-900">
                                        Achievement
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="achievement"
                                            name="achievement"
                                            type={"name"}
                                            autoComplete="achievement"
                                            value={input.achievement}
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={handleChange} />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="instagram" className="block text-sm font-medium leading-6 text-gray-900">
                                        Instagram
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="instagram"
                                            name="instagram"
                                            type={"name"}
                                            autoComplete="instagram"
                                            value={input.instagram}
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={handleChange} />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="facebook" className="block text-sm font-medium leading-6 text-gray-900">
                                        Facebook
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="facebook"
                                            name="facebook"
                                            type={"name"}
                                            autoComplete="facebook"
                                            value={input.facebook}
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={handleChange} />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="twitter" className="block text-sm font-medium leading-6 text-gray-900">
                                        Twitter
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="twitter"
                                            name="twitter"
                                            type={"name"}
                                            autoComplete="twitter"
                                            value={input.twitter}
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
                                        onClick={() => { navigate('/register') }}
                                    >
                                        Register As user
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

export default ArtistRegister
