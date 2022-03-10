import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";

import GoalItem from "./components/GoalItem.js";
import GoalInput from "./components/GoalInput.js";
import GoalTitle from "./components/GoalTitle.js";

export default function App() {
  const [goalList, setGoalList] = useState([]);

  const addGoalHandler = (list) => {
    setGoalList((goalList) => [{ id: Math.random().toString(), value: list }, ...goalList,]);
    
  };

  const removeGoalItem = (goalId) => {
    setGoalList((goal) => {
      goal.splice(goalId, 1);
      return [...goal];
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <GoalTitle />
      <GoalInput onGoalInput={addGoalHandler} />
      <FlatList
        data={goalList}
        renderItem={({ item, index }) => (
          <GoalItem
            // id={itemData.item.id}
            key={index}
            onDelete={() => {
              removeGoalItem(index);
            }}
            title={item.value}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    marginTop: 50,
  },
});
