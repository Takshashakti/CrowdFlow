type ReverseGeocodeResponse = {
  place_id: number;
  licence: string;
  powered_by: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  display_name: string;
  address: {
    county: string;
    state: string;
    region: string;
    country: string;
    country_code: string;
  };
  boundingbox: [string, string, string, string];
};
