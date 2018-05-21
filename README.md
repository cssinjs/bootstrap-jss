bootstrap-jss
=============
Build JSS components for Bootstrap by JSS

[![CircleCI](https://circleci.com/gh/sammi/bootstrap-jss.svg?style=svg)](https://circleci.com/gh/sammi/bootstrap-jss)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1135d152405baa4e466b/test_coverage)](https://codeclimate.com/github/sammi/bootstrap-jss/test_coverage)


# Install Visusl Studio Code Extensions

* Jest
* ESLint
* Babel ES6/ES7
* Jest Snippets
* EditorConfig for VS Code
* Code Outline
* Badges

# Test Driven Development

1. Start the test watcher
```bash
rm -rf node_modules
yarn install
yarn test:watch
```
2. Change and save code, make sure all tests are passing

3. When test failed, click "Debug" above each Jest Unit test, step into the source code.


# Check the demo by StoryBook
 ```bash
 cd stories
 rm -rf node_modules
 yarn install
 yarn start
 ```

Check out http://localhost:9001
