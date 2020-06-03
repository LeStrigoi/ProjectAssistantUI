import { User } from '../users/user';

export interface Project {
    id?: string;
    name: string;
    description: string;
    users?: User[];
}