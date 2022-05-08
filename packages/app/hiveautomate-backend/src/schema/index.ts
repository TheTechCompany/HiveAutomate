import { PrismaClient } from "@prisma/client";
import { nanoid } from 'nanoid'

export default (prisma: PrismaClient) => {

    const typeDefs = `
        type Query {
            automations(where: AutomationWhere): [Automation]
            automationTasks: [AutomationTask]
            automationTriggers: [AutomationTrigger]
        }

        type Mutation {
            createAutomation(input: AutomationInput): Automation
            updateAutomation(id: ID, input: AutomationInput): Automation
            deleteAutomation(id: ID): Automation
        }

        input AutomationWhere {
            id: ID
        }

        input AutomationInput{
            name: String
        }

        type Automation {
            id: ID
            name: String

            nodes: [AutomationNode]
            edges: [AutomationEdge]

            createdAt: DateTime
        }

        type AutomationNode {
            id: ID

            outputs: [AutomationEdge]
            inputs: [AutomationEdge]
        }

        type AutomationEdge {
            id: ID
            from: AutomationNode
            to: AutomationNode
        }

        type AutomationTask {
            id: ID
            name: String
        }

        type AutomationTrigger {
            id: ID
            name: String
        }
    `;

    const resolvers = {
        Query: {
            automations:async (root: any, args: any, context: any) => {
                let where : any = {};
                if(args.where?.id){
                    where.id = args.where.id;
                }
                return await prisma.workflow.findMany({
                    where: {
                        ...where,
                        organisation: context?.jwt?.organisation
                    }
                })
            },
            automationTasks:async (root: any, args: any, context: any) => {
                return await prisma.task.findMany({where: {organisation: context?.jwt?.organisation}})
            },
            automationTriggers: async (root: any, args: any, context: any) => {
                return []
            }
        },
        Mutation: {
            createAutomation:async (root: any, args: any, context: any) => {
                return await prisma.workflow.create({
                    data: {
                        id: nanoid(),
                        name: args.input.name,
                        organisation: context?.jwt?.organisation
                    }
                })
            },
            updateAutomation: async (root: any, args: any, context: any) => {
                return await prisma.workflow.update({
                    where: {id: args.id},
                    data: {
                        name: args.input.name
                    }
                })
            },
            deleteAutomation: async (root: any, args: any, context: any) => {
                return await prisma.workflow.delete({where: {id: args.id}})
            } 
        }
    };

    return {
        typeDefs,
        resolvers
    }
}