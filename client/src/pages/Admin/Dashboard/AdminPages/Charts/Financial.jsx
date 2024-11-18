import React from 'react'
import AdminContentWrapper from '../../AdminComponents/AdminContentWrapper'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair } from '@syncfusion/ej2-react-charts';
import { FinancialPrimaryXAxis, FinancialPrimaryYAxis, financialChartData } from '../../../../../Data';
import { useStateContext } from '../../../../../Context/dashboardContextProvider';
import { Header } from '../../AdminComponents';

const date1 = new Date('2017, 1, 1');

// eslint-disable-next-line consistent-return
function filterValue(value) {
    if (value.x >= date1) {
        // eslint-disable-next-line no-sequences
        return value.x, value.high, value.low;
    }
}
const returnValue = financialChartData.filter(filterValue);
const Financial = () => {
    const { currentMode } = useStateContext()
    return (
        <AdminContentWrapper>
            <div className='mt-24  p-10 md:p-2 bg-white dark:bg-secondary-dark-lg rounded-3xl'>
                <Header category='Financial' title='Apple historical' />
                <div className="w-full">
                    <ChartComponent id='charts' primaryXAxis={FinancialPrimaryXAxis} primaryYAxis={FinancialPrimaryYAxis} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true, shared: true }}
                        crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
                        background={currentMode === 'Dark' ? '#33373E' : '#fff'}>
                        <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={returnValue} xName='x' yName='low' name='Apple Inc' type='Hilo' low='low' high='high' />
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </div>
        </AdminContentWrapper>
    )
}

export default Financial
