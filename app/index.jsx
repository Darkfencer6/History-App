import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../assets/constants';

export default function App() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#5680E9' }}>
      <StatusBar backgroundColor="#5680E9" style="light" />
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerText}>History App</Text>
        </View>

        {/* Main Content */}
        <ScrollView contentContainerStyle={styles.content}>
          {/* App Logo */}
          <Image
            source={images.logo}
            style={styles.logo}
            resizeMode="contain"
          />
          {/* Placeholder Image */}
          <Image
            source={images.portfolio}
            style={styles.placeholderImage}
            resizeMode="contain"
          />
          {/* Welcome Message */}
          <Text style={styles.welcomeText}>
            Welcome To History App! Discover the Past Like Never Before.
          </Text>
          <Text style={styles.subtitleText}>
            Join us and explore history together!
          </Text>

          {/* Buttons Section */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={() => router.push('/login')}
              style={[styles.button, styles.signInButton]}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push('/signup')}
              style={[styles.button, styles.signUpButton]}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Footer Section */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2024 History App. All Rights Reserved.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: '#4563DB',
    paddingVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 300, // Increased width
    height: 100, // Increased height
    marginBottom: 20,
  },
  placeholderImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 16,
    color: '#dcdcdc',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 15,
  },
  button: {
    width: '80%',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  signInButton: {
    backgroundColor: '#007BFF',
  },
  signUpButton: {
    backgroundColor: '#28a745',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#4563DB',
    paddingVertical: 15,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});
