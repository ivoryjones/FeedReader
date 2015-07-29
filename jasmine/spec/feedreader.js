$(function() {
    /* This is our first test suite. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        //This is the second test that ensures the feed has a URL defined and that it is not empty
        it('has a URL defined', function() {
            //define (feed)
            allFeeds.forEach(function(feed){
                //runs the test that the URL is defined
                expect(feed.url).toBeDefined();
            });
        });
        it('URL is not empty', function() {
            //define feed
            allFeeds.forEach(function(feed){
                //makes sure the URL is not empty
                expect(feed.url.length).not.toBe(0);
            });
        });
        //test that loops through each feed has a name defined and that the name is not empty
        it('has a name defined', function() {
            allFeeds.forEach(function(feed){
                //runs the test that the name is defined
                expect(feed.name).toBeDefined();
            });
        });
        it('name is not empty', function() {
            allFeeds.forEach(function(feed){
                //runs the test that the name is not empty
                expect(feed.name.length).not.toBe(0);
            });
        });
    });
    /* This is the third test suite for The Menu */
    describe('The Menu', function() {
        //this test ensures the menu element is hidden by default
        it('is hidden by default', function(){
            //define body
            var body = $('body');
            //runs the test to show the menu is hidden by default
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
         //test that ensures the menu changes are visible when the menu icon is clicked
        it('changes visibility when the menu icon is clicked', function(){
            var icon = $('.menu-icon-link');
            var body = $('body');
                icon.click();
                    //test that the menu display after icon is clicked
                    expect(body.hasClass('menu-hidden')).toBe(false);
                icon.click();
                    //test that the menu is hidden when icon is clicked again
                    expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });
    //This is the fourth test suite named "Initial Entries"
    describe('Initial Entries', function(){
        //includes Jasmine's beforeEach and asynchronous done() because the loadFeed() is asynchronous
        beforeEach(function(done){
            loadFeed(0, done);
        });
        //test that there is an entry in the .feed container
        it('there is at least a single feed entry', function(done){
            //define entry
            var entry = $('.feed a').children('.entry');
                expect(entry.length).toBeGreaterThan(0);
                    done();
        });
    });
    //This is a fifth test suite named "New Feed Selection"
    describe('New Feed Selection', function(){
        var priorEntry;
        //added Jasmine's beforeEach and done() because loadFeed() is asyncronous
        beforeEach(function(done){
            loadFeed(0, function(){
                priorEntry = $('.feed').html();
                loadFeed(1, done);
        });
    });
        //test the content changes when a new feed is loaded
        it('content changes when a new feed is loaded', function(done){
            expect($('.feed').html()).not.toBe(priorEntry);
            done();
        });
        //define done
        afterEach(function (done) {
            loadFeed(0,done);
        });
    });
}())