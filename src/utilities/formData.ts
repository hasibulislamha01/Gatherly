type InputField = {
    readonly id: number;
    inputName: string;
    type: string;
}

interface InputType {
    inputName: string,
    type: string,
}



const data: InputField[] = [
    {
        id: 1,
        inputName: 'Your Name',
        type: 'text',
    },
    {
        id: 2,
        inputName: 'Email',
        type: 'text',
    },
    {
        id: 3,
        inputName: 'Address',
        type: 'text',
    },
]

function addInput(inputDetails: InputType) {
    const newId = data.length + 1
    const newInput = {id: newId, ...inputDetails }
    console.log('adding item', newInput)
    data?.push(newInput)
}

export  {data, addInput}
export type {InputField}