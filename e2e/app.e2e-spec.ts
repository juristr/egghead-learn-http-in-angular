import { LearnHttpInAngularPage } from './app.po';

describe('learn-http-in-angular App', () => {
  let page: LearnHttpInAngularPage;

  beforeEach(() => {
    page = new LearnHttpInAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
