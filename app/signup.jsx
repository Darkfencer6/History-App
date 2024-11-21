import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // Correctly import and use useRouter

const Signup = () => {
  const router = useRouter(); // Call useRouter as a function
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (!username || !email || !password) {
      Alert.alert('Error', 'All fields are required.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Error', 'Please enter a valid email.');
    } else {
      Alert.alert('Success', 'Signup successful!');
      router.push('/'); // Navigate to the index page after signup
      // You can add logic here to handle the signup, e.g., API call.
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#5680E9', // Set background color here
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff', // White color for the title for contrast against blue background
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5, // Added rounded corners for the inputs
  },
});

export default Signup;
