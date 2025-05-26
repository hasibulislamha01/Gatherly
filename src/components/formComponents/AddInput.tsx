"use client"
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'


interface InputType {
    inputName: string,
    type: string,
}

interface AddInputProps {
    addInput: (newInputdata: InputType) => void;
}

export default function AddInput({ addInput }: AddInputProps) {

    const [addNewInput, setAddNewInput] = useState(false)

    const { handleSubmit, register, reset } = useForm<InputType>()
    const submit: SubmitHandler<InputType> = (newInputdata) => {
        addInput(newInputdata)
        reset()
    }
    return (
        <section className='space-y-4'>
            <button 
            className='w-full mt-3 bg-slate-600 hover:bg-slate-700 active:bg-slate-800 text-white py-1 px-3 rounded-md transition-all duration-200'
            onClick={() => setAddNewInput(true)}
            >Add Input</button>
            {
                addNewInput &&
                < div className='bg-white space-y-4 py-12 px-10 rounded-lg shadow-lg'>
                    <h4>Enter Field Details</h4>
                    <form
                        onSubmit={handleSubmit(submit)}
                        className='flex flex-col gap-4'
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
                            <option value="radio">Bullet Point</option>
                            <option value="password">password</option>
                            <option value="checkbox">checkbox</option>
                        </select>


                        <button
                            className='bg-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300 py-1 px-3 rounded-md' type='submit'>Submit</button>
                    </form>
                    <button
                        className='w-full mt-3 bg-red-600 text-white py-1 px-3 rounded-md'
                        onClick={() => { setAddNewInput(false) }}>Cancel</button>
                </div>

            }
        </section>
    )
}
