import axios from 'axios';

// Hospital data array
let hospitals = [
    {
        "ENROLLMENT ID": "O20020812000015",
        "ENROLLMENT STATE": "TN",
        "PROVIDER TYPE CODE": "00-09",
        "PROVIDER TYPE TEXT": "PART A PROVIDER - HOSPITAL",
        "NPI": "1467408781",
        "MULTIPLE NPI FLAG": "N",
        "CCN": "440058",
        "ASSOCIATE ID": "5193632180",
        "ORGANIZATION NAME": "SOUTHERN TENNESSEE MEDICAL CENTER LLC",
        "DOING BUSINESS AS NAME": "SOUTHERN TENNESSEE REGIONAL HEALTH SYSTEM WINCHESTER",
        "INCORPORATION DATE": "1998-11-09",
        "INCORPORATION STATE": "DE",
        "ORGANIZATION TYPE STRUCTURE": "LLC",
        "ORGANIZATION OTHER TYPE TEXT": "",
        "PROPRIETARY NONPROFIT": "P",
        "ADDRESS LINE 1": "185 HOSPITAL RD",
        "ADDRESS LINE 2": "",
        "CITY": "WINCHESTER",
        "STATE": "TN",
        "ZIP CODE": "373982404",
        "PRACTICE LOCATION TYPE": "MAIN/PRIMARY HOSPITAL LOCATION",
        "LOCATION OTHER TYPE TEXT": "",
        "SUBGROUP - GENERAL": "Y",
        "SUBGROUP - ACUTE CARE": "Y",
        "SUBGROUP - ALCOHOL DRUG": "N",
        "SUBGROUP - CHILDRENS": "N",
        "SUBGROUP - LONG-TERM": "N",
        "SUBGROUP - PSYCHIATRIC": "N",
        "SUBGROUP - REHABILITATION": "Y",
        "SUBGROUP - SHORT-TERM": "N",
        "SUBGROUP - SWING-BED APPROVED": "N",
        "SUBGROUP - PSYCHIATRIC UNIT": "N",
        "SUBGROUP - REHABILITATION UNIT": "N",
        "SUBGROUP - SPECIALTY HOSPITAL": "N",
        "SUBGROUP - OTHER": "N",
        "SUBGROUP - OTHER TEXT": "",
        "REH CONVERSION FLAG": "N",
        "REH CONVERSION DATE": "",
        "CAH OR HOSPITAL CCN": ""
    },
    {
        "ENROLLMENT ID": "O20070412000320",
        "ENROLLMENT STATE": "TN",
        "PROVIDER TYPE CODE": "00-09",
        "PROVIDER TYPE TEXT": "PART A PROVIDER - HOSPITAL",
        "NPI": "1225078967",
        "MULTIPLE NPI FLAG": "N",
        "CCN": "44T058",
        "ASSOCIATE ID": "5193632180",
        "ORGANIZATION NAME": "SOUTHERN TENNESSEE MEDICAL CENTER LLC",
        "DOING BUSINESS AS NAME": "SOUTHERN TENNESSEE REGIONAL HEALTH SYSTEM WINCHESTER",
        "INCORPORATION DATE": "1998-11-09",
        "INCORPORATION STATE": "DE",
        "ORGANIZATION TYPE STRUCTURE": "LLC",
        "ORGANIZATION OTHER TYPE TEXT": "",
        "PROPRIETARY NONPROFIT": "P",
        "ADDRESS LINE 1": "185 HOSPITAL RD",
        "ADDRESS LINE 2": "",
        "CITY": "WINCHESTER",
        "STATE": "TN",
        "ZIP CODE": "373982404",
        "PRACTICE LOCATION TYPE": "HOSPITAL REHABILITATION UNIT",
        "LOCATION OTHER TYPE TEXT": "",
        "SUBGROUP - GENERAL": "N",
        "SUBGROUP - ACUTE CARE": "N",
        "SUBGROUP - ALCOHOL DRUG": "N",
        "SUBGROUP - CHILDRENS": "N",
        "SUBGROUP - LONG-TERM": "N",
        "SUBGROUP - PSYCHIATRIC": "N",
        "SUBGROUP - REHABILITATION": "N",
        "SUBGROUP - SHORT-TERM": "N",
        "SUBGROUP - SWING-BED APPROVED": "N",
        "SUBGROUP - PSYCHIATRIC UNIT": "Y",
        "SUBGROUP - REHABILITATION UNIT": "N",
        "SUBGROUP - SPECIALTY HOSPITAL": "N",
        "SUBGROUP - OTHER": "N",
        "SUBGROUP - OTHER TEXT": "",
        "REH CONVERSION FLAG": "N",
        "REH CONVERSION DATE": "",
        "CAH OR HOSPITAL CCN": ""
    },
    {
        "ENROLLMENT ID": "O20070412000341",
        "ENROLLMENT STATE": "TN",
        "PROVIDER TYPE CODE": "00-09",
        "PROVIDER TYPE TEXT": "PART A PROVIDER - HOSPITAL",
        "NPI": "1215977954",
        "MULTIPLE NPI FLAG": "N",
        "CCN": "44S058",
        "ASSOCIATE ID": "5193632180",
        "ORGANIZATION NAME": "SOUTHERN TENNESSEE MEDICAL CENTER LLC",
        "DOING BUSINESS AS NAME": "SOUTHERN TENNESSEE REGIONAL HEALTH SYSTEM WINCHESTER",
        "INCORPORATION DATE": "1998-11-09",
        "INCORPORATION STATE": "DE",
        "ORGANIZATION TYPE STRUCTURE": "LLC",
        "ORGANIZATION OTHER TYPE TEXT": "",
        "PROPRIETARY NONPROFIT": "P",
        "ADDRESS LINE 1": "185 HOSPITAL RD",
        "ADDRESS LINE 2": "",
        "CITY": "WINCHESTER",
        "STATE": "TN",
        "ZIP CODE": "373982404",
        "PRACTICE LOCATION TYPE": "HOSPITAL PSYCHIATRIC UNIT",
        "LOCATION OTHER TYPE TEXT": "",
        "SUBGROUP - GENERAL": "N",
        "SUBGROUP - ACUTE CARE": "N",
        "SUBGROUP - ALCOHOL DRUG": "N",
        "SUBGROUP - CHILDRENS": "N",
        "SUBGROUP - LONG-TERM": "N",
        "SUBGROUP - PSYCHIATRIC": "N",
        "SUBGROUP - REHABILITATION": "N",
        "SUBGROUP - SHORT-TERM": "N",
        "SUBGROUP - SWING-BED APPROVED": "N",
        "SUBGROUP - PSYCHIATRIC UNIT": "Y",
        "SUBGROUP - REHABILITATION UNIT": "N",
        "SUBGROUP - SPECIALTY HOSPITAL": "N",
        "SUBGROUP - OTHER": "N",
        "SUBGROUP - OTHER TEXT": "",
        "REH CONVERSION FLAG": "N",
        "REH CONVERSION DATE": "",
        "CAH OR HOSPITAL CCN": ""
    }
];

