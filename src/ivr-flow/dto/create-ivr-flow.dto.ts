export class CreateIVRFlowDto {
    flowName: string;
    steps: Array<{type: string;
        [key: string]: any
    }>;
}