import React from "react";
import { View, Text } from "react-native";

import styles from "./specifics.style";

const Specifics = ({ title, points }) => {
  if (!points || points.length === 0) {
    return null; // Return null if points is undefined or empty
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>
        {points.map((item, index) => (
          <View style={styles.pointWrapper} key={item + index}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
