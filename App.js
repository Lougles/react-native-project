import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Alert
 } from 'react-native';

export default function App() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);
  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
    setName('');
    setPassword('');
  };
  const handleInput = (text) => {
    setText(text)
  }
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Hi, this is my first hw!</Text>
        <StatusBar style="auto" />
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inputContainer}>
          <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <TextInput style={styles.inputText} keyboardType="number-pad" placeholder="Type text" value={text} onChangeText={handleInput}/>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <TextInput
              value={name}
              onChangeText={nameHandler}
              placeholder="Username"
              style={styles.input}
            />
            <TextInput
              value={password}
              onChangeText={passwordHandler}
              placeholder="Password"
              secureTextEntry={true}
              style={styles.input}
            />
            <Button title={"Login"} style={styles.input} onPress={onLogin} />
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    marginTop: 24,
    padding: 24,
    backgroundColor: "#eaeaea",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#FF0000'
  },
  inputContainer: {
    padding: 24,
    backgroundColor: "#eaeaea",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: '#FF0000'
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#FF0000",
    // padding: 25,
    height: 30,
    width: 150,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});
