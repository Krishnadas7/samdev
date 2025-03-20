import axios from "axios";

const BASE_URL = "https://data.cms.gov/data-api/v1/dataset/92396110-2aed-4d63-a6a2-5d6207d46a29/data";

export const providerSearch = async (filters) => {
    try {
        // Construct query parameters based on the filters
        const queryParams = Object.entries(filters)
            .filter(([_, value]) => value) // Remove empty values
            .map(([key, value]) => `filter[${key}]=${value}`)
            .join("&");

        const url = queryParams ? `${BASE_URL}?${queryParams}` : BASE_URL;

        // Make API call
        const res = await axios.get(url);

        return res?.data;
    } catch (error) {
        return error.response?.data;
    }
};
