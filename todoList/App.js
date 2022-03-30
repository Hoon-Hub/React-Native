import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";



export default function App() {
  const TodoListData = [
    {
      id: 1,
      task: "Task1",
    },
    {
      id: 2,
      task: "Task2",
    },
    {
      id: 3,
      task: "Task3",
    },
    {
      id: 4,
      task: "Task4",
    },
    {
      id: 5,
      task: "Task5",
    },
    {
      id: 6,
      task: "Task6",
    },
    {
      id: 7,
      task: "Task7",
    },
    {
      id: 8,
      task: "Task8",
    },
    {
      id: 9,
      task: "Task9",
    },
  ];
  return (
    <View style={styles.container}>
      {/* Today Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {TodoListData.map((item) => {
            {/* <Task text={item.task}></Task> */ }
            <Text>{item.task}</Text>

          })}
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
});
