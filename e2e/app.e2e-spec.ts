import { RidingCatsPage } from './app.po';

describe('riding-cats App', function() {
  let page: RidingCatsPage;

  beforeEach(() => {
    page = new RidingCatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
