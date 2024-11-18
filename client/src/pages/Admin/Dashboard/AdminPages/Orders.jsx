import React from 'react'
import AdminContentWrapper from '../AdminComponents/AdminContentWrapper'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit } from '@syncfusion/ej2-react-grids'
import { ordersData, contextMenuItems, ordersGrid } from '../../../../Data'
import { Header } from '../AdminComponents'
import { Inject } from '@syncfusion/ej2-react-charts'
const Orders = () => {
    return (
        <AdminContentWrapper>
            <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
                <Header category="Page" title="Orders" />
                <GridComponent id='gridComp' dataSource={ordersData} allowPaging allowSorting>
                    <ColumnsDirective>
                        {ordersGrid.map((item, index) => (
                            <ColumnDirective key={index} {...item} />
                        ))}
                    </ColumnsDirective>
                    <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
                </GridComponent>
            </div>

        </AdminContentWrapper>
    )
}

export default Orders
