$(function() {
  /*This is the fisrt test*/
  describe('RSS Feeds', function() {
    /* It tests to make sure that the allFeeds variable
     * has been defined and that it is not empty.
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* This is a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('URLs defined', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      });
    });

    /* This is a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('name defined', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      });
    });
  });


  /* This is a test called "The menu"
   * It ensures the menu element is
   * hidden by default and a test that ensures the menu changes
   * visibility when the menu icon is clicked. This test
   * should have two expectations: does the menu display when
   * clicked and does it hide when clicked again.
   */
  describe('The menu', function() {
    it('menu hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
    it('menu toggles when clicked', function() {
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  /* This is a test suite named "Initial Entries"
   *It ensures when the loadFeed
   * function is called and completes its work, there is at least
   * a single .entry element within the .feed container.
   * loadFeed() is asynchronous so this test
   * uses Jasmine's beforeEach and asynchronous done() function.
   */

  describe('Initial Entries', function() {
    beforeEach(function(done) {
      loadFeed(0, done);
    });
  });

  it('should have an entry', function() {
    expect($('.feed').children('.entry').length).not.toBe(0);
  });
});

/* This is a test suite named "New Feed Selection"
 *It ensures when a new feed is loaded
 * by the loadFeed function that the content actually changes.
 */
describe('New Feed Selection', function() {
  var contentBefore;
  var contentAfter;


  beforeEach(function(done) {
    $('.feed').empty();
    loadFeed(0, function() {
      contentBefore = $('.feed').find("h2").first().text();

      loadFeed(1, function() {
        contentAfter = $('.feed').find("h2").first().text();
        done();
      });
    });

  });

  it('loads new content', function() {
    console.log(contentBefore);
    console.log(contentAfter);
    expect(contentAfter).not.toEqual(contentBefore);
  });
});
}());
