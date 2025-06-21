import React from 'react'

type OutlineButtonPropsType = {
    buttonName: string,
    setNewInputWithVariant: (variant: string) => void,
    variant: string
}


export default function VariantButton(
    { buttonName, setNewInputWithVariant, variant }: OutlineButtonPropsType) {
    return (
        <button
            onClick={() => setNewInputWithVariant(variant)}
            className='px-3 py-2 capitalize rounded-md cursor-pointer font-medium bg-gradient-to-tl from-slate-300 to-zinc-200 border border-slate-300'>
            {buttonName}
        </button>
    )
}
