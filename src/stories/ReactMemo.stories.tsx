import type {Meta, StoryObj} from '@storybook/react';
import React, {useState} from 'react';


const meta = {
    title: 'ReactMemo',
    // component: Example1

} as Meta;

export default meta;


type Story = StoryObj<typeof meta>;

export const NewMessagesCounter = (props: { count: number }) => {

    return (
        <div>
            {props.count}
        </div>
    )
};

export const UsersSecret = (props: { users: Array<string> }) => {
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
};

const Users = React.memo(UsersSecret)

export const UsersAndCounter = () => {

        const [counter, setCounter] = useState(0)
        const [users, setUsers] = useState(['Dima', 'Artem', 'Valera'])

        const addUser = () => {
            const newUsers = [...users, 'Sveta' + new Date().getTime()]
            setUsers(newUsers)
        }

        return (
            <div>
                <button onClick={() => {setCounter(counter + 1)}}>+</button>
                <button onClick={addUser}>add user</button>
                <NewMessagesCounter count={counter}/>
                <Users users={users}/>
            </div>
        )
    }
;

export const Example: Story = {
    render: () => (
        <UsersAndCounter/>
    ),
};
