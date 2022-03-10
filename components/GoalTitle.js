import React from "react";
import { View, StyleSheet, Text } from "react-native";

function GoalTitle() {
  return (
    <View>
      <Text style={styles.title}> Goals App </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginBottom: 5,
    color: "blue",
  },
});

export default GoalTitle;
