import { User } from '../users/user';

export interface Project {
    id: number;
    name: string;
    description: string;
    users: User[];
}