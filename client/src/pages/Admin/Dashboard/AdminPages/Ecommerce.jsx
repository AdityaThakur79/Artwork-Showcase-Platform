import React from 'react'
import AdminContentWrapper from '../AdminComponents/AdminContentWrapper'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoDotFill } from 'react-icons/go'
import { Stacked, Pie, Button, Sparkline, SparkLine } from '../AdminComponents'
import { useStateContext } from '../../../../Context/dashboardContextProvider'
import welcome from '../AdminData/welcome-bg.svg'
import { SparklineAreaData, earningData } from '../../../../Data'
const Ecommerce = () => {
    const { currentColor, currentMode } = useStateContext()

    return (
        <AdminContentWrapper>
            <div className='mt-12'>
                <div className='flex justify-center'>
                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:h-60 h-44 rounded-xl w-full  p-8 pt-9 m-3 relative">
                        <img src={welcome} alt="" className=' absolute object-cover inset-0 w-full h-full' />
                        <div className="flex justify-between items-center absolute ">
                            <div>
                                <p className='font-bold text-gray-400'>
                                    Earnings
                                </p>
                                <p className='text-2xl' >$63,448</p>
                            </div>
                        </div>
                        <div className="absolute top-32">
                            <Button color='white' bgColor={currentColor} text='Download' borderRadius='10px' size='md'>Download</Button>
                        </div>
                    </div>


                </div>
                <div className='flex m-3 flex-wrap justify-center gap-1 md:gap-3 items-center'>
                    {earningData.map((item) => (
                        <div key={item.title} className='bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>

                            <button type='button' style={{ color: item.iconColor, backgroundColor: item.iconBg }} className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>{item.icon}</button>
                            <p className='mt-3'>
                                <span className='text-lg font-semibold'>{item.amount}</span>
                                <span className={`text-sm  text-${item.pcColor}  ml-2`}>{item.percentage}</span>
                            </p>
                            <p className='text-gray-400 mt-1  text-sm'>{item.title}</p>
                        </div>
                    ))}
                </div>

                <div className="flex gap-10 flex-wrap justify-center">
                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
                        <div className="flex justify-between">
                            <p className='font-semibold text-xl'>Revenue Updates</p>
                            <div className="flex items-center gap-4">
                                <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                                    <span><GoDotFill /></span>
                                    <span>Expense</span>
                                </p>
                                <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                                    <span><GoDotFill /></span>
                                    <span>Budget</span>
                                </p>
                                z
                            </div>
                        </div>
                        <div className='mt-10 flex gap-10 flex-wrap justify-center'>
                            <div className="lg:border-r-1 border-0 border-color m-4 pr-10">
                                <div>
                                    <p>
                                        <span className='text-3xl font-semibold'>$93,438</span>
                                        <span className='p-1.5 hover:drop-shadow-xl cursor-pointer text-white bg-green-400 text-xs ml-2 rounded-full'>23%</span>
                                    </p>
                                    <p className='text-gray-500 mt-1'>Budget</p>
                                </div>
                                <div className='mt-8'>
                                    <p>
                                        <span className='text-3xl font-semibold'>$48,438</span>

                                    </p>
                                    <p className='text-gray-500 mt-1'>Expense</p>
                                </div>
                                <div className='mt-5'>
                                    <SparkLine currentColor={currentColor}
                                        id='line-sparkline'
                                        type='Line'
                                        height="80px"
                                        width="250px"
                                        data={SparklineAreaData}
                                        color={currentColor} />
                                </div>
                                <div className='mt-5'>
                                    <Button color='white' bgColor={currentColor} text='Download Report' borderRadius='10px' />
                                </div>
                            </div>
                            <div>
                                <Stacked width='320px' height='360px' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminContentWrapper >
    )
}

export default Ecommerce
