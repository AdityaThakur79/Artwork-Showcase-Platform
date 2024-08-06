import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ContentWrapper from '../../Components/ContentWrapper'
const AdminTable = () => {
    const navigate = useNavigate()
    const [artistArray, setArtistArray] = useState([])

    // below is the function for getting all artist details
    const getArtistDetails = async () => {
        try {
            const { data } = await axios.get('/api/v1/admin/getAllArtist', {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            setArtistArray(data)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { getArtistDetails() }, [])
    return (
        <ContentWrapper>
            <div >
                <div className='mt-20'>
                    <div className='md:p-16 bg-white shadow mt-20 md:table-fixed rounded-lg'>
                        <table className='w-full border-separate border border-slate-400 mb-10 '>
                            <thead className='h-20 text-white bg-indigo-600 '>
                                <tr className='text-center'>
                                    <th className='p-1 border border-slate-300 '>Artist</th>
                                    <th className='p-1 border border-slate-300 '>Total Posts</th>

                                </tr>
                            </thead>

                            <tbody className='text-center'>
                                {artistArray && artistArray?.artist?.map((artist, index) => {

                                    let post = artist?.post?.length;
                                    return (


                                        <tr className='h-20' key={index}>
                                            <td className='p-1 border border-slate-300 '>{artist.name}<button className=' md:ms-2 px-4 py-2 bg-blue-300 rounded-lg transition-all hover:duration-300 hover:scale-110' onClick={() => {
                                                navigate(`/admin/artistInfo/${artist?._id}`)
                                            }}>Full Details</button></td>
                                            <td className='p-1 border border-slate-300 '> {post}<button className=' md:ms-2 px-4 py-2 bg-blue-300 rounded-lg hover:duration-300 hover:scale-110' onClick={() => {
                                                navigate(`/admin/artistpost/${artist?._id}`)
                                            }}>show all</button></td>

                                        </tr>


                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </ContentWrapper>



    )
}

export default AdminTable
