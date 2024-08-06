import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { themeColors } from '../../../../Data'
import { useStateContext } from '../../../../Context/dashboardContextProvider'
const TheameSettings = () => {
    const { setColor, setMode, currentMode, currentColor, setTheme } = useStateContext()

    return (
        <div className='bg-half-transparent w-screen fixed top-0 right-0 z-1 '>
            <div className='float-right h-screen dark:text-gray-200 bg-white w-400 dark:[#484b52]'>
                <div className='flex justify-between items-center p-4 ml-4  mt-20 md:mt-2'>
                    <p className='font-semibold text-xl'>Settings</p>
                    <button type='button' onClick={() => setTheme(false)} style={{ color: 'rgba(153,171,180)', borderRadius: '50%' }} className='text-2xl hover:drop-shadow-xl hover:bg-light-gray'>
                        <MdOutlineCancel />
                    </button>
                </div>

                {/* this is the theme options */}
                <div className='flex-col border-t-1 border-color p-4 ml-4'>
                    <p className='font-semibold text-lg'>Theme Options</p>
                    <div className='mt-4'>
                        <input type="radio" id='light' name='theme' value='Light' className='cursor-pointer' onChange={setMode} checked={currentMode === 'Light'} />
                        <label htmlFor="light" className='ml-2 text-md cursor-pointer'>Light</label>
                    </div>
                    <div className='mt-4'>
                        <input type="radio" id='dark' name='theme' value='Dark' className='cursor-pointer' onChange={setMode} checked={currentMode === 'Dark'} />
                        <label htmlFor="dark" className='ml-2 text-md cursor-pointer'>Dark</label>
                    </div>
                </div>
                <div className="flex-col border-t-1 border-color p-4 ml-4">
                    <p className='text-lg font-semibold'>theme colors</p>
                    <div className='flex gap-3'>
                        {themeColors.map((item, index) => (
                            <TooltipComponent content={item.name} key={index} position='TopCenter'>
                                <div className='relative mt-2 cursor-pointer flex gap-5 items-center'>
                                    <button className='rounded-full cursor-pointer h-10 w-10' style={{ backgroundColor: item.color }} onClick={() => setColor(item.color)}><BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`} /></button>
                                </div>
                            </TooltipComponent>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TheameSettings
