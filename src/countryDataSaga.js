import { takeLatest, put, call } from "redux-saga/effects";
import { setCountryData } from "./actions";

async function fetchData() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/mledoze/countries/master/countries.json"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error on my path");
  }
}

function* fetchCountryData() {
  try {
    const data = yield call(fetchData);
    yield put(setCountryData(data));
  } catch (error) {
    // Handle errors, e.g., dispatch an error action
  }
}

export function* countryDataSaga() {
  yield takeLatest("FETCH_COUNTRY_DATA", fetchCountryData);
}
