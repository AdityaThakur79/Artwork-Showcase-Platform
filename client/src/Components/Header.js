import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
const userNav = [
    { name: 'Home', to: '/', current: true },
    { name: 'About', to: '/about', current: false },
    { name: 'artworks', to: '/artwork', current: false },

]
const adminNav = [
    { name: 'Home', to: '/', current: true },
    { name: 'About', to: '/about', current: false },
    { name: 'artworks', to: '/artwork', current: false },
    { name: 'Category', to: '/admin/categoryData', current: false },
    { name: 'Dashboard', to: '/ecommerce', current: false },
]
const artistNav = [
    { name: 'Home', to: '/', current: true },
    { name: 'About', to: '/about', current: false },

    { name: 'Post', to: '/create-post', current: false },
    { name: 'artworks', to: '/artwork', current: false },

]
const authentication = [

    { name: 'Home', to: '/', current: true },
    { name: 'About', to: '/about', current: false },
    { name: 'artworks', to: '/artwork', current: false },
    // { name: 'Register', to: '/register', current: false }, 
    { name: 'Login', to: '/login', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

// below is the function for fetching the user details and their role

const Header = () => {

    const [userData, setUserData] = useState('')
    const navigate = useNavigate()
    const user = localStorage.getItem("userId");
    const artist = localStorage.getItem('Artist');
    const signOut = async () => {
        localStorage.clear('userId')
        localStorage.clear('artist')
    }

    const getUser = async () => {
        try {
            // console.log(user)
            const { data } = await axios.get(`/api/v1/user/getUserDetails/${user}`, {
                user,
            });
            // console.log(data?.data) 
            setUserData(data?.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { getUser() }, [])
    return (
        <div className=' max-w-full  bg-indigo-700'>
            <Disclosure as="nav" className="bg-indigo-700 fixed top-0 left-0 right-0 z-10">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 font-roboto">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start lg:ms-6">
                                    <div className="flex flex-shrink-0 items-center" >
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=&shade=800"
                                            alt="Your Company"
                                        />
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-4">

                                            {(user || artist) ? (<>{user ? (<>{(user && userData?.role === 0) ? (<>{userNav.map((item) => (
                                                <NavLink
                                                    key={item.name}
                                                    href={item.href}
                                                    className={({ isActive }) => (classNames(
                                                        isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'rounded-md px-3 py-2 text-sm font-medium'
                                                    ))}
                                                    aria-current={item.current ? 'page' : undefined}
                                                    to={item.to}>
                                                    {item.name}
                                                </NavLink>
                                            ))}</>) : (<>{user && adminNav.map((item) => (
                                                <NavLink
                                                    key={item.name}
                                                    href={item.href}
                                                    className={({ isActive }) => (classNames(
                                                        isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'rounded-md px-3 py-2 text-sm font-medium'
                                                    ))}
                                                    aria-current={item.current ? 'page' : undefined}
                                                    to={item.to}>
                                                    {item.name}
                                                </NavLink>
                                            ))}</>)}</>) : (<>{
                                                artistNav.map((item) => (
                                                    <NavLink
                                                        key={item.name}
                                                        href={item.href}
                                                        className={({ isActive }) => (classNames(
                                                            isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'rounded-md px-3 py-2 text-sm font-medium'
                                                        ))}
                                                        aria-current={item.current ? 'page' : undefined}
                                                        to={item.to}>
                                                        {item.name}
                                                    </NavLink>
                                                ))
                                            }</>)}</>) : (<>{authentication.map((item) => (
                                                <NavLink
                                                    key={item.name}
                                                    href={item.href}
                                                    className={({ isActive }) => (classNames(
                                                        isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'rounded-md px-3 py-2 text-sm font-medium'
                                                    ))}
                                                    aria-current={item.current ? 'page' : undefined}
                                                    to={item.to}>
                                                    {item.name}
                                                </NavLink>
                                            ))}</>)}


                                        </div>

                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <div className='md:me-2 ' onClick={() => navigate(`/cart/${(user) ? (user) : (artist)}`)}>
                                        <button
                                            type="button"
                                            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">View notifications</span>
                                            <i class="fa-solid fa-cart-shopping"></i>
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">


                                        <div>
                                            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {(user || artist) ? (<>{
                                                    !artist ? (<>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link to={'/profile'}
                                                                    href="#"
                                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                >
                                                                    Your  Profile
                                                                </Link>
                                                            )}
                                                        </Menu.Item></>) : (<>  <Menu.Item>
                                                            {({ active }) => (
                                                                <Link to={`/artist-profile/about/${artist}`}
                                                                    href="#"
                                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                >
                                                                    Your Profile
                                                                </Link>
                                                            )}
                                                        </Menu.Item></>)
                                                }</>) : (<>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link to='/login'
                                                                href="#"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Login
                                                            </Link>
                                                        )}
                                                    </Menu.Item></>)

                                                }

                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Settings
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                {(user || artist) && <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            onClick={signOut}>
                                                            Sign out
                                                        </a>
                                                    )}
                                                </Menu.Item>}
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                {userData?.role === 0 ? (<>
                                    {userNav.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block rounded-md px-3 py-2 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </>) : (<>{adminNav.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}</>)}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>

    )
}

export default Header;

