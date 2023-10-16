import { defineStore } from 'pinia'

export const useCitiesStore = defineStore('cities', {
  // state is the data being stored in the data store
  state: () => ({
    // List of Objects representing the weather for cities:
    //   - cityName: name of the city
    //   - stateName: name of the state (if applicable)
    //   - countryAbbreviation: abbreviation of the country
    //   - weatherSummary: brief description of the current weather
    //   - currentTemperature: current temperature (in degrees F)
    //   - dailyHigh: high temperature (in degrees F) for today
    //   - dailyLow: low temperature (in degrees F) for today
    weatherDataCauseError: []
  }),
  
  // getters return data from the data store
  getters: {
    getNumberOfCities: (state) => { return state.weatherDataCauseError.length }
  },
  
  // actions are operations that change the state
  actions: {
    addCity(city, state, country, summary, currentTemp, high, low) { 
      // Check if the city is already saved
      if (this.weatherDataCauseError.find(({ cityName }) => cityName === city) === undefined) {
        this.weatherDataCauseError.push({
          'cityName': city,
          'stateName': state,
          'countryAbbreviation': country,
          'weatherSummary': summary,
          'currentTemperature': currentTemp,
          'dailyHigh': high,
          'dailyLow': low
        })
      }
    },
    clearAllCities() {
      // Setting the `weatherDataCauseError` array to a length of zero clears it
      this.weatherDataCauseError.length = 0
    }
  }
})
