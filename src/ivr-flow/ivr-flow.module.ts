import { Module } from "@nestjs/common";
import { IVRFlowService } from "./ivr-flow.service";
import { IVRFlowController} from "./ivr-flow.controller"
import { PrismaService } from "src/prisma/prisma.service";

@Module({
    controllers: [IVRFlowController],
    providers: [IVRFlowService, PrismaService],
})

export class IVRFlowModule {}