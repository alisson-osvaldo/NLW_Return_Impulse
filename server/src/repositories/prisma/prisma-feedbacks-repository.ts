import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

//Contratos separados do resto da aplicação, caso futuramente queira trocar do prisma para outro, não interfere no resto do código.

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({ type, comment, screenshot } : FeedbackCreateData){
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            }
        })
    }
}