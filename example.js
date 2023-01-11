import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
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

//  const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Regular": require("./assets/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("./assets/Roboto-Bold.ttf"),
//   });
// };

export default function App() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const [isReady, setIsReady] = useState(false)

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
  // if (!isReady) {
  //   return <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)}/>
  // }
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
      {/* <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 700, height: 700}} /> */}
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
