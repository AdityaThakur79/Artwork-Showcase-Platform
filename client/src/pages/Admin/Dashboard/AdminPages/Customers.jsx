import React from 'react'
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter, Search } from '@syncfusion/ej2-react-grids'
import { Header } from '../AdminComponents'
import AdminContentWrapper from '../AdminComponents/AdminContentWrapper'
import { customersGrid, customersData } from '../../../../Data'
const Customer = () => {
    return (
        <AdminContentWrapper>
            <Header category='Page' title='Customers' />
            <GridComponent dataSource={customersData} allowSorting allowPaging width='auto' toolbar={['Delete']} editSettings={{ allowDeleting: true, allowEditing: true }}>
                <ColumnsDirective>
                    {customersGrid.map((item, index) => (
                        < ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
            </GridComponent>
        </AdminContentWrapper>
    )
}

export default Customer
