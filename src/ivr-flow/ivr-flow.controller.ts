import { Controller, Get, Post, Body, 
Param, Put, Delete } from "@nestjs/common";
import { IVRFlowService } from "./ivr-flow.service";
import { CreateIVRFlowDto } from "./dto/create-ivr-flow.dto";
import { updateIVRFlowDto } from "./dto/update-ivr-flow.dto";
import { timeStamp } from "console";

@Controller('ivr-flows')
export class IVRFlowController {
    constructor(private readonly ivrFlowService: IVRFlowService
    ) {}

    @Post()
    create(@Body() CreateIVRFlowDto: CreateIVRFlowDto) {
        const userId = 'user-id-from-auth';
        return this.ivrFlowService.create(CreateIVRFlowDto, userId);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.ivrFlowService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateIVRFlowDto: updateIVRFlowDto) {
        return this.ivrFlowService.update(id, updateIVRFlowDto);
    }

    @Delete('id')
    remove(@Param('id') id: string) {
        return this.ivrFlowService.remove(id);
    }

    @Post(':is/simulate')
    simulate(@Param('id') id: string) {
        return this.ivrFlowService.simulate(id)
    }
}