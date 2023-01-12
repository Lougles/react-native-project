import React, {useState} from 'react'
import background from '../assets/images/login-background.png'
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
 import * as Font from 'expo-font';


const Registration = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (login) => setLogin(login);
  const emailHandler = (email) => setEmail(email);
  const passwordHandler = (password) => setPassword(password);
  const onLogin = () => {
    Alert.alert(`Login: ${login}, Email: ${email}, Password: ${password}`);
    setName('');
    setLogin('');
    setPassword('');
  };
  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background_Image}>
        <View style={styles.form}>
          <View style={styles.form_Header_Container}>
            <Text style={styles.form_Header}>"Регистрация"</Text>
          </View>
          <TextInput
            value={login}
            onChangeText={loginHandler}
            placeholder="Логин"
            style={styles.form_Input}
          />
          <TextInput
            value={email}
            onChangeText={emailHandler}
            placeholder="Адрес электронной почты"
            style={styles.form_Input}
          />
          <TextInput
            value={password}
            onChangeText={passwordHandler}
            placeholder="Пароль"
            secureTextEntry={true}
            style={styles.form_Input}
          />
        </View>
      </ImageBackground>
    </View>
  </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background_Image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  form: {
    marginHorizontal: 16,
  },
  form_Header_Container: {
    alignItems: 'center',
    marginBottom: 33,
  },
  form_Header: {
    fontSize: 30,
  },
  form_Input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    height: 50,
    paddingLeft: 16,
    marginBottom: 16,
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

export default Registration