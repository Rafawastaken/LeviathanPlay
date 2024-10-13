import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import convertToTitleCase from "../helpers/convert_title";

const MovieMetaInfo = ({ rating, releaseDate, genre, styles, theme }) => {
  return (
    <View style={styles.ratingContainer}>
      <Icon name="star" size={16} color={theme.colors.primary} />
      <Text style={styles.ratingText}>
        {rating} • <Text style={styles.secondaryText}>{releaseDate}</Text> •{" "}
        <Text style={styles.secondaryText}>{convertToTitleCase(genre)}</Text>
      </Text>
    </View>
  );
};

export default MovieMetaInfo;
