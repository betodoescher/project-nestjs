import { Body, Controller, Get, Post } from '@nestjs/common';
import { teamMember } from '@prisma/client';
import { TeamMember } from './dtos/team-member';
import { TeamMemberService } from './services/team-member.service';

@Controller('team-member')
export class TeamMemberController {
  constructor(private teamMemberService: TeamMemberService) {}

  @Get()
  async getAll(): Promise<any> {
    return this.teamMemberService.getAll();
  }

  @Post()
  async create(@Body() body: TeamMember): Promise<teamMember> {
    return this.teamMemberService.create(body);
  }
}
