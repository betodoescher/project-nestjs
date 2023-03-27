import { SendNotificationService } from './send-notification';

describe('Suite - Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotificationService();

    const { notification } = await sendNotification.execute({
      recipientId: 'recipient_id',
      category: 'social',
      content: 'This is a notification',
    });

    expect(notification).toBeTruthy();
  });
});
