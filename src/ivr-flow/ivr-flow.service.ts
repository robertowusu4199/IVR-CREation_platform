import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from '../prisma/prisma.service';
import { CreateIVRFlowDto } from "./dto/create-ivr-flow.dto";
import { updateIVRFlowDto } from "./dto/update-ivr-flow.dto";

@Injectable()
export class IVRFlowService {
    constructor(private prisma: PrismaService) {}

    async create(CreateIVRFlowDto: CreateIVRFlowDto, userId: string) {
        return 
        this.prisma.iVRFlow.create({
            data: { name: CreateIVRFlowDto.flowName,
                steps: CreateIVRFlowDto.steps,
                userId: userId
            }
        })
    }

    async findOne(id: string) {
        const flow = await
        this.prisma.iVRFlow.findUnique({
            where: { id }
        })
        if (!flow) throw new NotFoundException('IVR Flow not found');
        return flow;
    }

    async update(id: string, 
        updateIVRFlowDto: updateIVRFlowDto
    ) {
        return this.prisma.iVRFlow.update({
            where: { id },
            data: { ...updateIVRFlowDto},
        })
    }

    async remove(id: string) {
        return this.prisma.iVRFlow.delete({ where: { id} })
    }

    async simulate(id: string) {
        const flow = await this.findOne(id);
        return flow.steps.map((step, index) => `Step ${index + 1}: ${JSON.stringify(step)}`)
    }
}