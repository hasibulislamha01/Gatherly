import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

type NewActiveInputProps = {
    variant: string,
    setNewActiveInput: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DynamicForm({ variant, setNewActiveInput }: NewActiveInputProps) {
    return (
        <section>
            <h3>Form title</h3>
            {
                variant === 'text' &&
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
            {
                variant === 'radio' || variant === 'checkbox' &&
                <div>
                    <input type={variant} name='radio' value={variant} /> one
                    <input type={variant} name='radio' value={variant} /> two
                </div>


            }
        </section >
    )
}
