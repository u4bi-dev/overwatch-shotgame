import { OverwatchShotgamePage } from './app.po';

describe('overwatch-shotgame App', function() {
  let page: OverwatchShotgamePage;

  beforeEach(() => {
    page = new OverwatchShotgamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
