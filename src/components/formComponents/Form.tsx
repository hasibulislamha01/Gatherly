"use client"
import React, { useState } from 'react'
import { data } from '@/utilities/formData'
import { InputField } from '@/utilities/formData'
import AddInput from './AddInput'
import DynamicFormInputs from './DynamicFormInputs'

export default function Form() {
    const [inputData, setInputData] = useState<InputField[]>(data)
    console.log(inputData)
    return (
        <section className=''>

            Form
            <DynamicFormInputs data={data} />
        </section>
    )
}
