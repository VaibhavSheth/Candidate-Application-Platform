// src/services/apiService.js

export const fetchJobListings = async () => {
    try {
      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON");
      const data = await response.json();
      return data.jdList; // Return only the list of job listings
    } catch (error) {
      console.error("Error fetching job listings:", error);
      return []; // Return empty array in case of error
    }
  };
  