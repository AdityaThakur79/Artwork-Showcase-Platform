import React from 'react'
import AdminContentWrapper from '../../AdminComponents/AdminContentWrapper'
import { pieChartData } from '../../../../../Data'
import { Header } from '../../AdminComponents'
import { Pie as PieChart } from '../../AdminComponents'
const Pie = () => {
    return (
        <AdminContentWrapper>
            <div className='mt-24 p-10 md:m-10 bg-white dark:bg-secondar-dark-bg rounded-3xl'>
                <Header category='Chart' title='Project cost breakdown' />
                <div className="w-full">
                    <PieChart id='chart-pie' data={pieChartData} legendVisibility height="full" />
                </div>
            </div>
        </AdminContentWrapper>
    )
}

export default Pie
