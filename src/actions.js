export const setCountryFilters = (filters) => ({
  type: "SET_COUNTRY_FILTERS",
  payload: filters,
});

export const fetchCountryData = () => ({
  type: "FETCH_COUNTRY_DATA",
});

export const setCountryData = (data) => ({
  type: "SET_COUNTRY_DATA",
  payload: data,
});
