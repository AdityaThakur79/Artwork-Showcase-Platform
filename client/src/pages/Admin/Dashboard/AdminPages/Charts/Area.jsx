import React from 'react'
import AdminContentWrapper from '../../AdminComponents/AdminContentWrapper'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, SplineAreaSeries, Legend, } from '@syncfusion/ej2-react-charts'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../../../../Data'
import { Header } from '../../AdminComponents'
const Area = () => {
    return (
        <AdminContentWrapper>
            <div className=' md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
                <Header category='Chart' title='Inflation Rate In Percentage'></Header>
                <ChartComponent id='charts' primaryXAxis={areaPrimaryXAxis} primaryYAxis={areaPrimaryYAxis} chartArea={{ border: { width: 0 } }} legendSettings={{ background: ' white' }} tooltip={{ enable: true }}>
                    <Inject services={[SplineAreaSeries, DateTime, Legend]} />
                    <SeriesCollectionDirective>
                        {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </AdminContentWrapper >
    )
}

export default Area
