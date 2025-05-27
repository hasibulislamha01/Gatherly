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

interface DropDownTypes {
    value: string,
    placeholder: string
}

const dropDownOptions: DropDownTypes[] = [
    { value: 'text', placeholder: 'Text' },
    { value: 'number', placeholder: 'Number' },
    { value: 'radio', placeholder: 'Radio' },
    { value: 'password', placeholder: 'Password' },
    { value: 'email', placeholder: 'Email' },
    { value: 'checkbox', placeholder: 'Checkbox' },
]

export default function AddInput({ addInput }: AddInputProps) {

    const [addNewInput, setAddNewInput] = useState(false)
    const [selectedOption, setSelectedOption] = useState('')
    const [options, setOptions] = useState(false)

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
                    <h4 className='font-semibold'>Enter Field Details</h4>
                    <form
                        onSubmit={handleSubmit(submit)}
                        className='flex flex-col gap-4'
                    >
                        <input
                            className='py-1 px-2 rounded-lg border border-gray-300 outline-2'
                            placeholder='Enter Input Name'
                            {...register("inputName", { required: true, maxLength: 20 })}
                        />

                        <select
                            className='py-1 px-2 rounded-lg border border-gray-300 outline-2'
                            {...register('type', { required: true })}

                            onChange={(e) => { setSelectedOption(e.target.value) }}
                        >
                            {
                                dropDownOptions.map((item, index) =>

                                    <option
                                        key={index}
                                        value={item.value}>
                                        {item.placeholder}
                                    </option>
                                )
                            }
                        </select>

                        {
                            (selectedOption === 'radio' || selectedOption === 'checkbox') &&
                            <div className='flex flex-col gap-2'>
                                <label>Number of options</label>
                                <div className='flex gap-3'>
                                    <input
                                        className='py-1 px-2 rounded-lg border border-gray-300 outline-2'
                                        type="number"
                                        placeholder='Options count'
                                    />
                                    <button className='bg-slate-700 active:bg-slate-800 text-white py-1 px-3 rounded-md transition-all duration-200'>Set</button>
                                </div>
                            </div>
                        }


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
