import { combine, createEffect, createEvent, createStore, restore } from 'effector';

import { User } from '../../types/users';

export const $users = createStore<User[]>([]);

export const update = createEvent<User>();

export const getUsersFx = createEffect<void, User[], Error>();

// eslint-disable-next-line unicorn/no-null
export const $fetchError = restore<Error>(getUsersFx.failData, null);

export const $usersGetStatus = combine({
    loading: getUsersFx.pending,
    error: $fetchError,
    data: $users,
});
