import React from 'react'
import { InputField } from '@/utilities/formData'

export default function DynamicFormInputs({data}: {data: InputField[]}) {
    console.log(data)
    return (
        <div>
            {
                data?.map(item =>
                    <input
                        className='py-1 px-2 rounded-lg border border-gray-300 outline-2'
                        key={item.id}
                        placeholder={`Enter ${item.inputName}`}
                    />
                )
            }
        </div>
    )
}
