# Weather API

---

My solution for the [Weather API](https://roadmap.sh/projects/weather-api-wrapper-service) challenge on [roadmap](https://roadmap.sh/).

A weather API built using Node.js that fetches and returns weather data from a 3rd party API [Visual Crossing](https://www.visualcrossing.com/weather-api/) and implements in-memory caching using [Redis](https://redis.io/).

## Prerequisite

- Node.js Installed on your system.
- Redis Installed on your system.

## Installation

**Clone the repository**

```bash
 git clone --depth=1 https://github.com/abdelrahmanMansour1/Backend_Projects

 # Navigate to project dir
 cd Weather_API

 # Install Dependencies
 npm install
```

## Enviroment Variables

- **PORT** : variable which decides which port your server runs on, prefferably do not use port 6379 as this is the port used by the Redis server.

- **API_KEY**: key used to fetch data from [Visual Crossing API.](https://www.visualcrossing.com/weather-api/)

## API Endpoints

- **GET** _/weather/:city_ : Fetches weather data for specified city. City is passed as a parameter in the URL.

## How to run

Start two terminal windows one which will run redis server using `redis-server` command on the other window navigate to the project folder and use the `npm start` command.
