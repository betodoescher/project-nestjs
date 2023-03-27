import { Content } from '../../entities/notification/content';
import { Notification } from '../../entities/notification/notification';

export interface SendNotificationInput {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationOutput {
  notification: Notification;
}

export class SendNotificationService {
  async execute(input: SendNotificationInput): Promise<SendNotificationOutput> {
    const { recipientId, content, category } = input;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    return { notification };
  }
}
