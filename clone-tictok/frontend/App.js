import { StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";
import Constants from "expo-constants";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as firebase from "firebase";
import rootReducer from "./src/redux/reducers";
import AuthScreen from "./src/screens/auth";

const store = createStore(rootReducer, applyMiddleware(thunk));

// Initialize Firebase
firebase.initializeApp(Constants.manifest.web.config.firebase);

export default function App() {
  return (
    <Provider store={store}>
      <AuthScreen />
      <Text>hello</Text>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
