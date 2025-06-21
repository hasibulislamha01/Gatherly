import React from 'react'
import { MdAlternateEmail, MdPassword } from "react-icons/md";
import { IoCheckboxOutline } from "react-icons/io5";
import { IoMdRadioButtonOn } from "react-icons/io";
import { TbNumbers } from 'react-icons/tb';
import { BsAlphabetUppercase } from 'react-icons/bs';

const fieldTypeSelectorData = [
    {
        id: 1,
        placeholder: 'Text',
        icon: <BsAlphabetUppercase size={20}/>,
        value: 'text'
    },
    {
        id: 2,
        placeholder: 'Number',
        icon: <TbNumbers  size={20}/>,
        value: 'number'
    },
    {
        id: 3,
        placeholder: 'Email',
        icon: <MdAlternateEmail  size={20}/>,
        value: 'email'
    },
    {
        id: 4,
        placeholder: 'Password',
        icon: <MdPassword  size={20}/>,
        value: 'password'
    },
    {
        id: 5,
        placeholder: 'Radio',
        icon: <IoMdRadioButtonOn  size={20}/>,
        value: 'radio'
    },
    {
        id: 6,
        placeholder: 'Checkbox',
        icon: <IoCheckboxOutline  size={20}/>,
        value: 'checkbox'
    },
]

export default function FieldTypeSelector() {
    return (
        <section className='grid grid-cols-3 gap-3'>
            {
                fieldTypeSelectorData.map(fieldType =>
                    <button
                        key={fieldType.id}
                        className='px-2 py-2 flex flex-col items-center gap-1 bg-slate-300 rounded-md'>
                        {fieldType.icon}
                        <p className='text-[0.65rem] font-medium uppercase'>{fieldType.placeholder}</p>
                    </button>

                )
            }
        </section>
    )
}
