import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ContentWrapper from '../../Components/ContentWrapper'
const AdminUserInfoPage = () => {
    const [data, setData] = useState('')
    const params = useParams()
    // below is the function for getting the artist details to be shown on admin artist info page
    const getArtistDetails = async () => {
        try {

            const { userId } = params
            console.log(artistId)
            const { data } = await axios.get(`/api/v1/artist/getArtistDetails/${artistId}`)
            console.log('artist details->', data)
            setData(data?.artist)
        } catch (error) {
            console.log(error)
            // toast.error('something went wrong')
        }
    }
    useEffect(() => {
        getArtistDetails()
    }, [])
    return (

        <ContentWrapper>
            <div className='mt-20 md:px-20 px-2 md:w-[800px] mx-auto'>
                <div className="bg-white overflow-hidden shadow rounded-lg border mt-20">
                    <div className="px-4 py-5 sm:px-6">
                        <p className='text-3xl font-roboto text-indigo-700'>{data.name}</p>
                        <p className="max-w-2xl text-lg text-gray-500" >
                            {data.email}
                        </p>
                        <p className="max-w-2xl text-lg text-gray-500" >
                            {data.phone}
                        </p>
                        <p className="max-w-2xl text-lg text-gray-500" >
                            {data.address}
                        </p>
                    </div>
                    <div className="border-t border-gray-200  py-3 sm:p-0">
                        <dl>
                            <div className="py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className='text-lg font-medium font-roboto'>
                                    Exhibitions:
                                </dt>
                                <dd className=' text-lg text-gray-900 sm:mt-0 sm:col-span-2'>
                                    {data.exhibition?.join(' , ')}
                                </dd>
                            </div>
                        </dl>
                    </div>
                    {data?.event?.length !== 0 && <div div className="border-t border-gray-200  py-3 sm:p-0">
                        <dl>
                            <div className="py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className='text-lg font-medium font-roboto'>
                                    Past Event:
                                </dt>
                                <dd className=' text-lg text-gray-900 sm:mt-0 sm:col-span-2'>
                                    {data.exhibition?.join(' , ')}
                                </dd>
                            </div>
                        </dl>
                    </div>}
                    <div className="border-t border-gray-200  py-3 sm:p-0">
                        <dl>
                            <div className="py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className='text-lg font-medium font-roboto'>
                                    Total Posts
                                </dt>
                                <dd className=' text-lg text-gray-900 sm:mt-0 sm:col-span-2'>
                                    {data.post?.length}
                                    <button className='px-4 bg-indigo-600 rounded-full text-white font-poppins mx-1 transform transition-all duration-300 hover:scale-110 '>View</button>
                                </dd>
                            </div>
                        </dl>
                    </div>


                </div>

            </div >
        </ContentWrapper>

    )
}

export default AdminUserInfoPage
