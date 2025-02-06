const fetchData = async (terms, location, sortBy) => {
  const YELP_API_KEY = process.env.REACT_APP_YELP_API_KEY; // TODO this doesn't work
  const baseUrl = "https://api.yelp.com/v3";
  const endpoint = "/businesses/search";
  const urlToFetch = `${cors}${baseUrl}${endpoint}?term=${terms}&location=${location}&sort_by=${sortBy}`;
  const response = await fetch(urlToFetch, {
    headers: { Authorization: `Bearer ${YELP_API_KEY}` }
  });

  if (response.ok) {
    const jsonResponse = await response.json();
    if (jsonResponse.businesses) {
      const businesses = jsonResponse.businesses.map(business => {
        return {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        };
      });
      return businesses;
    }
  }

  throw new Error(response);
};

export default fetchData;
