import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  Platform,
} from "react-native";
import { theme } from "./colors";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@todos";

export default function App() {
  useEffect(() => {
    loadTodo();
  }, [todos]);

  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState({});

  const travel = async () => {
    setWorking(false);
  };
  const work = async () => {
    setWorking(true);
  };

  const saveTodos = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };

  const loadTodo = async () => {
    try {
      const s = await AsyncStorage.getItem(STORAGE_KEY);

      if (!s) {
        return;
      } else {
        setTodos(JSON.parse(s));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onChangeText = (payload) => {
    setText(payload);
  };

  const addTodo = async () => {
    if (text === "") return;
    // save todo
    const newTodos = { ...todos, [Date.now()]: { text, working } };
    setText("");

    setTodos(newTodos);
    await saveTodos(newTodos);
  };

  const deleteTodo = async (key) => {
    // Platform check
    if (Platform.OS === "web") {
      // web
      const ok = confirm("Do you want to delete this todo?");
      if (ok) {
        const newTodos = { ...todos };
        delete newTodos[key];
        setTodos(newTodos);
        saveTodos(newTodos);
      }
    } else {
      // mobile
      Alert.alert("Delete todo?", "Are you sure?", [
        { text: "Cancel" },
        {
          text: "I'm sure",
          onPress: () => {
            try {
              const newTodos = { ...todos };
              delete newTodos[key];
              setTodos(newTodos);
              saveTodos(newTodos);
              // await AsyncStorage.removeItem(key);
            } catch (error) {
              console.log(error);
            }
          },
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{
              ...styles.buttonText,
              color: working ? "white" : theme.grey,
            }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{
              ...styles.buttonText,
              color: !working ? "white" : theme.grey,
            }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          value={text}
          returnKeyType="done"
          onSubmitEditing={addTodo}
          onChangeText={onChangeText}
          style={styles.input}
          placeholder={working ? "Add a Todo" : "Where do you wanna go?"}
        />
      </View>
      <ScrollView>
        {Object.keys(todos).map((key) =>
          todos[key].working === working ? (
            <View style={styles.todo} key={key}>
              <Text style={styles.todoText}>{todos[key].text}</Text>
              <TouchableOpacity onPress={(key) => deleteTodo(key)}>
                <Text>🍕</Text>
              </TouchableOpacity>
            </View>
          ) : null
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  buttonText: {
    fontSize: 38,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "white",
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    fontSize: 17,
    textDecorationLine: "none",
  },
  todo: {
    backgroundColor: theme.grey,
    marginBottom: 7,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  todoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
