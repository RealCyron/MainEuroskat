import React from "react";
import { View, StyleSheet } from "react-native";

export default function ProgressBar({ progress = 0 }) {
  // progress = 0..100
  return (
    <View style={styles.progressContainer}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    width: 200,
    height: 20,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#3b82f6",
    borderRadius: 10,
  },
});