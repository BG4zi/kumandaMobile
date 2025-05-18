import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useDevices } from '@/context/DeviceContext';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const { devices, setDevices } = useDevices();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={null}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heroTitle}>kumandaMobile</Text>
        <View style={styles.cardContainer}>
          {Object.entries(devices).map(([key, device]) => (
            <Pressable style={styles.card}>
              <Text style={styles.cardText}>{ device.name + `${device.connected ? '✅' : '❌ '}`} KEY: {key}  </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </ParallaxScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#1D3D47',
    textAlign: 'center',
  },
  cardContainer: {
    width: '100%',
    gap: 12,
  },
  card: {
    backgroundColor: '#A1CEDC',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3, // Android gölgelendirme
    shadowColor: '#000', // iOS gölgelendirme
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1D3D47',
  },
});
