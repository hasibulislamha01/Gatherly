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


interface DropDownTypes {
    value: string,
    placeholder: string
}

const dropDownOptions: DropDownTypes[] = [
    { value: 'text', placeholder: 'Text' },
    { value: 'number', placeholder: 'Number' },
    { value: 'radio', placeholder: 'Radio' },
    { value: 'password', placeholder: 'Password' },
    { value: 'email', placeholder: 'Email' },
    { value: 'checkbox', placeholder: 'Checkbox' },
]

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



export { data, dropDownOptions }
export type { InputField, OptionsType }