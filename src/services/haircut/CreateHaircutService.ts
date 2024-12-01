import prisma from "../../prisma";

interface HaircutRequest {
  user_id: string;
  name: string;
  price: number;
}

class CreateHaircutService{
  async execute({ user_id, name, price }: HaircutRequest) {
    if(!name || !price) {
      throw new Error('Missing name or price');
    }

    const myHaircuts = await prisma.haircut.count({
      where: {
        user_id: user_id
      }
    })

    const user = await prisma.user.findFirst({
      where: {
        id: user_id
      },
      include: {
        subscriptions: true,
      }
    })

    if(myHaircuts >= 3 && user?.subscriptions?.status !== 'active') {
      throw new Error('You can only have 3 haircuts, please subscribe to have more');
    }

    const haircut = await prisma.haircut.create({
      data: {
        name: name,
        price: price,
        user_id: user_id
      }
    })

    return haircut;
  }
}

export { CreateHaircutService }