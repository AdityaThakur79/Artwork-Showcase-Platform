import React from 'react'
import AdminContentWrapper from '../AdminComponents/AdminContentWrapper'
import { Header } from '../AdminComponents'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
const change = (args) => {
    document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
}
const ColorPicker = () => {
    return (
        <AdminContentWrapper>
            <div className='ml-2 md:m-10 p-2 mt-24 md:p-10'>
                <Header category='App' title='ColorPicker' />
                <div className="text-center">
                    <div id="preview"></div>
                    <div className="flex justify-center gap-20 flex-wrap">
                        <div>
                            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallete</p>
                            <ColorPickerComponent id='inline-pallete' mode='Palette' modeSwitcher={false} inline showButtons={false} change={change} />
                        </div>
                        <div>
                            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
                            <ColorPickerComponent id='inline-pallete' mode='Picker' modeSwitcher={false} inline showButtons={false} change={change} />
                        </div>
                    </div>
                </div>
            </div>
        </AdminContentWrapper>
    )
}

export default ColorPicker