// Function to fetch coordinates
const getCoordinates = async (address) => {
    try {
        const apiKey = "AIzaSyBE6Ii-ZxHsICvzD2Fp3m3iMPYX-Vie1N4";
        const response = await axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
            params: {
                address: address,
                key: apiKey,
            },
        });
        
        if (response.data.results.length > 0) {
            // Correctly access the lat and lng from geometry.location
            const { lat, lng } = response.data.results[0].geometry.location;
            return { latitude: lat, longitude: lng };
        } else {
            return { error: "No coordinates found" };
        }
    } catch (error) {
        console.error("Error fetching coordinates:", error.message);
        return { error: error.message };
    }
};

// Function to add coordinates to each hospital
const fetchAllCoordinates = async () => {
    const hospitalWithCoordinates = [];
    
    for (const hospital of hospitals) {
        // Format address properly for geocoding
        const fullAddress = `${hospital["ADDRESS LINE 1"]}, ${hospital["CITY"]}, ${hospital["STATE"]} ${hospital["ZIP CODE"]}`;
        console.log(`Fetching coordinates for: ${fullAddress}`);
        
        const coordinates = await getCoordinates(fullAddress);
        
        // Create a new hospital object with coordinates
        const hospitalData = {
            ...hospital,
            coordinates: coordinates
        };
        
        hospitalWithCoordinates.push(hospitalData);
        console.log(`Address: ${fullAddress}, Coordinates:`, coordinates);
    }
    
    return hospitalWithCoordinates;
};

// Execute the function and handle the result
export const runGeocodingProcess = async () => {
    try {
        const results = await fetchAllCoordinates();
        console.log("All hospitals with coordinates:", results);
        return results;
    } catch (error) {
        console.error("Error in geocoding process:", error);
    }
};

// Run the main function
runGeocodingProcess();