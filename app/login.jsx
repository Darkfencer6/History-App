import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();

  const handleSignIn = () => {
    // Add your login logic here (e.g., API call for authentication)
    alert('Login Successful!');
    router.push('/home'); // Navigate to home (TabLayout) after login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#aaaaaa"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaaaaa"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5680E9',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;
