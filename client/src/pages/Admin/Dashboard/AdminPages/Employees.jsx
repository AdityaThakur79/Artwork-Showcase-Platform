import React from 'react'
import AdminContentWrapper from '../AdminComponents/AdminContentWrapper'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, ExcelReport, PdfExport, Search, Toolbar } from '@syncfusion/ej2-react-grids'
import { ordersData, contextMenuItems, ordersGrid, employeesGrid, employeesData } from '../../../../Data'
import { Header } from '../AdminComponents'
import { Inject, sort } from '@syncfusion/ej2-react-charts'
const Employees = () => {
    return (
        <AdminContentWrapper>
            <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
                <Header category="Page" title="Employees"></Header>
                <GridComponent dataSource={employeesData} allowPaging allowSorting toolbar={['Search']} width="auto">
                    <ColumnsDirective >
                        {employeesGrid.map((item, index) => (
                            <ColumnDirective key={index} {...item} />
                        ))}</ColumnsDirective>
                    <Inject services={[Page, Search, Toolbar]} />
                </GridComponent>
            </div>
        </AdminContentWrapper>
    )
}

export default Employees
