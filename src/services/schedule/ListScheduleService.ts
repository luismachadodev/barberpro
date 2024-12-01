import prisma from "../../prisma";

interface ListScheduleRequest{
  user_id: string;
}

class ListScheduleService {
  async execute({ user_id }: ListScheduleRequest){
    const schedules = await prisma.service.findMany({
      where: {
        user_id
      },
      select: {
        id: true,
        customer: true,
        haircut: true
      }
    });

    return schedules;
    
  }
}

export { ListScheduleService };