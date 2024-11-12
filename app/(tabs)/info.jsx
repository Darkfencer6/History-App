import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Info = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
      {/* Header Section */}
      <Text style={styles.header}>About History App</Text>

      {/* App Description */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>What is the History App?</Text>
        <Text style={styles.text}>
          The History App is an educational tool designed for users of all ages to explore the lives and achievements of significant historical figures from around the world. Whether you are a student, teacher, or history enthusiast, this app offers a comprehensive guide to understanding the individuals who shaped history.
        </Text>
      </View>

      {/* Educational Purpose */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Educational Purpose</Text>
        <Text style={styles.text}>
          This app serves as a gateway to learn about key figures from various historical periods, including world leaders, innovators, and revolutionaries. The aim is to make history accessible and engaging for users, providing clear and concise information on each individual.
        </Text>
        <Text style={styles.text}>
          Children can use the app to supplement their history education, while adults can enjoy a quick reference guide to enhance their knowledge of world events and the people behind them.
        </Text>
      </View>

      {/* How the App Works */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>How the App Works</Text>
        <Text style={styles.text}>
          The app is designed with simplicity and ease of use in mind. Users can scroll through different historical figures, each displayed with an informative summary of their life, key contributions, and historical significance. The app covers figures from a variety of time periods and regions, offering a global perspective on history.
        </Text>
        <Text style={styles.text}>
          Each profile includes a brief biography, highlighting major achievements, challenges, and impacts. The app uses simple language to make the content easy to understand for younger audiences while remaining informative for adults.
        </Text>
      </View>

      {/* Why Use the App */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>Why Use the Historical Figures App?</Text>
        <Text style={styles.text}>
          The Historical Figures App is perfect for those who want to deepen their understanding of history without having to read lengthy textbooks or complicated articles. The app’s quick-access format allows you to learn in bite-sized pieces, making it ideal for casual learning, school projects, or personal enrichment.
        </Text>
        <Text style={styles.text}>
          By focusing on key figures and their roles in historical events, the app brings history to life, helping users see how individual actions have shaped the world we live in today.
        </Text>
      </View>

      {/* User-Friendly Design */}
      <View style={styles.section}>
        <Text style={styles.subHeader}>User-Friendly Design</Text>
        <Text style={styles.text}>
          The app is optimized for both children and adults, with a clean, intuitive interface that makes it easy to navigate through the content. Each figure's profile is laid out in a visually appealing way, ensuring that users stay engaged while reading.
        </Text>
        <Text style={styles.text}>
          With a focus on simplicity and user experience, the app provides an educational journey that's both enjoyable and informative. Scrollable content, large text, and organized sections help make learning history fun and accessible.
        </Text>
      </View>
    </ScrollView>
  );
};

// Styling for the App
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f8ff', // Light blue background color (Alice Blue)
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  section: {
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    color: '#555',
  },
});

export default Info;
