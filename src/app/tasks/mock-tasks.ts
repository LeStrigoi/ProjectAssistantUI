import { Task } from './Task';
import { PROJECTS } from '../projects/mock-projects';
import { USERS } from '../users/mock-users';

export const TASKS: Task[] = [
    {
        id: 1,
        name: 'Implement DB',
        description: 'DB Schema, table structure etc',
        project: PROJECTS[1],
        assigned_user: USERS[1]
      },
      {
        id: 2,
        name: 'Frontend architecture',
        description: 'Implement a DRY way of doing things',
        project: PROJECTS[1],
        assigned_user: USERS[2]
      },
      {
        id: 3,
        name: 'RESTful API',
        description: 'Make the magic happen',
        project: PROJECTS[2],
        assigned_user: USERS[1]
      },

]