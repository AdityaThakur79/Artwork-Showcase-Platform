// import React, { useState } from 'react'
// import { Button, Modal } from 'flowbite-react'
// import { HiOutlineExclamationCircle } from 'react-icons/hi';
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import toast from 'react-hot-toast';
// const CheckArtist = () => {
//     const [modal, setModal] = useState(true)
//     const navigate = useNavigate()
//     const userId = localStorage.getItem('userId')
//     // console.log(userId)
//     const settrue = async () => {
//         try {
//             const { data } = await axios.put(`/api/v1/user/check-artist/${userId}`)
//             if (data?.success) {
//                 toast.success(data?.message)
//                 navigate('/artist-page')
//             }

//         } catch (error) {
//             console.log(error)
//             toast.error('something went wrong')
//         }
//     }



//     return (
//         <div className='flex align-middle justify-center' style={{ minHeight: '500px' }}>

//             {modal && <>
//                 <div className="text-center mt-20 bg-indigo-800 p-20 rounded-lg">
//                     <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
//                     <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
//                         Are You An Artist And Wanna Showcase Your Artwork
//                     </h3>
//                     <div className="flex justify-center gap-4">
//                         <Button color="gray" onClick={settrue}>
//                             Yes
//                         </Button>
//                         <Button color="gray" onClick={() => navigate('/')}>
//                             No
//                         </Button>
//                     </div>
//                 </div></>}

//         </div >
//     )
// }

// export default CheckArtist
