export interface Task {
    id?:number;
    name: string;
    description: string;
    projectId?: number;
    userId?: number;
}