import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, RefreshControl } from 'react-native';

const Profile = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    // Simulate a refresh with a timeout (you can add real data fetching here)
    setTimeout(() => {
      setRefreshing(false);  // End the refreshing state after 2 seconds
    }, 2000);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {/* Displaying the profile picture */}
      <Image style={styles.profileImage} source={require('./Icons/Adriane.jpg')} />

      {/* Profile Information */}
      <Text style={styles.name}>Adriane Gumahad</Text>
      <Text style={styles.info}>Birthdate: October 25, 2003</Text>
      <Text style={styles.info}>Gender: Male</Text>
      <Text style={styles.info}>Location: United States of Memes</Text>

      {/* Bio Section */}
      <View style={styles.bioContainer}>
        <Text style={styles.bio}>
          Hi, I’m Adriane Gumahad. I’m passionate about technology, innovation, and saving the world (sometimes through memes!). 
          Currently residing in the United States of Memes, I enjoy developing cutting-edge tech and sharing it with the world.
        </Text>
      </View>

      {/* Welcome Message */}
      <Text style={styles.welcome}>WELCOME TO YOUR PROFILE</Text>
    </ScrollView>
  );
};

// Styles for the Profile Screen
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,  // Circular image
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 5,
  },
  bioContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  bio: {
    fontSize: 16,
    color: '#bbb',
    textAlign: 'center',
    lineHeight: 22,
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 40,
  },
});

export default Profile;
