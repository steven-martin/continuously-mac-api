# Continuously Mac: API

An API for the Continuously Mac news website and iOS app.

## Features

* The latest apple news from the very best Tech Journalists.
* Powered by the [Twitter-Headlines](https://www.npmjs.com/package/twitter-headlines) engine.
* A single JSON endpoint, updated every 15 minutes.

## Quick Start

Download this repo locally and...

```
npm i
npm run start
```

> This will start the API on local host (port:3000).

## API Reference

### Get Headlines

To view the latest headlines (in JSON) simply visit:

`http://localhost:3000/`

> A cron job updates this list every 15 minutes.

