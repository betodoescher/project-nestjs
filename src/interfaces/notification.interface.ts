import { notifications } from '@prisma/client';
import { CreateNotification } from 'src/validators/create-notification';

export abstract class NotificationInterface {
  abstract getAll(): Promise<any[]>;
  abstract create(notification: CreateNotification): Promise<notifications>;
  abstract update(
    id: string,
    notification: CreateNotification,
  ): Promise<notifications>;
  abstract delete(id: string): Promise<notifications>;
  abstract getOne(id: string): Promise<notifications>;
}
