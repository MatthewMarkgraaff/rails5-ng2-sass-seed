import { Ng2Rails5SassPage } from './app.po';

describe('ng2-rails5-sass App', function() {
  let page: Ng2Rails5SassPage;

  beforeEach(() => {
    page = new Ng2Rails5SassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
