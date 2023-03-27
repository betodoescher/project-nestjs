import { Content } from './content';

describe('Suite - Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less then 5 caracters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be able to create a notification content with more then 240 caracters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
