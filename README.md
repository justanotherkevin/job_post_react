# Job Post Site Demo

Code challenge for a developer position.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.   
Get NPM: https://www.npmjs.com/get-npm


### Prerequisites
**If you already have npm install, skip this**   
All you need is npm, when bundle with install, all dependencies should be added.

```
npm install npm@latest -g
```

### Installing

Geting a development env running


```
npm install
npm start
```
if you have rails api running you should see similar terminal message
```
Started GET "/job_posts" for 127.0.0.1 at 2017-08-19 10:35:20 -0400
Processing by JobPostsController#index as HTML
  JobPost Load (0.8ms)  SELECT "job_posts".* FROM "job_posts"
Completed 200 OK in 25ms (Views: 23.5ms | ActiveRecord: 0.8ms)
```


## Built With

* [npm](https://www.npmjs.com/get-npm) - Packaging manager
* [React.js](https://facebook.github.io/react/docs/installation.html) - Facebook front end

## Authors

* **Kevin Hu** - *Initial work* - [HaveYouSeenMyWebsite?](https://polymer940c.github.io/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
