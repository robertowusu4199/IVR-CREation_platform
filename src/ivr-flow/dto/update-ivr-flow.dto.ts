import { PartialType } from '@nestjs/mapped-types';
import { CreateIVRFlowDto } from './create-ivr-flow.dto';

export class updateIVRFlowDto extends 
PartialType(CreateIVRFlowDto) {}