"use client"
import React, { useState } from 'react'
import { data } from '@/utilities/formData'
import { InputField } from '@/utilities/formData'
import AddInput from './AddInput'
import DynamicFormInputs from './DynamicFormInputs'


interface InputType {
    inputName: string,
    type: string,
}

interface OptionsType {
    id: number,
    optionName: string,
    value: string
}

export default function Form() {

    const [inputData, setInputData] = useState<InputField[]>(data)
    const [options, setOptions] = useState<OptionsType[]>([])
    console.log(options)

    function addInput(newInputDetails: InputType) {
        
        const newId = inputData.length + 1
        const isNameExisting = inputData.find(item => item.inputName === newInputDetails.inputName)

        if (isNameExisting) {
            alert('input name is already existing:')
            return
        } else {
            const newInput = { id: newId, ...newInputDetails, options }
            console.log('adding item', newInput)
            setInputData([...inputData, newInput])
        }
    }

    console.log('current inputs are: ', inputData)
    return (
        <section className='w-full flex flex-col md:flex-row items-center justify-center gap-10'>
            <AddInput addInput={addInput} options={options} setOptions={setOptions} />
            <DynamicFormInputs data={inputData} />
        </section>
    )
}
