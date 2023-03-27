import { Content } from './content';
import { Notification } from './notification';

describe('Suite - Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade.'),
      category: 'social',
      recipientId: 'recipient_id',
    });

    expect(notification).toBeTruthy();
  });
});
