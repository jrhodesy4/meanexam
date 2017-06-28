import { Exam2AppPage } from './app.po';

describe('exam2-app App', () => {
  let page: Exam2AppPage;

  beforeEach(() => {
    page = new Exam2AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
