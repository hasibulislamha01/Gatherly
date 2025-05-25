"use client"
import { Button } from 'antd'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { addInput } from '@/utilities/formData'

export default function AddInput({data}) {
    const [addNewInput, setAddNewInput] = useState(false)

    interface InputType {
        inputName: string,
        type: string,
    }

    const { control, handleSubmit, register } = useForm<InputType>()
    const submit: SubmitHandler<InputType> = (data) => {
        addInput(data)
    }
    return (
        <section>
            <Button type="primary" onClick={() => setAddNewInput(true)}>Add Input</Button>
            {
                addNewInput &&
                <>
                    <form
                        onSubmit={handleSubmit(submit)}
                        className='flex flex-col gap-2'
                    >
                        <input
                            className='py-1 px-2 rounded-lg border border-gray-300 outline-2'
                            placeholder='Enter Input Name'
                            {...register("inputName", { required: true, maxLength: 20 })} />

                        <select
                            className='py-1 px-2 rounded-lg border border-gray-300 outline-2'
                            {...register('type', { required: true })}
                        >
                            <option value="text">Text</option>
                            <option value="number">Number</option>
                            <option value="bullet">Bullet Point</option>
                        </select>


                        <button
                            className='bg-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300 py-1 px-3 rounded-md' type='submit'>Submit</button>
                    </form>
                    <button
                        className='w-full mt-3 bg-red-600 text-white py-1 px-3 rounded-md'
                        onClick={() => { setAddNewInput(false) }}>Cancel</button>
                </>

            }
        </section>
    )
}
