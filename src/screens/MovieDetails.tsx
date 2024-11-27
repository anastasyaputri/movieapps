import React from "react";
import { View, Text } from "react-native";

const MovieDetails = ({ route }) => {
  const { id } = route.params;

  return (
    <View>
      <Text>Details for Movie ID: {id}</Text>
    </View>
  );
};

export default MovieDetails;
