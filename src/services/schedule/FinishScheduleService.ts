import prisma from "../../prisma";

interface FinishRequest{
  schedule_id: string;
  user_id: string;
}

class FinishScheduleService{
  async execute({ schedule_id, user_id }: FinishRequest){
    if(schedule_id === "" || user_id === ""){
      throw new Error("Invalid params");
    }

    try {
      const belongsToUser = await prisma.service.findFirst({
        where: {
          id: schedule_id,
          user_id: user_id
        }
      })

      if(!belongsToUser){
        throw new Error("Not authorized");
      }

      await prisma.service.delete({
        where: {
          id: schedule_id
        }
      })

      return { message: "Schedule finished" }

    } catch (error) {
      console.log(error);
      throw new Error("Error to finish schedule");
    }
  }
}

export { FinishScheduleService }