import { Project } from './project';
import { USERS } from '../users/mock-users';

export const PROJECTS: Project[] = [
    {
        id: 1,
        name: 'My SAAS Solution',
        description: 'Productivity App for Agricultural Projects',
        users: [USERS[1], USERS[2]]
      },
      {
        id: 2,
        name: 'My Social Network',
        description: 'Specialized micro social network for farmers',
        users: [USERS[0]]
      },
      {
        id: 3,
        name: 'MapApp',
        description: 'Location-based path finding app for use when on the road',
        users: [USERS[0]]
      },

]