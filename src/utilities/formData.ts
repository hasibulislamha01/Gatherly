type InputField = {
    readonly id: number;
    inputName: string;
    type: string;
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