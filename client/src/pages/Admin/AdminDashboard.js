import React, { useState, useEffect } from 'react'
import AdminTable from './AdminTable'
import axios from 'axios'
import UserTable from './UserTable'
import { useNavigate } from 'react-router-dom'
const AdminDashboard = () => {
    const navigate = useNavigate()



    return (
        <div className='mt-20'>
            <div className='md:p-16 bg-white shadow mt-20 md:table-fixed rounded-lg'>
                <div >

                    <table className='w-full border-separate border border-slate-400 mb-10'>
                        <thead className='h-20 text-white bg-indigo-600 '>
                            <tr className='text-center'>
                                <th className='p-1 border border-slate-300 '>target</th>
                                <th className='p-1 border border-slate-300 '>Action</th>

                            </tr>
                        </thead>

                        <tbody className='text-center'>




                            <tr className='h-20' >
                                <td className='p-1 border border-slate-300 '>Artist</td>
                                <td className='p-1 border border-slate-300 '> <button className=' md:ms-2 px-4 py-2 bg-blue-300 rounded-lg hover:duration-300 hover:scale-110 h-10 w-[150px]' onClick={() => {
                                    navigate('/admin/artistData')
                                }}>All Artist</button></td>

                            </tr>
                            <tr className='h-20' >
                                <td className='p-1 border border-slate-300 '>Category</td>
                                <td className='p-1 border border-slate-300 '> <button className=' md:ms-2 px-4 py-2 bg-blue-300 rounded-lg hover:duration-300 hover:scale-110 h-10 w-[150px]' onClick={() => {
                                    navigate('/admin/categoryData')
                                }}>All Category</button></td>

                            </tr>
                            <tr className='h-20' >
                                <td className='p-1 border border-slate-300 '>Users</td>
                                <td className='p-1 border border-slate-300 '> <button className=' md:ms-2 px-4 py-2 bg-blue-300 rounded-lg hover:duration-300 hover:scale-110 h-10 w-[150px]' onClick={() => {
                                    navigate('/admin/userData')
                                }}>All Users</button></td>

                            </tr>




                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default AdminDashboard
