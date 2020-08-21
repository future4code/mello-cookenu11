import { BaseDatabase } from "./BaseDatabase";

export class FollowersDatabase extends BaseDatabase {
  private static TABLE_NAME = "Followers";

  public async followUser(
    followerId: string,
    followedId: string
  ): Promise<any> {
    try {
      await this.getConnection()
        .insert({
          follower_id: followedId,
          user_id: followerId,
        })
        .where({ user_id: followerId })
        .into(FollowersDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error);
    }
  }
}
