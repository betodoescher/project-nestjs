import { Module } from '@nestjs/common';
import { NotificationController } from './controllers/notification.controller';

import { PrismaService } from './database/prisma.service';
import { NotificationService } from './services/notification.service';
import { CreateNotification } from './validators/create-notification';

@Module({
  imports: [],
  controllers: [NotificationController],
  providers: [PrismaService, NotificationService, CreateNotification],
})
export class AppModule {}
