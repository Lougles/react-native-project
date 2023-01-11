import { useState } from 'react';
import * as Font from 'expo-font';
import background from './assets/images/login-background.png'
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
  Alert,
  ImageBackground
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
    <View style={{flex: 1}}>
      <ImageBackground source={background} style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginContainer}>
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
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderColor: '#FF0000',
    marginBottom: 10,
  },
  loginContainer: {
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    borderWidth: 1,
    borderColor: '#FF0000',
    marginBottom: 10,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#FF0000",
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
