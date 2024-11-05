interface Subject {
    id: number,
    name: string | null
}

interface MyInterface {
    id: number,
    name: string | null,
    subject: Subject
}

const students: MyInterface[] = [
    {
        id: 1,
        name: 'test',
        subject: {
            id: 1,
            name: 'toan',

        }
    },
    {
        id: 2,
        name: undefined,
        subject: {
            id: 1,
            name: 'toan'
        }
    }
]

console.log(students)