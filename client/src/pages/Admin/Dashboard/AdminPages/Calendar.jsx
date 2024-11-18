import React from 'react'
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'
import AdminContentWrapper from '../AdminComponents/AdminContentWrapper'
import { Header } from '../AdminComponents'
import { scheduleData } from '../../../../Data'
const Calendar = () => {
    return (
        <AdminContentWrapper>
            <div className='mt-24 ml-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
                <Header category='App' title='Calendar'></Header>
                <ScheduleComponent height='650px' eventSettings={{ dataSource: scheduleData }} selectedDate={new Date(2021, 0, 10)}>
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}></Inject>
                </ScheduleComponent>
            </div>
        </AdminContentWrapper>
    )
}

export default Calendar
