import { xata } from "../db/db";
import { type UsersRecord as User } from "../db/db";
import { type UsersRecord as UserType } from "../db/db";

export async function getUsers(): Promise<User[]> {
  const users = await xata.db.users.getAll();
  return users;
}
export async function getUserById(id: string): Promise<User | null> {
  const user = await xata.db.users.read(id);
  return user;
}
export async function createUser(user: UserType): Promise<User> {   
  const newUser = await xata.db.users.create(user);
  return newUser;
}
export async function updateUser(id: string, user: Partial<UserType>): Promise<User | null> {
  const updatedUser = await xata.db.users.update(id, user);
  return updatedUser;
}
export async function deleteUser(id: string): Promise<void> {   
  await xata.db.users.delete(id);
}
export async function getUserByEmail(email: string): Promise<User | null> { 
  const user = await xata.db.users.filter({ email }).getFirst();
  return user;
}
export async function getUserByUsername(username: string): Promise<User | null> {   
  const user = await xata.db.users.filter({ username }).getFirst();
  return user;
}
export async function getUserByUsernameOrEmail(usernameOrEmail: string): Promise<User | null> { 
  const user = await xata.db.users
    .filter({ username: usernameOrEmail })
    .or({ email: usernameOrEmail })
    .getFirst();
  return user;
}
export async function getUserByIdOrEmail(idOrEmail: string): Promise<User | null> {
  const user = await xata.db.users
    .filter({ id: idOrEmail })
    .or({ email: idOrEmail })
    .getFirst();
  return user;
}