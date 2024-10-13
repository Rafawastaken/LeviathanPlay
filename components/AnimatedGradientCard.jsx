// ./components/AnimatedGradientCard.jsx
import React, { useEffect, useRef } from "react";
import { TouchableOpacity, Text, StyleSheet, Animated } from "react-native";
import Svg, { Defs, RadialGradient, Stop, Rect } from "react-native-svg";
import { useTheme } from "../styles/ThemeContext";

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const AnimatedGradientCard = ({ onPress, title, styles }) => {
  const theme = useTheme();
  const scaleAnim = useRef(new Animated.Value(1)).current; // Initialize scale to 1

  useEffect(() => {
    // Start a looped scaling animation: scale up and down
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.05, // Scale up slightly
          duration: 2000, // Duration for scaling up
          useNativeDriver: true, // Use native driver for better performance
        }),
        Animated.timing(scaleAnim, {
          toValue: 1, // Scale back to original size
          duration: 2000, // Duration for scaling down
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scaleAnim]);

  return (
    <TouchableOpacity
      style={styles.quickActionCard}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Animated SVG for Radial Gradient */}
      <AnimatedSvg
        height="100%"
        width="100%"
        style={[
          StyleSheet.absoluteFill,
          {
            transform: [{ scale: scaleAnim }], // Apply scaling animation
          },
        ]}
      >
        <Defs>
          <RadialGradient
            id="grad"
            cx="50%"
            cy="50%"
            rx="46%"
            ry="46%"
            fx="50%"
            fy="50%"
          >
            <Stop offset="46%" stopColor="rgba(45,128,194,1)" />
            <Stop offset="100%" stopColor="rgba(25,108,174,1)" />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </AnimatedSvg>

      {/* Text Overlay */}
      <Text style={styles.quickActionText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AnimatedGradientCard;
