const fetchData = async (terms, location, sortBy) => {
  const apiKey = process.env.YELP_APP_API_KEY;
  const baseUrl = "https://api.yelp.com/v3";
  const endpoint = "/businesses/search";
  const urlToFetch = `${baseUrl}${endpoint}?term=${terms}&location=${location}&sort_by=${sortBy}`;
  const response = await fetch(urlToFetch, {
    headers: { Authorization: `Bearer ${apiKey}`, accept: "application/json" }
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default fetchData;
