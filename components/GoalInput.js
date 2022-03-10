import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function GoalInput(props) {
  const [goal, setGoal] = useState("");
  const [searchValue, setSearchValue] = useState("")

  const setGoalHandler = (inputText) => {
    setGoal(inputText);
  };

  const emptyInputValue = () => {
      return searchValue = ""
  }

  return (
    <View style={styles.addGoals}>
      <TextInput
        placeholder="Type your goal here"
        style={styles.agTextInput}
        onChangeText={setGoalHandler}
        // value={goal}
      />
      <Button
        title="ADD"
        style={styles.agButton}
        onPress = {() => props.onGoalInput(goal)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  addGoals: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  agTextInput: {
    flex: 4,
    borderColor: "black",
    borderWidth: 1,
    margin: 1,
    padding: 2,
    borderRadius: 5,
  },
  agButton: {
    flex: 1,
  },
});

export default GoalInput;
