import React from 'react'

type OutlineButtonPropsType = {
    buttonName: string,
    setNewActiveInput: React.Dispatch<React.SetStateAction<boolean>>
}
export default function OutlineButton({ buttonName, setNewActiveInput }: OutlineButtonPropsType) {
    return (
        <button
            onClick={ ()=>setNewActiveInput(true) }
            className='px-3 py-2 rounded-full cursor-pointer font-medium bg-gradient-to-tl from-slate-300 to-zinc-200 border border-slate-300'>
            {buttonName}
        </button>
    )
}
