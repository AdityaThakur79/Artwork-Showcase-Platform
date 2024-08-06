import React from 'react'
import AdminContentWrapper from '../../AdminComponents/AdminContentWrapper'
import { Header } from '../../AdminComponents'
import { Stacked as StackedChart } from '../../AdminComponents'
const Stacked = () => {
    return (
        <AdminContentWrapper>
            <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
                <Header category="Stacked" title="Revenue Breakdown" />
                <div className="w-full">
                    <StackedChart />
                </div>
            </div>
        </AdminContentWrapper>
    )
}

export default Stacked
