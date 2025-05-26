import React from 'react'
import { InputField } from '@/utilities/formData'
import { useForm } from 'react-hook-form'



export default function DynamicFormInputs({ data }: { data: InputField[] }) {
    
    const { handleSubmit, register, reset, } = useForm()
    const onSubmit = (formData) => {
        console.log("submitted data: ", formData)
        reset()
        
    }
    return (
        <section className='bg-white px-12 py-10  rounded-lg shadow-lg'>
            <h4 className='font-bold text-lg mb-8'>Fill the form</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4'>

                    {
                        data?.map(item =>
                            <div key={item.id} className='flex flex-col items-start gap-1'>
                                <label className='text-sm'>Enter Your {item.inputName} here</label>
                                <input
                                    {...register(item?.inputName, {required: true})}
                                    className='py-1 px-2 rounded-lg border border-gray-300 outline-2'

                                    placeholder={`Enter ${item.inputName}`}
                                    type={item?.type}
                                />
                            </div>
                        )
                    }
                </div>
                <button
                    className='mt-6 w-full  bg-slate-800 text-white py-1 px-3 rounded-md active:bg-slate-500 transition-all duration-200'
                    type='submit'>Submit Form</button>
            </form>
        </section>
    )
}
