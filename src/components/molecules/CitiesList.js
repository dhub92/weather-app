import React, { useState } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setSelectedCity } from "../../actions/actions";
import {
  getCurrentWeatherService,
  getHistoricalWeatherService,
} from "../../services/weatherService";

const CitiesList = ({ cities }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const dispatch = useDispatch();

  const handleSelectedCity = (event, index) => {
    setSelectedIndex(index);
    dispatch(setSelectedCity(cities[index]));
    dispatch(getCurrentWeatherService(cities[index].coord));
    dispatch(getHistoricalWeatherService(cities[index].coord));
  };

  return (
    <List component="nav">
      {cities.map((city, index) => (
        <ListItem
          key={city.id}
          button
          selected={selectedIndex === index}
          onClick={(event) => handleSelectedCity(event, index)}
        >
          <ListItemText inset primary={city.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default CitiesList;
