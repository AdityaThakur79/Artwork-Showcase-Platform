import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from 'react-icons/fi'
import { Navbar, Sidebar, ThemeSettings, Footer } from './AdminComponents'
import { Artworks, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './AdminPages'
import Header from '../../../Components/Header'
import { useStateContext } from '../../../Context/dashboardContextProvider'
import Ecommerce from './AdminPages/Ecommerce'
const Dashboard = () => {
    const { activeMenu } = useStateContext()
    return (
        <div style={{ height: '100vh' }}>
            <div className='flex relative dark:bg-main-dark-bg'>
                <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                    <TooltipComponent content="Settings" position='Top'>
                        <button className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{ backgroundColor: 'blue', borderRadius: '50%' }} type='button'>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg'>
                    <Sidebar />
                </div>) : (<div className='w-0 dark:bg-secondary-dark-bg'>

                    <Sidebar />
                </div>)}
                <div className={`dark-bg bg-main-bg dark:bg-main-bg w-full min-h-screen ${activeMenu ? 'md:ml-32' : 'flex-2'}`}>
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                        <Navbar />
                    </div>


                    <div>
                        <Routes>
                            {/* dashboard */}

                            <Route path="/dashboard" element={<Ecommerce />} />
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
