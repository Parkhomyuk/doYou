import { DoYouPage } from './app.po';

describe('do-you App', () => {
  let page: DoYouPage;

  beforeEach(() => {
    page = new DoYouPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
