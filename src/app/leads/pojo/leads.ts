import { SalesContactPersons } from "./salesContactPersons";
import { AllocationLead } from "./allocationLead";

export class Leads {
    id: number;
    pipelineName: string;
    company: string;
    salesContactPersons: Array<SalesContactPersons>;
    allocationLead: AllocationLead;
}