import prisma from "../../prisma";

interface NewScheduleRequest{
  user_id: string;
  haircut_id: string;
  customer: string;
}

class NewScheduleService{
  async execute({ user_id, haircut_id, customer }: NewScheduleRequest){

    if(customer === "" || haircut_id === ""){
      throw new Error("Error schedule new service.");
    }

    const schedule = await prisma.service.create({
      data: {
        user_id,
        haircut_id,
        customer
      }
    });

    return schedule;
  }
}

export { NewScheduleService }