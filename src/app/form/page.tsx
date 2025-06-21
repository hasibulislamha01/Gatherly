"use client"
import VariantButton from '@/components/ui/VariantButton'
import React, { useState } from 'react'
import DynamicForm from './DynamicForm/DynamicForm'
import FieldCustomization from './FieldCustomization/FieldCustomization'

interface Field {
    readonly id: number,
    name: string,
    placeholder: string,
    label: string,
    type: string,
}

const inputVariants = [
    { id: 1, type: 'Basic Input', value: 'text' },
    { id: 2, type: 'Radio', value: 'radio'},
    { id: 3, type: 'Checkbox', value: 'checkbox' },
]

export default function Page() {

    const [newActiveInput, setNewActiveInput] = useState(false)
    const [variant, setVariant] = useState('')
    const [fields, setFields] = useState()

    const setNewInputWithVariant = (selectedVariant: string) => {
        console.log(selectedVariant)
        setVariant(selectedVariant)
        setNewActiveInput(true)
    }
    return (
        <section className='my-12 flex gap-20'>


            <div className='flex flex-col gap-10'>
                <div className='grid grid-cols-3 gap-2'>
                    {
                        inputVariants.map(variant =>
                            <VariantButton
                                key={variant.id}
                                buttonName={variant.type}
                                setNewInputWithVariant={setNewInputWithVariant}
                                variant={variant.value}
                            />
                        )
                    }
                </div>
                {newActiveInput && <FieldCustomization />}
            </div>

            <DynamicForm
                variant={variant}
                setNewActiveInput={setNewActiveInput}
            />
        </section>
    )
}
