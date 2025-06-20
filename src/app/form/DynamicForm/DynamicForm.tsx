import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

type NewActiveInputProps = {
    newActiveInput: boolean,
    setNewActiveInput: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DynamicForm({ newActiveInput, setNewActiveInput }: NewActiveInputProps) {
    return (
        <section>
            <h3>Form title</h3>
            {
                newActiveInput &&
                <div className='flex items-center gap-2'>
                    <input
                        placeholder='input'
                        type='text'
                    />
                    <AiOutlineDelete
                        onClick={() => setNewActiveInput(false)}
                        className='cursor-pointer
                    '/>
                </div>
            }
        </section>
    )
}
