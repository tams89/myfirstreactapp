const apiKey = process.env.REACT_APP_YELP_API_KEY;
const baseUrl = "https://api.yelp.com/v3";
const endpoint = "/businesses/search";

const fetchData = async (terms, location, sortBy) => {
    const urlToFetch = `${baseUrl}${endpoint}?term=${terms}&location=${location}&sort_by=${sortBy}`;
    const response = await fetch(urlToFetch, {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export default fetchData;