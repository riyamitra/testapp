import { TeamMembers } from "./teammembers";


export class Teams {
    id: number;
    name: string;
    description: string;
    totalTeamMember: number;
    teamMembers: Array<TeamMembers>;
}