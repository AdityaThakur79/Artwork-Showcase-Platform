import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from 'react-icons/fi'
import { Navbar, Sidebar, ThemeSettings, Footer } from '../AdminComponents'


import { useStateContext } from '../../../../Context/dashboardContextProvider'
import Ecommerce from '../AdminPages/Ecommerce'
const AdminContentWrapper = ({ children }) => {
    const { activeMenu, theme, setTheme, currentColor, currentMode } = useStateContext()

    return (
        <div >
            <div className='flex relative' >
                <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }} >
                    <TooltipComponent content="Settings" position='Top'>
                        <button className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' onClick={() => setTheme(true)} style={{ backgroundColor: currentColor, borderRadius: '50%' }} type='button' >
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                    <Sidebar />
                </div>) : (<div className='w-0 dark:bg-secondary-dark-bg'>

                    <Sidebar />
                </div>)}
                <div className={`dark-bg bg-main-bg dark:bg-main-bg w-full min-h-screen ${activeMenu ? 'md:ml-36' : 'flex-2'}`}>
                    <div className="fixed  md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                        <Navbar />
                    </div>
                    <div>
                        {theme && <ThemeSettings />}
                        <div className={`${activeMenu ? 'ml-40' : 'ml-2'} `}>{children}</div>
                    </div>





                </div>
            </div>
        </div>
    )
}

export default AdminContentWrapper
