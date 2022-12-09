import { Module } from '@nestjs/common';
import { TeamMemberController } from './team-member.controller';
import { PrismaService } from './database/prisma.service';
import { TeamMemberService } from './services/team-member.service';
import { TeamMember } from './dtos/team-member';

@Module({
  imports: [],
  controllers: [TeamMemberController],
  providers: [PrismaService, TeamMemberService, TeamMember],
})
export class AppModule {}
