# Project Overview

In this project tests were written to test a web based rss feeds application. Jasmine was used as the testing framework.

Following tests were written:

1.A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.<br>
2. A test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.<br>
3. A test suite named "The menu".<br>
4. A test that ensures the menu element is hidden by default.<br>
5. A test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.<br>
6. A test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.<br>
7. A test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.<br>

## How to Run
Download or clone the repository and open it in your browser locally. All needed Jasmine libraries are included, and you will see a section below the page showing the test results.
