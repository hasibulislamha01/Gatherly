import React from 'react'
import { InputField } from '@/utilities/formData'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IoIosCloseCircleOutline } from 'react-icons/io';

type FormValues = {
    [key: string]: string;
}

type DynamicFormInputsProps = {
    data: InputField[];
    handleDeleteField: (id: number) => void; // ← Add the function type here
};


export default function DynamicFormInputs({ data, handleDeleteField }: DynamicFormInputsProps) {

    const { handleSubmit, register, reset } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (formData: FormValues) => {
        console.log("submitted data: ", formData)
        reset()

    }

    console.log('form data are : ',data)
    return (
        <section className='bg-white px-12 py-10  rounded-lg shadow-lg'>
            <h4 className='font-bold text-lg mb-8'>Fill the form</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4'>

                    {
                        data?.map(item =>
                            <div key={item.id} className='relative group flex flex-col items-start gap-1'>
                                <label className='text-sm'>Enter Your {item.inputName} here</label>
                                {
                                    item.type === 'radio' || item.type === 'checkbox' ?
                                        <section className='w-full flex items-center gap-4 flex-wrap'>
                                            {item.options?.map(option =>
                                                <div key={option.id} className='flex items-center gap-1'>
                                                    <input type={item.type} name={item.inputName} /> <span>{option.value}</span>
                                                </div>
                                            )}
                                            <IoIosCloseCircleOutline size={20} className='opacity-0 group-hover:opacity-90 cursor-pointer absolute top-[30%] right-[3%]'
                                                onClick={() => handleDeleteField(item.id)}
                                            />
                                        </section>
                                        :
                                        <div className='relative group'>
                                            <input
                                                {...register(item?.inputName, { required: true })}
                                                className='py-1 px-2 rounded-lg border border-gray-300 outline-2'

                                                placeholder={`Enter ${item.inputName}`}
                                                type={item?.type}
                                            />
                                            <IoIosCloseCircleOutline size={20} className='opacity-0 group-hover:opacity-90 cursor-pointer absolute top-[20%] right-[3%]'
                                                onClick={() => handleDeleteField(item.id)}
                                            />
                                        </div>
                                }

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
