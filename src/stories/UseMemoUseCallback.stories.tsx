import type {Meta, StoryObj} from '@storybook/react';
import React, {useCallback, useMemo, useState} from 'react';


const meta = {
    title: 'UseMemo',
    // component: Example1

} as Meta;

export default meta;


type Story = StoryObj<typeof meta>;

export const DifficultCounting = () => {

    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            resultA *= i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return (
        <div>
            <input value={a} onChange={(e) => {
                setA(Number(e.currentTarget.value))
            }}/>
            <input value={b} onChange={(e) => {
                setB(Number(e.currentTarget.value))
            }}/>
            <hr/>
            <div>
                Result for A:{resultA}
            </div>
            <div>
                Result for B:{resultB}
            </div>


        </div>
    )
};

export const Example1: Story = {
    render: () => (
        <DifficultCounting/>
    ),
};


export const Users = React.memo((props: { users: Array<string> }) => {
    console.log('Users')
    return (
        <div>
            {props.users.map((u, i) => {
                return (
                    <div key={i}>
                        {u}
                    </div>
                );
            })}
        </div>
    )
});


export const HelpForReactMemo = () => {

        const [counter, setCounter] = useState(0)
        const [users, setUsers] = useState(['Dima', 'Artem', 'Valera'])

        const newArray = useMemo(() => {
            return users.filter(u => u.toLowerCase().indexOf('i') > -1)
        }, [users])

        return (
            <div>
                <button onClick={() => {
                    setCounter(counter + 1)
                }}>+
                </button>
                {counter}
                <Users users={newArray}/>
            </div>
        )
    }
;

export const Example2: Story = {
    render: () => (
        <HelpForReactMemo/>
    ),
};

export const Books = React.memo((props: { addBook: () => void }) => {
    console.log('Books')
    return (
        <div>
                <button onClick={()=> props.addBook()}>add book</button>
        </div>
    )
});

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
        const [counter, setCounter] = useState(0)
        const [books, setBooks] = useState(['React', 'JS', 'HTML'])


        // const newArray = useMemo(()=>{
        //     const newBooks = books.filter(b=> b.toLowerCase().indexOf('a') > -1)
        //     return newBooks
        // },[books])

        const addBook = useCallback(() =>  {
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)

        }, [books])

        // const memoizedAddBook = useMemo(() => {
        //    return () => {
        //     const newBooks = [...books, 'Angular' + new Date().getTime()]
        //     setBooks(newBooks)
        //
        //    }}, [books])

        // books={newArray}
        return (
            <div>
                <button onClick={() => {
                    setCounter(counter + 1)
                }}>+
                </button>
                {counter}
                <Books addBook={addBook}/>
            </div>
        )
    }
;


export const Example3: Story = {
    render: () => (
        <LikeUseCallback/>
    ),
};
