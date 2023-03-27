import { Injectable } from '@nestjs/common';
import { notifications } from '@prisma/client';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/database/prisma.service';
import { CreateNotification } from 'src/validators/create-notification';
import { NotificationInterface } from 'src/interfaces/notification.interface';

@Injectable()
export class NotificationService implements NotificationInterface {
  constructor(private prisma: PrismaService) {}

  public async getAll(): Promise<notifications[]> {
    return this.prisma.notifications.findMany();
  }

  public async create(
    notification: CreateNotification,
  ): Promise<notifications> {
    return this.prisma.notifications.create({
      data: { id: randomUUID(), ...notification },
    });
  }

  update(id: string, notification: CreateNotification): Promise<notifications> {
    return this.prisma.notifications.update({
      where: { id },
      data: notification,
    });
  }
  delete(id: string): Promise<notifications> {
    return this.prisma.notifications.delete({
      where: { id },
    });
  }
  getOne(id: string): Promise<notifications> {
    return this.prisma.notifications.findUnique({ where: { id } });
  }
}
