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

interface loginProps {
  login: string; 
  href: string;
}



const login: React.FC<loginProps> = () => {

  const navigation = useNavigation<RootStackParamList>();

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={require('../assets/images/busv2.png')} />
      </View>
      <Text style={styles.LoginText}>LOGIN TO CONTINUE</Text>
      <View style={styles.inputDiv}>
        <TextInput
          placeholder='Username'
          style={styles.input1}
        />
        <TextInput
          placeholder='Password'
          secureTextEntry
          style={styles.input}
        />
      </View>
      <View style={styles.tickInputDiv}>
        <View style={styles.Checkbox}>
          <BouncyCheckbox
            unFillColor="#FFFFFF"
            iconStyle={{ borderColor: "red" }}
            innerIconStyle={{ borderWidth: 2 }}
          />
          <Text style={styles.rememberMeText}>Remember Me</Text>
        </View>
        <Text style={styles.checkboxText}>Forgot Password</Text>
      </View>
      <Pressable style={styles.button}
      >
        <Link href= '/(tabs)' style={styles.buttonText}>LOGIN</Link>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('createAccount')}
        >
        <Text style={styles.createAccText}>Have an account?{''}{''}
          <Text style={styles.defaultText}>Create An Account</Text>
        </Text>
      </Pressable>
    </View>
  )
}

export default login

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
    marginBottom: 93
  },
  LoginText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 48,
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
  Checkbox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 7,
    gap: 2,
  },
  inputDiv: {

  },
  checkboxText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  tickInputDiv: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 65,
    marginTop: 10,
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
    marginTop: 60
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