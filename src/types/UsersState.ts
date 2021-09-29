import { IUser } from "./User";

export interface IUsersState {
    users: Array<IUser>;
    currentUser: IUser
}