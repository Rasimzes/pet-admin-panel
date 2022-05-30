import { useStore } from 'effector-react';
import { useEffect } from 'react';

import { $users, getUsersFx } from './models/users';

function App() {
    const users = useStore($users);

    useEffect(() => {
        getUsersFx();
    }, []);

    console.log(users);

    return (
        <div className='App'>
            <h1>hello</h1>
        </div>
    );
}

export default App;
