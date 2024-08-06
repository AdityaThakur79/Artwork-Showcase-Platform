import React from 'react'
import AdminContentWrapper from '../AdminComponents/AdminContentWrapper'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban'
import { Header } from '../AdminComponents'
import { kanbanData, kanbanGrid } from '../../../../Data'
const Kanban = () => {
    return (
        <AdminContentWrapper>
            <div className='mt-24 ml-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
                <Header category='App' title='Kanban'></Header>
                <KanbanComponent id='kanban' dataSource={kanbanData} cardSettings={{ contentField: 'Summary', headerField: 'Id' }} keyField='Status'>
                    <ColumnsDirective>
                        {kanbanGrid.map((item, index) => (
                            <ColumnDirective key={index} {...item} />
                        ))}</ColumnsDirective>
                </KanbanComponent>
            </div>
        </AdminContentWrapper>
    )
}

export default Kanban
