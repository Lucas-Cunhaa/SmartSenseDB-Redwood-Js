import { db } from "src/lib/db";

export class UsersDB {
   static async getUserByPublicId(publicId : string) {
        const user = await db.user.findFirst({where: {publicId : publicId} })

        return user;
   }

   static async getUserByEmail(email: string) {
    const user = await db.user.findFirst({where: {email : email} })

    return user;
   }

   static async createUser(us) {
    const user = await db.user.findFirst({where: {email : email} })

    return user;
   }
}

export default UsersDB