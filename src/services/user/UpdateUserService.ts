import prisma from "../../prisma";

interface UserRequest{
  user_id: string;
  name: string;
  endereco: string;
}

class UpdateUserService {
  async execute({ user_id, name, endereco }: UserRequest) {

    try {
      const userAlreadyExists = await prisma.user.findFirst({
        where: {
          id: user_id
        }
      })

      if (!userAlreadyExists) {
        throw new Error("User not found");
      }

      const userUpdated = await prisma.user.update({
        where: {
          id: user_id
        },
        data: {
          name,
          endereco
        },
        select: {
          name: true,
          email: true,
          endereco: true
        }
      })

      return userUpdated;

    } catch (error) {
      throw new Error("Error an update user");
    }
  }
}

export { UpdateUserService };