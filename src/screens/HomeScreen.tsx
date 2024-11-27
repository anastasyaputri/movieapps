import React, { useEffect } from "react";
import { FlatList, Text, Image, TouchableOpacity } from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { loadMovies } from "../redux/slices/movieSlice";

const HomeScreen = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies.data);

  useEffect(() => {
    dispatch(loadMovies(1));
  }, []);

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Details", { id: item.id })}
        >
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            }}
          />
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default HomeScreen;
