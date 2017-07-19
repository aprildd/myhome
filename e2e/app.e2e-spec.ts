import { MyHomePage } from './app.po';

describe('my-home App', () => {
  let page: MyHomePage;

  beforeEach(() => {
    page = new MyHomePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
