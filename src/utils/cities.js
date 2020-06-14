import {orderBy} from 'lodash'

const cities = [{
    "id": 3652462,
    "name": "Quito",
    "coord": {
      "lon": -78.524948,
      "lat": -0.22985
    }
  },
  {
    "id": 3657509,
    "name": "Guayaquil",
    "coord": {
      "lon": -79.900002,
      "lat": -2.16667
    }
  },
  {
    "id": 2643743,
    "name": "London",
    "coord": {
      "lon": -0.12574,
      "lat": 51.50853
    }
  },
  {
    "id": 5128581,
    "name": "New York City",
    "coord": {
      "lon": -74.005966,
      "lat": 40.714272
    }
  },
  {
    "id": 6359304,
    "name": "Madrid",
    "coord": {
      "lon": -3.68275,
      "lat": 40.489349
    }
  },
  {
    "id": 5095808,
    "name": "Bogota",
    "coord": {
      "lon": -74.029861,
      "lat": 40.876209
    }
  },
  {
    "id": 6455259,
    "name": "Paris",
    "coord": {
      "lon": 2.35236,
      "lat": 48.856461
    }
  },
  {
    "id": 4164138,
    "name": "Miami",
    "coord": {
      "lon": -80.193657,
      "lat": 25.774269
    }
  },
  {
    "id": 6356055,
    "name": "Barcelona",
    "coord": {
      "lon": 2.12804,
      "lat": 41.399422
    }
  },
  {
    "id": 2643123,
    "name": "Manchester",
    "coord": {
      "lon": -2.23743,
      "lat": 53.480949
    }
  },
]

export const sortedCitiesList = orderBy(cities,['name'], ['asc']);