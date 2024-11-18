import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ContentWrapper from '../Components/ContentWrapper'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import DropIn from 'braintree-web-drop-in-react'
const CartPage = () => {
    const [cart, setCart] = useState([])
    const [clientToken, setClientToken] = useState('')
    const [instance, setInstance] = useState('')
    const params = useParams()
    const ArtistId = localStorage.getItem('Artist')

    // below is the function fo getting the braintree token
    const getToken = async () => {
        try {
            const { data } = await axios.get('/api/v1/artist/braintree/token');
            // console.log('this is token', data?.clientToken)
            setClientToken(data?.clientToken);
        } catch (error) {
            console.log(error)
        }
    }
    const getCartItems = async () => {
        try {
            const { id } = params
            // console.log(id)
            const { data } = await axios.get(`/api/v1/artist/getCartItems/${id}`)
            // console.log(data?.artistCart)
            setCart(data?.artistCart)
        } catch (error) {
            console.log(error)
        }
    }

    // below is the functio for calculating the total price for the cart item
    const getTotal = () => {
        try {
            let total = 0;
            cart?.map((items) => {
                total = total + items?.price
            })
            return total.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR'
            });

        }
        catch (error) {
            console.log(error)
        }
    }
    // below is the function from removing the item from the cart
    const removeCartItem = (pid) => {
        try {
            // let mycart = [...cart]
            // let index = mycart.findIndex((item) => item.id === pid)
            // console.log(index)
            // mycart.splice(index, 1)
            // setCart(mycart)
            // localStorage.setItem('cart', JSON.stringify(mycart))
        } catch (error) {
            console.log(error)
        }
    }

    const totalIncludingTax = () => {
        try {
            let total = 500;
            cart?.map((items) => {
                total = total + items?.price
            })
            return total.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR'
            })
        } catch (error) {
            console.log(error)
        }
    }
    const handlePayment = async () => {
        try {
            // console.log(instance)
            const { nonce } = await instance.requestPaymentMethod()
            const { data } = await axios.post('/api/v1/artist/braintree/payment', { nonce, cart, ArtistId })
            if (data?.success) {
                const { data } = await axios.delete(`/api/v1/artist/removeAllCartItem/${ArtistId}`)
            }
            toast.success('payment has been made successfully')
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
    const deleteCartItem = async (artworkId) => {
        try {
            const { id } = params
            const { data } = await axios.delete(`/api/v1/artist/removeCartItem/${id}/${artworkId}`)
            if (data?.success) {
                toast.success(data?.message)
                window.location.reload()
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { getCartItems() }, [])
    useEffect(() => {
        getToken()
    }, [])
    return (
        <ContentWrapper>


            <div className='mb-4' >

                <div className='h-screen bg-gray-100 pt-20 mt-16'>
                    <h1 className='mb-10 text-center text-2xl font-bold'>Cart Items</h1>
                    <div className="mx-auto  max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">

                        <div className="rounded-lg md:w-2/3 mb-2">
                            {cart && cart.map((items) => (
                                <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                    <img src={`/api/v1/artwork/post-photo/${items?._id}`} alt="product-image" className=" rounded-lg sm:w-32 sm:h-40" />
                                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                        <div className='sm:mt-0'>
                                            <h2 className='text-xl font-bold text-indigo-600 capitalize'>{items?.name}</h2>
                                            <p className='mt-1 text-md text-gray-700'><span className='mt-1 text-md text-indigo-700'>Artist Name</span> :{' '} {items?.artistName}</p>
                                        </div>
                                        <div className='mt-5 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
                                            {/* <div className='flex items-center border-gray-100'>
                                                <span className='cursor-pointer rounded-1 bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50'>-</span>
                                                <input type="number" className='h-8 w-8 border bg-white text-center text-xs outline-none' value='2' min={'1'} />
                                                <span className='cursor-pointer rounded-1 bg-gray-100 py-1 px-3.5 duration:100 hover:bg-blue-500 hover:text-blue-50'>+</span>
                                            </div> */}
                                            <div class="flex items-center space-x-4">
                                                <p class="text-sm">{'Rs '}{items?.price}</p>
                                                <div onClick={() => deleteCartItem(items._id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='mt-6 h-full rounded-lg border bg-white p-6 shadow-white md:mt-0 md:w-1/3 z-50'>
                            <div className='mb-2 flex justify-between'>
                                <p className='text-gray-700'>Subtotal</p>
                                <p className='text-gray-700'>{getTotal()}</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="text-gray-700">Shipping</p>
                                <p class="text-gray-700">₹500</p>
                            </div>
                            <hr class="my-4" />
                            <div className='flex justify-between'>
                                <p className="text-lg font-bold">Total</p>
                                <div className=''>
                                    <p className='mb-1 text-lg font-bold'>{totalIncludingTax()}</p>
                                    <p class="text-sm text-gray-700">including Charges</p>
                                </div>
                            </div>
                            <div className='mt-4' >

                                {!clientToken || !cart?.length ? "" : <>
                                    <DropIn options={{
                                        authorization: clientToken,
                                        paypal: {
                                            flow: 'vault',

                                        },
                                    }}
                                        // here oninstance is the callback that reacives the instance of the braintree
                                        onInstance={(instance) => setInstance(instance)} /></>}

                            </div>


                            <button disabled={!instance} onClick={handlePayment} class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 " >Check out</button>

                        </div>

                    </div>
                </div>
            </div>


        </ContentWrapper>
    )
}

export default CartPage
