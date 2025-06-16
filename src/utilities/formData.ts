interface OptionsType {
    id: number,
    optionName: string,
    value: string
}

type InputField = {
    readonly id: number;
    inputName: string;
    type: string;
    options?: OptionsType[]
}




const data: InputField[] = [
    {
        id: 1,
        inputName: 'name',
        type: 'text',
    },
    {
        id: 2,
        inputName: 'email',
        type: 'email',
    },
    {
        id: 3,
        inputName: 'Address',
        type: 'text',
    },
]



export { data }
export type { InputField }