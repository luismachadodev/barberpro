import prisma from "../../prisma";
import Stripe from "stripe";

interface CreatePortalRequest{
  user_id: string;
}

class CreatePortalService {
  async execute({ user_id }: CreatePortalRequest) {
    const stripe = new Stripe(
      process.env.STRIPE_API_KEY,
      {
        apiVersion: '2020-08-27',
        appInfo: {
          name: 'barberpro',
          version: '1'
        }
      }
    )

    const findUser = await prisma.user.findFirst({
      where: {
        id: user_id
      }
    })

    let sessionId = findUser.stripe_customer_id;
    if (!sessionId) {
      return { message: 'User not found' }
    }

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: sessionId,
      return_url: process.env.STRIPE_SUCCESS_URL,
    })

    return { sessionId: portalSession.url }

  }
}

export { CreatePortalService };