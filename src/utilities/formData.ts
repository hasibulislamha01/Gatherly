type InputField = {
    readonly id: number;
    inputName: string;
    type: string;
}




const data: InputField[] = [
    {
        id: 1,
        inputName: 'Name',
        type: 'text',
    },
    {
        id: 2,
        inputName: 'Email',
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