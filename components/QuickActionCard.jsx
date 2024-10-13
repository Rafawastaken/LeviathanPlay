// ./components/QuickActionCard.js

import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import createStyles from "../styles/QuickActionCard.styles";

const QuickActionCard = ({ title, colors, onPress }) => {
  const styles = createStyles();

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <LinearGradient colors={colors} style={styles.gradient}>
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default QuickActionCard;
