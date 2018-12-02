# ElasticBeanstalk Deployment Scripts

## Available Scripts

* `prod.create.sh` : Creates a new environment based on the config within .elasticbeanstalk
* `prod.deploy.sh` : Deployed to the environment
* `prod.logs.sh` : Downloads the logs from the environment
* `prod.terminate.sh` : Terminates the environment - You will have to recreate it to deploy.


## Notes

Make sure you add the following environment variables:

* TWITTER_CONSUMER_KEY
* TWITTER_CONSUMER_SECRET
* TWITTER_ACCESS_TOKEN_KEY
* TWITTER_ACCESS_TOKEN_SECRET

> You will need to collect the values from your account at: [https://apps.twitter.com](https://apps.twitter.com)
