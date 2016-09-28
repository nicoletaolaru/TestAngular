import { InternshipPage } from './app.po';

describe('internship App', function() {
  let page: InternshipPage;

  beforeEach(() => {
    page = new InternshipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
