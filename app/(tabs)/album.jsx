import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const Album = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Album Header */}
      <Text style={styles.header}>HISTORICAL HEROES</Text>

      {/* Images and Captions */}
      <View style={styles.imageContainer}>
        
        {/* First Image - Adolf Hitler */}
        <View style={styles.imageBox}>
          <Image style={styles.image} source={require("./Icons/Hitler.jpg")} />
          <Text style={styles.caption}>Adolf Hitler</Text>
        </View>

        {/* Second Image - Joseph Stalin */}
        <View style={styles.imageBox}>
          <Image style={styles.image} source={require("../(tabs)/Album/Stalin.jpg")} />
          <Text style={styles.caption}>Joseph Stalin</Text>
        </View>

        {/* Third Image - Harry Truman */}
        <View style={styles.imageBox}>
          <Image style={styles.image} source={require("../(tabs)/Album/Harry.jpg")} />
          <Text style={styles.caption}>Harry Truman</Text>
        </View>

        {/* Fourth Image - Winston Churchill */}
        <View style={styles.imageBox}>
          <Image style={styles.image} source={require("../(tabs)/Album/Winston.jpg")} />
          <Text style={styles.caption}>Winston Churchill</Text>
        </View>
      </View>
    </ScrollView>
  );
};

// Styles for the Album Screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5dc',  // Beige background for a vintage feel
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2f4f4f',  // Dark Slate Gray color for a historical feel
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageBox: {
    width: '48%',  // Each image takes about half of the screen width with spacing
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,  // Slightly rounded corners for a modern touch
    marginBottom: 10,
  },
  caption: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#333',  // Dark gray for contrast with the light background
  },
});

export default Album;
