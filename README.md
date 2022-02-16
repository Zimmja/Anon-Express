### Introduction

This is the backend for the Anonymeet app, a Makers Academy Final Project created by Myoung Bae, Andy Bird, Ryan Grimes, Courtney Stow, Ginny Thomas and Matt Zimmer. This has been created in [Express](https://expressjs.com/).

The front end app can be accessed [here](https://github.com/mhbae-dev/anonymeet).

### Use

Clone this repo's contents to a local repository, and navigate to that repository in the command line.

#### If using Docker:

1. Run `docker compose up` in the command line to run

#### If not using Docker:

1. Run `npm install` in the command line
2. If any errors are encountered, use `npm audit fix — force` if prompted to until vulnerabilities are gone
3. To run locally, run `npm start` in the command line from the root of the directory

To check it is running correctly, go to [http://localhost:9000/](http://localhost:9000/); you should see information for a default room (start date: 2022-01-12, end date: 2022-01-15, 3 participants) in an API, like this: [{"roomID":"xxxxxxxxxxx","startDate":"2022-01-12","endDate":"2022-01-15","friendCount":3,"roomFormsRatings":[[],[],[]]}]
