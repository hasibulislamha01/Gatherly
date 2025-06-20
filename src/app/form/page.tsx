"use client"
import OutlineButton from '@/components/ui/OutlineButton'
import React, { useState } from 'react'
import DynamicForm from './DynamicForm/DynamicForm'
import FieldCustomization from './FieldCustomization/FieldCustomization'

export default function Page() {

    const [newActiveInput, setNewActiveInput] = useState(false)
    return (
        <section className='my-12 flex gap-20'>

            
            <div className='flex flex-col gap-10'>
                <OutlineButton
                    buttonName='hellow world'
                    setNewActiveInput={setNewActiveInput}
                />
                { newActiveInput && <FieldCustomization />}
            </div>

            <DynamicForm
                newActiveInput={newActiveInput}
                setNewActiveInput={setNewActiveInput}
            />
        </section>
    )
}
