# Assignment-Jayani

How to set up this project
-----------------------------

1. Clone this repository from Github (https://github.com/jayanilakmali/Assignment-Jayani)
2. Download Node latest version ("https://nodejs.org/en/download/)
3. Go to the project folder and open a terminal
4. Run "npm init"
5. Run "npm install"
6. Install cypress as a dev dependancy "npm install cypress --save-dev"
7. To run the test "npm run cypress:open"
8. You will see the tests are running in Cypress test runner

Reporting
-----------

1. To see the html report run "npm run cypress:run" 
2. After run the tests go to project folder 'cypress/report/index.html' 
2. Open the index.html in browser
3. If tests are failed you can see the screenshots of failure in the report
3. This project is also connected with cypress dashboard 
4. To view the after running tests go to https://dashboard.cypress.io/projects/h1tjpf/analytics/runs-over-time


Integrate with circleci
------------------------

1. The build is being pushed to circleci upon every commit and push to the code
2. Refer this to the build pipeline in circleci (https://app.circleci.com/pipelines/github/jayanilakmali/Assignment-Jayani?filter=all)
3. Test are run in `$npm bin/cypress run` stage

