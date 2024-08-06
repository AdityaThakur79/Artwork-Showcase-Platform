import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ContentWrapper from '../../Components/ContentWrapper'
const UserTable = ({ user }) => {
    const [userArray, setUserArray] = useState([])
    const getAllUser = async () => {
        try {
            const { data } = await axios.get('/api/v1/admin/getAllUser', {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            console.log(data)
            setUserArray(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { getAllUser() }, [])
    return (
        <ContentWrapper>
            <div >
                <div className='mt-20'>
                    <div className='md:p-16 bg-white shadow mt-20 md:table-fixed rounded-lg'>
                        <table className='w-full border-separate border border-slate-400' colSpan={2}>
                            <thead className=' text-white bg-indigo-600 '>
                                <tr className='text-center h-20'>
                                    <th className='p-1 border border-slate-300 ' colSpan={2}>Users</th>
                                </tr>
                                <tr className='h-10'>
                                    <th className='text-center' colSpan={1}>user name</th>
                                    <th className='text-center' colSpan={1}>view</th>
                                </tr>
                            </thead>

                            <tbody className='text-center'>
                                {userArray && userArray?.user?.map((user, index) => {

                                    if (user.role !== 1) {
                                        return (


                                            <tr className='h-20' key={index}>
                                                <td className='p-1 border border-slate-300 '>{user.name}</td>
                                                <td className='p-1 border border-slate-300 '> <button className=' md:ms-2 px-4 py-2 bg-blue-300 rounded-lg hover:duration-300 hover:scale-110'>show Details</button></td>

                                            </tr>


                                        )
                                    }

                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </ContentWrapper>

    )
}

export default UserTable
