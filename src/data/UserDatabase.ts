import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME: string = "CookenuUsers";

  public async createUser(
    id: string,
    name: string,
    email: string,
    password: string
  ): Promise<any> {
    try {
      if (password.length > 6) {
        await this.getConnection()
          .insert({
            id,
            name,
            email,
            password,
          })
          .into(UserDatabase.TABLE_NAME);
          console.log("sucesso na criação")
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
