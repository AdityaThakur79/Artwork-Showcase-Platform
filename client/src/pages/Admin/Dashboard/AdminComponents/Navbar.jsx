import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../AdminData/avatar.jpg'
import { Chat, Cart, Notification, UserProfile } from '.'
import { useStateContext } from '../../../../Context/dashboardContextProvider'
// below we are creating the navbutton component
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position='BottomCenter'>
        <button type='button' onClick={customFunc} style={{ color }} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
            <span style={{ background: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
            {icon}

        </button>
    </TooltipComponent>
)
const Navbar = () => {
    const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor } = useStateContext()

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize])
    return (
        <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative w-full">
            <div> <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color={currentColor} icon={<AiOutlineMenu />}></NavButton></div>
            <div className="flex">
                <NavButton title="Cart" customFunc={() => { handleClick('cart') }} color={currentColor} icon={<FiShoppingCart />}></NavButton>
                <NavButton title="Chat" customFunc={() => { handleClick('chat') }} color={currentColor} icon={<BsChatLeft />}></NavButton>
                <NavButton title="Notifications" customFunc={() => { handleClick('notification') }} color={currentColor} icon={<RiNotification3Line />}></NavButton>
                <TooltipComponent content='User Profile' position='BottomCenter'>
                    <div className='flex items-center gap-2 p-2 cursor-pointer hover:bg-light-gray rounded-lg' onClick={() => { handleClick('userProfile') }}>
                        <img src={avatar} alt="" className='rounded-full w-8 h-8' />
                        <MdKeyboardArrowDown className='text-gray-400 text-14' />
                    </div>
                </TooltipComponent>
                {isClicked?.cart && <Cart />}
                {isClicked?.chat && <Chat />}
                {isClicked?.notification && <Notification />}
                {isClicked?.userProfile && <UserProfile />}
            </div>
        </div>
    )
}

export default Navbar
