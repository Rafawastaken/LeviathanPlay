// components/ListItemCard.js
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import ShowMetaInfo from "./ShowMetaInfo";

const ListItemCardShows = ({ action, item, styles, theme }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={action}>
      <Image
        source={{ uri: item.meta_data.poster_url }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          {item.meta_data.title}
        </Text>
        <ShowMetaInfo
          rating={item.meta_data.rating}
          releaseDate={item.meta_data.release_date}
          is_ended={item.meta_data.is_ended}
          genre={item.meta_data.genres[0]}
          styles={styles}
          theme={theme}
        />
        <Text
          style={[styles.overview, { color: theme.colors.secondaryText }]}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {item.meta_data.overview}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItemCardShows;
