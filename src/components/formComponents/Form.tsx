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


export default function Form() {

    const [inputData, setInputData] = useState<InputField[]>(data)

    function addInput(newInputDetails: InputType) {
        console.log(inputData, newInputDetails)
        const newId = inputData.length + 1
        const newInput = { id: newId, ...newInputDetails }
        console.log('adding item', newInput)
        setInputData([...inputData, newInput])
    }

    console.log('current inputs are: ', inputData)
    return (
        <section className='w-full flex flex-col md:flex-row items-center justify-center gap-10'>

            <AddInput addInput={addInput}/>
            <DynamicFormInputs data={inputData} />
        </section>
    )
}
