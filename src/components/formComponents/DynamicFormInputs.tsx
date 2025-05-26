import React from 'react'
import { InputField } from '@/utilities/formData'

export default function DynamicFormInputs({ data }: { data: InputField[] }) {
    console.log(data)
    return (
        <section className='bg-white px-12 py-10  rounded-lg shadow-lg'>
            <h4 className='font-bold text-lg mb-8'>Fill the form</h4>
            <form >
                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4'>

                    {
                        data?.map(item =>
                            <div key={item.id} className='flex flex-col items-start gap-1'>
                                <label className='text-sm'>Type Your {item.inputName} here</label>
                                <input
                                    className='py-1 px-2 rounded-lg border border-gray-300 outline-2'

                                    placeholder={`Enter ${item.inputName}`}
                                    type={item?.type}
                                />
                            </div>
                        )
                    }
                </div>
                <button 
                className='mt-6 w-full  bg-slate-800 text-white py-1 px-3 rounded-md'
                type='submit'>Submit Form</button>
            </form>
        </section>
    )
}
