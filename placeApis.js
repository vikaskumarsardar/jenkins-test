const axios = require("axios");
async function makeCall() {
  const result = await axios.get(
    "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJC0WFTmmTDzkRgqTamurafJ8&key=AIzaSyBEemKviEiOnoI-4cZ3-IdulInBGlQgUew"
    // "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJsXUquqDvDzkR3ZkEtXctr1E&key=AIzaSyBEemKviEiOnoI-4cZ3-IdulInBGlQgUew"
    // "https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/${locationId}/reviews?key=${apiKey}"
  );
  console.log(result.data.result, "resulresulresurleseurl");
}
makeCall();
