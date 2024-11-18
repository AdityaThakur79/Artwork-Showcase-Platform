// import React, { useEffect, useState } from 'react'
// import banner from '../../images/banner.jpg'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'
// import ContentWrapper from '../../Components/ContentWrapper'

// const ArtistProfile = () => {

//     // below here is the function for getting the artis info
//     const location = useLocation()
//     const [artistData, setArtistData] = useState(null)
//     const [artistArtwork, setArtistArtwork] = useState([])
//     const [initialArtistArtwork, setInitialArtistArtwork] = useState([])
//     const [intialNo, setInitialNo] = useState(6)
//     const [intialArtistDesc, setInitalArtistDesc] = useState("")
//     const [showMore, setShowMore] = useState(false)
//     const navigate = useNavigate()
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [location]);
//     // below is the function for getting the artist artwork
//     const getArtistArtwork = async () => {
//         try {
//             const ArtistId = localStorage.getItem('Artist')
//             const { data } = await axios.get(`/api/v1/artist/getArtistArtwork/${ArtistId}`)
//             console.log(data?.data)
//             setArtistArtwork(data?.data);
//             setInitialArtistArtwork(data?.data?.slice(0, intialNo))
//         } catch (error) {
//             console.log(error)
//         }
//     }
// //
//     // below is the function for loading all artwork
//     const loadAll = async () => {
//         setInitialArtistArtwork(artistArtwork)

//     }

//     const getArtistInfo = async () => {
//         try {
//             const ArtistId = localStorage.getItem('Artist')
//             console.log(ArtistId)
//             const { data } = await axios.get(`/api/v1/artist/getArtistDetails/${ArtistId}`)
//             setArtistData(data?.artist)
//             setInitalArtistDesc(data?.artist?.description.slice(0, 300))


//             // console.log(data);
//         } catch (error) {
//             console.log(error);
//         }
//     }



//     const showMoreText = async () => {
//         setInitalArtistDesc(artistData.description)
//         setShowMore(true)

//     }

//     const showLessText = () => {
//         setInitalArtistDesc(artistData.description.slice(0, 300))
//         setShowMore(false)
//     }
//     useEffect(() => { getArtistArtwork(); getArtistInfo(); }, [])
//     return (
//         <ContentWrapper>
//             <div>
//                 <div classname="p-16">
//                     <div className="p-16">
//                         <div className="p-8 bg-white shadow mt-24">
//                             <div className="grid grid-cols-1 md:grid-cols-2">

//                                 <div className="relative">
//                                     <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
//                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
//                                             <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
//                                         </svg>
//                                     </div>
//                                 </div>
//                                 <div className=" space-x-0 md:space-x-4 md:-mt-2 grid grid-cols md:grid-cols-2 mt-32">
//                                     <button className="text-white py-2 px-4 uppercase rounded bg-blue-700 hover:bg-blue-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 mt-4 font-poppins">
//                                         Connect
//                                     </button>
//                                     <button className="text-white py-2 px-4 uppercase rounded bg-green-700 hover:bg-green-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 mt-4 font-poppins">
//                                         Message
//                                     </button>
//                                 </div>
//                             </div>
//                             <div className="mt-20 text-center border-b pb-12">
//                                 <h1 className="text-4xl font-medium text-indigo-700 font-ubuntu">{artistData?.name}</h1>
//                                 <p className="font-light text-2xl text-black font-poppins mt-2">{artistData?.address}</p>
//                                 <p className="mt-2 text-xl text-gray-500 font-poppins">Achievements -{artistData?.achievement?.join(", ")}</p>
//                                 <p className="mt-2 text-xl text-gray-500 font-poppins">Past Exhibitions- {artistData?.exhibition.join(", ")}</p>
//                             </div>


//                             <div className="mt-12 flex flex-col justify-center">
//                                 <p className="text-gray-600 text-center font-light lg:px-16 font-poppins">{intialArtistDesc}</p>
//                                 {
//                                     !showMore ? (<button className="text-indigo-500 py-2 px-4  font-medium mt-4 font-roboto" onClick={showMoreText}>
//                                         Show more
//                                     </button>) : (
//                                         <button className="text-indigo-500 py-2 px-4  font-medium mt-4 font-roboto" onClick={showLessText}>
//                                             Show less
//                                         </button>
//                                     )
//                                 }

//                             </div>
//                             <div className="grid grid-cols  text-center order-last md:order-first mt-20 md:mt-0">
//                                 {artistData?.facebook && <div>

//                                     <button className="text-white rounded px-4 font-medium text-[15px] uppercase py-2 bg-blue-400 text-center mt-2 w-[125px] font-roboto transform transition hover:translate-y-0.5" onClick={() => {
//                                         window.open(artistData?.facebook)
//                                     }}>Facebook</button>

//                                 </div>}
//                                 {artistData?.instagram && <div>

//                                     <button className="text-white rounded px-4 font-medium text-[15px] uppercase py-2 bg-red-500 text-center mt-2 w-[125px] font-roboto  transform transition hover:translate-y-0.5" onClick={() => {
//                                         window.open(artistData?.instagram)
//                                     }}>Instagram</button>
//                                 </div>}
//                                 {artistData?.twitter && <div>

//                                     <button className="text-white rounded px-4 font-medium text-[15px] uppercase py-2 bg-black text-center mt-2 w-[120px] font-roboto  transform transition hover:translate-y-0.5" onClick={() => {
//                                         window.open(artistData?.twitter)
//                                     }}>Twitter</button>
//                                 </div>}
//                             </div>

//                             <p className='text-center text-3xl mt-20 font-medium font-roboto text-indigo-700 uppercase'>
//                                 Posts
//                             </p>
//                             <div className="flex flex-wrap justify-center mt-10">

//                                 {
//                                     initialArtistArtwork?.length > 0 && initialArtistArtwork?.map((art) => (
//                                         <Link key={art._id} to={`/artwork-info/${art._id}`}>
//                                             <div key={art._id} className="max-w-sm rounded-3xl overflow-hidden shadow-lg m-4 font-poppins hover:transform hover:scale-110 transition-all duration-300">
//                                                 <div className="relative mb-2">
//                                                     <img src={`/api/v1/artwork/post-photo/${art?._id}`} alt="" className='w-full' style={{ height: '200px', width: '300px' }} />
//                                                 </div>
//                                                 <div className="px-2 py-6">
//                                                     <p className="font-bold ms-3">
//                                                         <span className='text-indigo-700 text-[1.3rem]'>{art?.name}</span>
//                                                     </p>

//                                                 </div>
//                                             </div>
//                                         </Link>
//                                     ))
//                                 }


//                             </div>

//                             <div className='w-full'>
//                                 {initialArtistArtwork.length !== artistArtwork?.length && <button button className="text-white rounded px-4 font-medium text-[15px] uppercase py-2 bg-indigo-600 text-center mt-2  font-roboto  transform transition hover:translate-y-0.5 ms-auto" onClick={() => {
//                                     loadAll()
//                                 }}>Load All...</button>}
//                             </div>
//                         </div>

//                     </div>


//                 </div>

//             </div >
//         </ContentWrapper>


//     )
// }

// export default ArtistProfile
