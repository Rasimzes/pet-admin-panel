import { getUsers } from 'api/users-list';

import { $users, getUsersFx } from './index';

getUsersFx.use(getUsers);

$users.on(getUsersFx.doneData, (_, data) => data);
