import React from 'react'
import { Header, LineChart } from '../../AdminComponents'
import AdminContentWrapper from '../../AdminComponents/AdminContentWrapper'
const Line = () => {
    return (
        <AdminContentWrapper>
            <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
                <Header category='Chart' title='Inflation Rate' />
                <div className='w-full'>
                    <LineChart />
                </div>
            </div>
        </AdminContentWrapper>
    )
}

export default Line
