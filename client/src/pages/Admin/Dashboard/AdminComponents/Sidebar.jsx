import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent, getZindexPartial } from '@syncfusion/ej2-react-popups'
import { links } from '../../../../Data'
import { useStateContext } from '../../../../Context/dashboardContextProvider'
const Sidebar = () => {

    // const activeMenu = true;
    const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext()

    // below is the handle close side bar function 
    const handleClosedSideBar = () => {
        if (activeMenu && screenSize <= 900) {
            setActiveMenu(false)
        }
    }
    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 '
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md  text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
    return (
        <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
            {
                activeMenu && (
                    <>
                        <div className="flex justify-between items-center bg-white " style={{ zIndex: '1' }}>

                            <Link to='/' onClick={handleClosedSideBar} className='items-center flex mt-4 text-xl font-extrabold tracking-tight text-slate-900 dark:text-white gap-3'>
                                <SiShopware />
                                <span>ASP</span>
                            </Link>
                            <TooltipComponent content="Menu" position='BottomCenter'>
                                <button type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className='text-xl hover:bg-light-gray text-slate-900 rounded-full   block md:hidden'>
                                    <MdOutlineCancel />
                                </button>
                            </TooltipComponent>

                        </div>
                        <div className="mt-10">
                            {links.map((item) => (
                                <div key={item.title}>
                                    <p className='text-gray-400 m-3 mt-4 uppercase'>
                                        {item.title}
                                    </p>
                                    {item.links.map((link) => (
                                        <NavLink to={`/${link.name}`} key={link.name} onClick={handleClosedSideBar} style={({ isActive }) => ({ backgroundColor: isActive ? currentColor : '' })} className={({ isActive }) =>
                                            isActive ? activeLink : normalLink
                                        } >{link.icon}
                                            <span className='capitalize'>{link.name}</span></NavLink>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Sidebar
