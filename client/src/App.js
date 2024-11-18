import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgotPassword';
import { Toaster } from 'react-hot-toast'
import Homepage from './pages/Homepage';
import UpdateProfile from './pages/User/UpdateProfile';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Category from './pages/Admin/Category';
import Artwork from './pages/Artwork';
import About from './pages/User/About';
import CheckArtist from './pages/User/CheckArtist';

import ArtistRegister from './pages/artistAuth/ArtistRegister';
import ArtistLogin from './pages/artistAuth/ArtistLogin';
import ArtistForgotPassword from './pages/artistAuth/ArtistForgotPassword';
import CreatePost from './pages/Artist/CreatePost';
import ArtworkInfoPage from './pages/ArtworkInfoPage';
import ArtistProfile from './pages/Artist/ArtistProfile';
import ArtByCategory from './pages/User/ArtByCategory';
import AdminDashboard from './pages/Admin/AdminDashboard';
import UserTable from './pages/Admin/UserTable';
import AdminTable from './pages/Admin/AdminTable';
import AdminArtistInfoPage from './pages/Admin/AdminArtistInfoPage';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import AdminArtistPostPage from './pages/Admin/AdminArtistPostPage';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import ArtistProfileMain from './pages/Artist/ArtistProfile/ArtistProfileMain';
import { Artworks, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages/Admin/Dashboard/AdminPages'
import Ecommerce from './pages/Admin/Dashboard/AdminPages/Ecommerce';
import ArtistProfileAbout from './pages/Artist/ArtistProfile/ArtistProfileAbout';
import ArtistProfilePost from './pages/Artist/ArtistProfile/ArtistProfilePost';
import ArtistProfileBlogs from './pages/Artist/ArtistProfile/ArtistProfileBlogs';
import { Cart } from './pages/Admin/Dashboard/AdminComponents';
import CartPage from './pages/CartPage';
function App() {
  const location = useLocation()
  useEffect(() => { window.scroll(0, 0) }, [location])
  return (<>

    <Toaster />
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/Forgot-password' element={<ForgotPassword />} />
      <Route path='/' element={<Homepage />} />
      <Route path='/Profile' element={<UpdateProfile />} />
      {/* <Route path='/artist-profile' element={<ArtistProfile />} /> */}
      {/* <Route path='/artist-profile' element={<ArtistProfileMain />} /> */}
      <Route path='/artist-profile/about/:artistId' element={<ArtistProfileAbout />} />
      <Route path='/artist-profile/post/:artistId' element={<ArtistProfilePost />} />
      <Route path='/artist-profile/blogs/:artistId' element={<ArtistProfileBlogs />} />
      {/* <Route path='/category' element={<Category />} /> */}
      <Route path='/artwork' element={<Artwork />} />
      <Route path='/cart/:id' element={<CartPage />} />
      <Route path='/about' element={<About />} />
      <Route path='/check' element={<CheckArtist />} />
      {/* <Route path='/artist-page' element={<ArtsistPage />} /> */}
      <Route path='/artist-register' element={<ArtistRegister />} />
      <Route path='/artist-login' element={<ArtistLogin />} />
      <Route path='/artist-forgot-password' element={<ArtistForgotPassword />} />
      <Route path='/create-post' element={<CreatePost />} />
      <Route path='/artwork-info/:pid' element={<ArtworkInfoPage />}></Route >
      <Route path='/category-arts/:id' element={<ArtByCategory />}></Route >
      {/* <Route path='/admin' element={<AdminDashboard />}></Route > */}
      <Route path='/admin/artistData' element={<AdminTable />}></Route >
      <Route path='/admin/userData' element={<UserTable />}></Route >
      <Route path='/admin/categoryData' element={<Category />}></Route >
      <Route path='/admin/artistInfo/:artistId' element={<AdminArtistInfoPage />}></Route >
      <Route path='/admin/artistpost/:artistId' element={<AdminArtistPostPage />}></Route >
      {/* <Route path='/admin/dashboard' element={<Dashboard />}></Route> */}



      {/* dashboard */}

      <Route path="/ecommerce" element={<Ecommerce />} />
      {/* Pages */}
      <Route path="/orders" element={<Orders />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/customers" element={<Customers />} />

      {/* apps */}
      <Route path='/post-request' element='PostRequest' />
      <Route path='/orders' element='Orders' />
      <Route path='/events' element='Events' />
      <Route path='/blogs' element='Blogs' />
      <Route path="/kanban" element={<Kanban />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/color-picker" element={<ColorPicker />} />

      {/* charts */}
      <Route path="/line" element={<Line />} />
      <Route path="/area" element={<Area />} />
      <Route path="/bar" element={<Bar />} />
      <Route path="/pie" element={<Pie />} />
      <Route path="/financial" element={<Financial />} />
      <Route path="/color-mapping" element={<ColorMapping />} />
      <Route path="/pyramid" element={<Pyramid />} />
      <Route path="/stacked" element={<Stacked />} />



    </Routes>



  </>

  )

}

export default App;
