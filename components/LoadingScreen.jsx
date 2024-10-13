import { View, ActivityIndicator } from "react-native";

const LoadingScreen = ({ size, position, color }) => {
  return (
    <View style={position}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default LoadingScreen;
