import prisma from "../../prisma";

interface CountRequest{
  user_id: string;
}

class CountHaircutsService{
  async execute({ user_id }: CountRequest) {
    const count = await prisma.haircut.count({
      where: {
        user_id: user_id
      }
    });

    return count;
  }
}

export { CountHaircutsService };