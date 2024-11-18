import React from 'react'
import AdminContentWrapper from '../../AdminComponents/AdminContentWrapper'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts'
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../../../../Data'
const Bar = () => {
    return (
        <AdminContentWrapper>
            <div className='md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
                <div className="w-full">
                    <ChartComponent id='charts' primaryXAxis={barPrimaryXAxis} primaryYAxis={barPrimaryYAxis} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }}
                        // background={currentMode === 'Dark' ? '#33373E' : '#fff'}
                        legendSettings={{ background: 'white' }}
                    >
                        <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
                        <SeriesCollectionDirective>
                            {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item}></SeriesDirective>)}
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </div>
        </AdminContentWrapper>
    )
}

export default Bar
