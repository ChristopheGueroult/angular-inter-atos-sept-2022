import { StateUser } from '../enums/state-user';

export class User {
  id!: number;
  email!: string;
  firstname!: string;
  lastname!: string;
  grants = StateUser.USER;
  password?: string;
  constructor(obj?: Partial<User>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
