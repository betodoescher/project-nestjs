import { Injectable } from '@nestjs/common';
import { teamMember } from '@prisma/client';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/database/prisma.service';
import { TeamMember } from 'src/dtos/team-member';

import { TeamMemberInterface } from 'src/interfaces/team-member.interface';

@Injectable()
export class TeamMemberService implements TeamMemberInterface {
  constructor(private prisma: PrismaService) {}

  public async getAll(): Promise<teamMember[]> {
    return this.prisma.teamMember.findMany();
  }

  public async create(teamMember: TeamMember): Promise<teamMember> {
    return this.prisma.teamMember.create({
      data: { id: randomUUID(), ...teamMember },
    });
  }
}
