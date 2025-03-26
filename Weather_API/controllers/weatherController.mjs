import redis from "redis";
import axios from "axios";

const client = redis.createClient();

(async () => {
  try {
    await client.connect();
    console.log("Redis connected!");
  } catch (err) {
    console.error("Failed to connect to Redis", err);
    process.exit(1);
  }
})();

const getWeatherAPI = async (city) => {
  try {
    const response = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${process.env.API_KEY}&contentType=json`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getWeatherCache = async (city) => {
  try {
    const cachedData = await client.get(city);
    return cachedData ? cachedData : null;
  } catch (error) {}
};

const saveCache = async (city, data) => {
  try {
    client.setEx(city, 3600, JSON.stringify(data));
  } catch (error) {}
};

const getWeather = async (req, res) => {
  const city = req.params.city;

  if (!city) {
    res.status(500).json({
      error: "City is required",
    });
  }
  try {
    const cachedData = await getWeatherCache(city);
    if (cachedData) {
      console.log("Cache Hit");
      res.json({
        source: "cache",
        data: JSON.parse(cachedData),
      });
    } else {
      console.log("Cache Miss");
      const weatherData = await getWeatherAPI(city);
      await saveCache(city, weatherData);
      res.json({
        souce: "api",
        data: weatherData,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export default getWeather;
