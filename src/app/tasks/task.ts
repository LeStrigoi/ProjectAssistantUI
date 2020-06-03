import { Project } from '../projects/project';
import { User } from '../users/user';

export interface Task {
    id: number;
    name: string;
    description: string;
    project: Project;
    assigned_user: User;
}