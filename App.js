import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Alert,
} from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const onPressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const onSubmitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS!", "Todos must be over 3 chars long", [
        { text: "Understood" },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* Header */}
        <Header />
        <View style={styles.content}>
          {/* To-do form */}
          <AddTodo onSubmit={onSubmitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} onPress={onPressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
