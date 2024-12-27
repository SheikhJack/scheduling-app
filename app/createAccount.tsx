import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from 'expo-router';
import { Link } from 'expo-router';

interface RootStackParamList {
  navigate(arg0: string): void;
  login: undefined; 
  home: undefined;
  href: undefined;
}

interface createAccountProps {
  login: string; 
  href: string;
}



const createAccount: React.FC<createAccountProps> = () => {

  const navigation = useNavigation<RootStackParamList>();

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={require('../assets/images/busv2.png')} />
      </View>
      <Text style={styles.LoginText}>CREATE ACCOUNT</Text>
      <View style={styles.inputDiv}>
        <TextInput
          placeholder='Fullname'
          style={styles.input1}
        />
        <TextInput
          placeholder='Email'
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          placeholder='Password'
          style={styles.input}
        />
        <TextInput
          placeholder='Phone Number'
          style={styles.input}
        />
      </View>
      
      <Pressable style={styles.button}
      >
        <Link href="/(tabs)" style={styles.buttonText}>SIGN UP</Link>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('login')}
        >
        <Text style={styles.createAccText}>If you have an account?{''}{''}
          <Text style={styles.defaultText}>LOGIN</Text>
        </Text>
      </Pressable>
    </View>
  )
}

export default createAccount

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'linear-gradient(175deg, rgba(62,165,213,1) 0%, rgba(203,201,232,1) 100%);'
  },
  top: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderBottomRightRadius: '45%',
    borderBottomLeftRadius: '45%',
    marginBottom: 48
  },
  LoginText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 38,
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#D9D9D9',
    width: 394,
    height: 46,
    borderColor: '#e8e8e8',
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input1: {
    marginBottom: 33,
    backgroundColor: '#D9D9D9',
    width: 394,
    height: 46,
    borderColor: '#e8e8e8',
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
 
  inputDiv: {

  },
 
  
  rememberMeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#1A526C',
    height: 66,
    width: 295,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'center'
  },
  createAccText: {
    marginBottom: 150,
    fontWeight: 'bold',
  },
  defaultText: {
    fontWeight: 'bold',
    color: "#FFFFFF"
  }

})