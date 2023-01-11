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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={background} style={styles.container}>
          <View style={styles.registerAvatar}></View>
          <View style={styles.registrationContainer}>
            <Text style={styles.registerHeader}>Регистрация</Text>
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
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  registrationContainer: {
    flex: 1,
    marginTop: 250,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    position: 'relative',
  },
  registerAvatar: {
    position: 'absolute',
    zIndex: 1,
    top: 203,
    padding: 60,
    marginHorizontal: 128,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  registerHeader: {
    fontSize: 30,
    fontFamily: 'Roboto',

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
