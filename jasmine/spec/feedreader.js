
$(function() {

describe('RSS Feeds', function() {

    it('are defined', function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
    });

    it('have a URL defined that is not empty', function() {
        for (feed in allFeeds) {
            expect(allFeeds[feed].url).toBeDefined();
            expect(allFeeds[feed].url.length).not.toBe(0);
        }
     });

 
    it('have a name element that is not empty', function() {
        for (feed in allFeeds){
            expect(allFeeds[feed].name).toBeDefined();
            expect(allFeeds[feed].name.length).not.toBe(0);
        }
     });

});


describe ('The menu', function() {
    it('should be hidden by default', function() {
        expect($("body").hasClass("menu-hidden")).toBe(true);

    }); 

    it('appears when clicked and hides when clicked again', function() {
        $('.menu-icon-link').click();
        expect($("body").hasClass("")).toBe(true);
        $('.menu-icon-link').click();
        expect($("body").hasClass("menu-hidden")).toBe(true);
    });

});


 describe('Initial Entries', function() {

    beforeEach(function(done)   {
        loadFeed(1,done);
    });

    it('should have atleast 1 entry',function(done) {
        var entries = $(".feed").find(".entry")
        expect(entries.length>=1).toBe(true);
        done();

    });

 });



     describe('New Feed Selection',function() {
     beforeEach(function(done) {
        loadFeed(0,done);
     });

        it('should change the content',function(done){
            //Get title of the previous content
            var oldContent = $(".header-title").text()
            loadFeed(1,function () {
                //Get title of the newly generated content
                var newContent = $(".header-title").text();
                //Compare the two
                expect(newContent).not.toEqual(oldContent);
                done();
            });  
        });

     });
}());
