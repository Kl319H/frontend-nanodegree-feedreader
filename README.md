# Feed Reader Testing Project Overview

In this project we were given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and I'm left with an application with an incomplete test suite.

# Requirements to run this project

Open index.html in a browser.

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/rubrics/18/viewrubric)

1. I had to download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
2. I reviewed the functionality of the application within your browser.
3. I explored the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
4. I explored the Jasmine spec file in **./jasmine/spec/feedreader.js** and reviewed the [Jasmine documentation](http://jasmine.github.io).
5. I wrote a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
6. I wrote a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
7. I wrote a new test suite named `"The menu"`.
8. I wrote a test that ensures the menu element is hidden by default.
9. I wrote a test that ensures the menu changes visibility when the menu icon is clicked. having two expectations: does the menu display when clicked and does it hide when clicked again.
10. I wrote a test suite named `"Initial Entries"`.
11. I wrote a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
12. I wrote a test suite named `"New Feed Selection"`.
13. I wrote a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
14. All of my tests pass.
