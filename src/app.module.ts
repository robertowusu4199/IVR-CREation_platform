import { Module } from "@nestjs/common";
import { IVRFlowModule } from "./ivr-flow/ivr-flow.module";
import { PrismaService } from "./prisma/prisma.service";
import { AuthModule } from "./auth/auth.module";

@Module({
    imports: [IVRFlowModule, AuthModule],
    providers: [PrismaService],
})

export class AppModule {}