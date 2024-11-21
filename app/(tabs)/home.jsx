import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image, Linking, Button, Alert } from 'react-native';

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  // Dummy data for search (you can replace this with actual data or API call)
  const data = [
    { id: '1', name: 'Weather' },
    { id: '2', name: 'Images' },
    { id: '3', name: 'Information' },
    { id: '4', name: 'Back' },
    { id: '5', name: 'Logout' }
  ];

  // Function to filter search results
  const handleSearch = (text) => {
    setSearchTerm(text);
    const results = data.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredResults(results);
  };

  // Function to search on Wikipedia
  const searchWikipedia = () => {
    if (searchTerm.trim() === '') {
      // Alert if the search term is empty
      Alert.alert('Error', 'Please enter a valid historical figure name.');
      return;
    }
    const baseURL = 'https://en.wikipedia.org/wiki/';
    const searchURL = `${baseURL}${encodeURIComponent(searchTerm.trim())}`;
    
    // Open Wikipedia page in a browser
    Linking.openURL(searchURL).catch((err) => console.error('Error opening Wikipedia', err));
  };

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <Text style={styles.header}>Welcome to Historical Hero Hub</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search any Historical Hero..."
        value={searchTerm}
        onChangeText={handleSearch}
      />

      {/* Search Button */}
      <Button title="Search on Wikipedia" onPress={searchWikipedia} />

      {/* Display Results */}
      {filteredResults.length > 0 ? (
        <FlatList
          data={filteredResults}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.resultText}>{item.name}</Text>
          )}
        />
      ) : (
        <Text style={styles.noResultsText}>No results found</Text>
      )}

      {/* Existing components, like weather, time, and buttons */}
      <View style={styles.iconsContainer}>
        <Text style={styles.date}>Naga City | OCT 25 Mon</Text>
        <Text style={styles.time}>10:25</Text>
        <Text style={styles.weatherIcon}>🌤️ Weather Icon</Text>

        <View style={styles.buttonContainer}>
          {/* Flexing the Logout button */}
          <View style={styles.logoutButton}>
            <Image source={require('./Icons/log out.png')} style={styles.logoutIcon} />
            <Text style={styles.logoutText}>Logout</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f8ff',  // Light blue background (like a webpage)
    flex: 1,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2e4a7b',  // A darker blue color for the header text
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
    borderRadius: 10,  // Rounded corners for input
    backgroundColor: '#fff',  // White background for search bar
  },
  resultText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  noResultsText: {
    fontSize: 18,
    color: '#999',
    textAlign: 'center',
    marginTop: 10,
  },
  iconsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  date: {
    fontSize: 18,
    color: '#444',
  },
  time: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2e4a7b',
    marginVertical: 10,
  },
  weatherIcon: {
    fontSize: 28,
  },
  buttonContainer: {
    marginTop: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e63946',  // Red background for logout button
    borderRadius: 10,  // Rounded corners for logout button
  },
  logoutIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',  // White text for the logout button
  },
});

export default HomeScreen;
