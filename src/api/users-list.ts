import { User } from 'types/users';

import { API } from './config';

export const getUsers = async (): Promise<User[]> => {
    const response = await API.get('/users/');
    return response.data;
};
