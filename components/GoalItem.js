import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.index)}>
      <View style={styles.goalsItem}>
        <Text> {props.title} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goalsItem: {
    width: "95%",
    borderRadius: 5,
    marginVertical: 1,
    marginHorizontal: "2%",
    borderColor: "black",
    backgroundColor: "blue",
    borderWidth: 1,
    padding: 1,
    color: "#fff",
  },
});
export default GoalItem;
