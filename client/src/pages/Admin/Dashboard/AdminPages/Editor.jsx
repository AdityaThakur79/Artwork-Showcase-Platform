import React from 'react'
import AdminContentWrapper from '../AdminComponents/AdminContentWrapper'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor'
import { EditorData } from '../../../../Data'
import { Header } from '../AdminComponents'
const Editor = () => {
    return (
        <AdminContentWrapper>
            <div className='mt-24 ml-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
                <Header category='App' title='Editor'></Header>
                <RichTextEditorComponent>
                    <EditorData />
                    <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
                </RichTextEditorComponent>
            </div>
        </AdminContentWrapper>
    )
}

export default Editor
