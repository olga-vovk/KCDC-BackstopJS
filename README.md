#KCDC 2021 BackstopJS Workshop

## Installation

```
npm install -g backstopjs
```

### Run Tests

```
backstop test
```

### Run Tests in a docker container
Pre-requisites:
Have Docker installed and running

```
backstop test --docker
```
Note: Always run reference images with --docker flag.

### Run only one test

```
backstop test --filter 'Scenario label here'
```

### Approve new baseline
This will take the screenshots from your tests and puth them into the bitmap_reference folder. If you do so, make sure that the tests were iexecuted with --docker flag.

```
backstop approve
```

### Get new baseline

```
backstop reference
```

## Scripts that run before screenshot taken

qa-tests/visual/backstop_data/engine_scripts/puppet
all files that start with onReady

## To run test locally
- update constants.username and constants.password values in qa-tests/visual/backstop_data/engine_scripts/puppet/Constants.js to use your credentials
- execute tests and take baseline with --docker flag for accurate results
- IMPORTANT: do not commit your personal credentials in Constans.js. Revert above changes before commit.

## Scenario properties

```
label                    // [required] Tag saved with your reference images
onBeforeScript           // Used to set up browser state e.g. cookies.
cookiePath               // import cookies in JSON format (available with default onBeforeScript see setting cookies below)
url                      // [required] The url of your app state
referenceUrl             // Specify a different state or environment when creating reference.
readyEvent               // Wait until this string has been logged to the console.
readySelector            // Wait until this selector exists before continuing.
delay                    // Wait for x milliseconds
hideSelectors            // Array of selectors set to visibility: hidden
removeSelectors          // Array of selectors set to display: none
onReadyScript            // After the above conditions are met -- use this script to modify UI state prior to screen shots e.g. hovers, clicks etc.
keyPressSelectors        // Takes array of selector and string values -- simulates multiple sequential keypress interactions.
hoverSelector            // Move the pointer over the specified DOM element prior to screen shot.
hoverSelectors           // *Puppeteer only* takes array of selectors -- simulates multiple sequential hover interactions.
clickSelector            // Click the specified DOM element prior to screen shot.
clickSelectors           // *Puppeteer only* takes array of selectors -- simulates multiple sequential click interactions.
postInteractionWait      // Wait for a selector after interacting with hoverSelector or clickSelector (optionally accepts wait time in ms. Idea for use with a click or hover element transition. available with default onReadyScript)
scrollToSelector         // Scrolls the specified DOM element into view prior to screen shot (available with default onReadyScript)
selectors                // Array of selectors to capture. Defaults to document if omitted. Use "viewport" to capture the viewport size. See Targeting elements in the next section for more info...
selectorExpansion        // See Targeting elements in the next section for more info...
misMatchThreshold        // Percentage of different pixels allowed to pass test
requireSameDimensions    // If set to true -- any change in selector size will trigger a test failure.
viewports                // An array of screen size objects your DOM will be tested against. This configuration will override the viewports property assigned at the config root.
```
### Test exaples for reference

```
 "scenarios": [
    {
      "label": "Welcome Page",
      "cookiePath": "backstop_data/engine_scripts/cookies.json",
      "url": "http://ec2-34-222-187-156.us-west-2.compute.amazonaws.com/",
      "referenceUrl": "http://ec2-34-222-187-156.us-west-2.compute.amazonaws.com/",
      "readyEvent": "",
      "readySelector": "",
      "delay": 5000,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "",
      "postInteractionWait": 0,
      "selectors": [],
      "selectorExpansion": true,
      "expect": 0,
      "misMatchThreshold" : 0.1,
      "requireSameDimensions": false
    },
    {
      "label": "Login Page",
      "cookiePath": "backstop_data/engine_scripts/cookies.json",
      "url": "http://ec2-34-222-187-156.us-west-2.compute.amazonaws.com/user/login",
      "referenceUrl": "http://ec2-34-222-187-156.us-west-2.compute.amazonaws.com/user/login",
      "readyEvent": "",
      "readySelector": "",
      "delay": 8000,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "",
      "postInteractionWait": 0,
      "selectors": [],
      "selectorExpansion": true,
      "expect": 0,
      "misMatchThreshold" : 0.1,
      "requireSameDimensions": false
    },
    {
      "label": "Login Page Registration Tab",
      "cookiePath": "backstop_data/engine_scripts/cookies.json",
      "url": "http://ec2-34-222-187-156.us-west-2.compute.amazonaws.com/user/login",
      "referenceUrl": "http://ec2-34-222-187-156.us-west-2.compute.amazonaws.com/user/login",
      "readyEvent": "",
      "readySelector": "",
      "delay": 8000,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "a[href^='/user/register']",
      "postInteractionWait": 0,
      "selectors": [],
      "selectorExpansion": true,
      "expect": 0,
      "misMatchThreshold" : 0.1,
      "requireSameDimensions": false
    },
    {
      "label": "Login Page Reset Password Tab",
      "cookiePath": "backstop_data/engine_scripts/cookies.json",
      "url": "http://ec2-34-222-187-156.us-west-2.compute.amazonaws.com/user/login",
      "referenceUrl": "http://ec2-34-222-187-156.us-west-2.compute.amazonaws.com/user/login",
      "readyEvent": "",
      "readySelector": "",
      "delay": 8000,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "a[href^='/user/password']",
      "postInteractionWait": 0,
      "selectors": [],
      "selectorExpansion": true,
      "expect": 0,
      "misMatchThreshold" : 0.1,
      "requireSameDimensions": false
    },
    {
      "keyPressSelectors": [
        {
          "selector": "#edit-name",
          "keyPress": "reviewer"
        },
        {
          "selector": "#edit-pass",
          "keyPress": ["reviewer"]
        }
      ],  
      "label": "Logged in Welcome Page",
      "cookiePath": "backstop_data/engine_scripts/cookies.json",
      "url": "http://ec2-34-222-187-156.us-west-2.compute.amazonaws.com/user/login",
      "referenceUrl": "http://ec2-34-222-187-156.us-west-2.compute.amazonaws.com/user/login",
      "readyEvent": "",
      "readySelector": "",
      "delay": 8000,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "#edit-submit",
      "postInteractionWait": 0,
      "selectors": [],
      "selectorExpansion": true,
      "expect": 0,
      "misMatchThreshold" : 0.1,
      "requireSameDimensions": false
    }
  ],
```

### Additional documentation

https://github.com/garris/BackstopJS