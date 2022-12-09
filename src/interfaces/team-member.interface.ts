import { teamMember } from '@prisma/client';

import { TeamMember } from 'src/dtos/team-member';

export abstract class TeamMemberInterface {
  abstract getAll(): Promise<teamMember[]>;
  abstract create(teamMember: TeamMember): Promise<teamMember>;
}
