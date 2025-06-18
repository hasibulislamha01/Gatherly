import React from 'react'

type OutlineButtonPropsType = {
    buttonName: string
}
export default function OutlineButton({ buttonName }: OutlineButtonPropsType) {
    return (
        <button className='px-3 py-2 border border-black rounded-full cursor-pointer font-medium'>
            {buttonName}
        </button>
    )
}
