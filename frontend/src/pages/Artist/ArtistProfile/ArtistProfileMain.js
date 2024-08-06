import React, { useState, useEffect } from "react";
import ContentWrapper from "../../../Components/ContentWrapper";
import img from "./img/profimg.jpeg";
import { Link } from "react-router-dom";
import axios from 'axios'
const ArtistProfileMain = ({ children }) => {
    const artistId = localStorage.getItem('Artist')
    const [artistInfo, setArtistInfo] = useState()
    // const params = useParams()
    const getArtistDetails = async () => {
        try {
            // const { artistId } = params
            const { data } = await axios.get(`/api/v1/artist/getArtistDetails/${artistId}`)
            console.log(data)
            setArtistInfo(data?.artist)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { getArtistDetails() }, [])
    return (
        <ContentWrapper>
            <div className="mt-32" >
                <div className="p-10">
                    <div className="w-full">
                        <div className="grid grid-cols-12 gap-2"  >
                            <div className="col-span-12 lg:col-span-4 bg-gray-50 drop-shadow-xl flex justify-center rounded-xl mb-20 lg:h-[100vh]">
                                {/* below we are creating the box for image */}
                                <div className="relative">
                                    <div className="p-20">
                                        <div className=" rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <div className="w-32 h-32 rounded-xl  flex items-center justify-center">
                                                <img
                                                    src={`/api/v1/artist/getArtistPhoto/${artistInfo?._id}`}
                                                    alt=""
                                                    className="w-44 h-36 rounded-xl object-fill"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-4 text-center">
                                            <p className="font-poppins font-bold text-2xl leading-tight">
                                                {" "}
                                                {artistInfo?.name}
                                            </p>
                                            <p className="font-poppins text-gray-600 text-md ">
                                                Artist
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-center gap-3 mt-3 bg-white rounded-xl drop-shadow-lg ">
                                            <p className="text-2xl text-indigo-600 m-2 p-1">
                                                <i className="fa-brands fa-facebook"></i>
                                            </p>

                                            <p className="text-2xl text-red-600 m-2 p-1">
                                                <i className="fa-brands fa-instagram"></i>
                                            </p>
                                            <p className="text-2xl text-black m-2 p-1">
                                                <i class="fa-brands fa-x-twitter"></i>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-[-40px] mb-20">
                                        <div className="bg-gray-100 w-full p-4 rounded-xl">
                                            <div className="flex gap-3 mb-2">
                                                <div className=" flex items-center justify-center bg-white drop-shadow-lg rounded-lg">
                                                    <p className="text-pink-600 p-1 m-2">
                                                        <i class="fa-solid fa-phone"></i>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-poppins text-gray-600">
                                                        Phone
                                                    </p>
                                                    <p className="font-poppins font-bold text-[17px]">
                                                        {artistInfo?.phone}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="border-b border-gray-300"></div>
                                            <div className="flex gap-3 mb-2 mt-2">
                                                <div className=" flex items-center justify-center bg-white drop-shadow-lg rounded-lg">
                                                    <p className="text-green-600 p-1 m-2">
                                                        <i class="fa-solid fa-envelope"></i>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-poppins text-gray-600">
                                                        Email
                                                    </p>
                                                    <p className="font-poppins font-bold text-[17px]">
                                                        {artistInfo?.email}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="border-b border-gray-300"></div>
                                            <div className="flex gap-3 mb-2 mt-2">
                                                <div className=" flex items-center justify-center bg-white drop-shadow-lg rounded-lg">
                                                    <p className="text-blue-600 p-1 m-2">
                                                        <i class="fa-solid fa-location-crosshairs"></i>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-poppins text-gray-600">
                                                        Location
                                                    </p>
                                                    <p className="font-poppins font-bold text-[17px]">
                                                        {artistInfo?.address}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="border-b border-gray-300"></div>
                                            <div className="flex gap-3 mb-2 mt-2">
                                                <div className=" flex items-center justify-center bg-white drop-shadow-lg rounded-lg">
                                                    <p className="text-yellow-600 p-1 m-2">
                                                        <i class="fa-solid fa-cake-candles"></i>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-poppins text-gray-600">
                                                        Birthday
                                                    </p>
                                                    <p className="font-poppins font-bold text-[17px]">
                                                        29Th Feb
                                                    </p>
                                                </div>
                                            </div>
                                            {/* <div className="border-b border-gray-300"></div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-12 lg:col-span-8 bg-gray-50 text-center rounded-xl drop-shadow-lg lg:h-[100vh]">
                                <div className="relative flex items-center justify-center w-full">
                                    <div className="w-full ms-10">
                                        <div className="md:w-[600px] px-5 py-12">
                                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white justify-center items-center flex rounded-2xl gap-4 px-4 py-3 drop-shadow-2xl">
                                                <Link to={`/artist-profile/about/${artistId}`} className="bg-pink-500 w-[70px] py-1 text-white rounded-xl">
                                                    <p><i class="fa-solid fa-user"></i></p>
                                                    <p className="text-white text-[13px] font-poppins">About</p>
                                                </Link>
                                                <Link to={`/artist-profile/post/${artistId}`} className="bg-pink-500 w-[70px] py-1 text-white rounded-xl">
                                                    <p><i class="fa-solid fa-stamp"></i></p>
                                                    <p className="text-white text-[13px] font-poppins">Post</p>
                                                </Link>
                                                <Link to='/create-post' className="bg-pink-500 w-[70px] py-1 text-white rounded-xl">
                                                    <p><i class="fa-solid fa-upload"></i></p>
                                                    <p className="text-white text-[13px] font-poppins">Upload</p>
                                                </Link>
                                                <Link to={`/artist-profile/blogs/${artistId}`} className="bg-pink-500 w-[70px] py-1 text-white rounded-xl">
                                                    <p><i class="fa-solid fa-newspaper"></i></p>
                                                    <p className="text-white text-[13px] font-poppins">Blogs</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="-mt-10 md:-ms-10 overflow-y-auto h-[90vh]">
                                            {children}
                                        </div>

                                    </div>



                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContentWrapper>
    );
};

export default ArtistProfileMain;
