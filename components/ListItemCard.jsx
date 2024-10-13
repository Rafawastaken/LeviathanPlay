// components/ListItemCard.js
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MovieMetaInfo from "./MovieMetaInfo";

const ListItemCard = ({ action, item, styles, theme }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={action}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          {item.title}
        </Text>
        <MovieMetaInfo
          rating={item.rating}
          releaseDate={item.release_date}
          genre={item.genre}
          styles={styles}
          theme={theme}
        />
        <Text
          style={[styles.overview, { color: theme.colors.secondaryText }]}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {item.overview_pt}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItemCard;
