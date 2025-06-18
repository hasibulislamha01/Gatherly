
import React, { useState } from 'react'
import { IoIosAddCircleOutline, IoIosCloseCircleOutline } from "react-icons/io";


interface OptionsType {
    id: number,
    optionName: string,
    value: string
}
type OptionsHandlerPropTypes = {
    options: OptionsType[],
    setOptions: (value: React.SetStateAction<OptionsType[]>) => void
}
export default function OptionsHandler({ options, setOptions }: OptionsHandlerPropTypes) {

    const [optionsCountArr, setOptionsCountArr] = useState(['', ''])

    const addOption = () => {
        setOptionsCountArr(prevOptions => [...prevOptions, ''])
    }
    const removeOption = (index: number) => {
        console.log(index)
        setOptionsCountArr(prev => prev.filter((_, i) => i !== index))
    }

    const handleUpdateOptions = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value: string = e.target.value
        if (value === '') {
            return
        }
        const newOption: OptionsType = {
            id: index + 1,
            optionName: value,
            value: value.toLowerCase(),
        }
        if (options.find(item => item.optionName === newOption.optionName)) {
            return
        } else {
            setOptions([...options, newOption])
        }
    }


    return (
        <section>
            <div className='flex flex-col gap-2'>
                <label>Enter options</label>
                {
                    optionsCountArr.map((item, index) => {
                        return (
                            <div key={index} className='flex items-center gap-2'>
                                <input
                                    id={`${index}`}
                                    type="text"
                                    placeholder={`Option ${index + 1}
                                                `}
                                    className='py-1 px-2 rounded-lg border border-gray-300 outline-2 w-[85%]'
                                    onBlur={(e) => handleUpdateOptions(e, index)}
                                />
                                <IoIosCloseCircleOutline
                                    onClick={() => removeOption(index)}
                                    size={20} className='cursor-pointer ' />
                            </div>
                        )
                    })
                }
                <button
                    type='button'
                    onClick={addOption}
                    className='flex items-center justify-center gap-3 bg-slate-200 py-1 px-3 rounded-lg active:bg-slate-400 transition-all duration-200 hover:bg-zinc-300'>
                    <p>Add Option</p>
                    <IoIosAddCircleOutline size={20} />
                </button>
            </div>
        </section>
    )
}
