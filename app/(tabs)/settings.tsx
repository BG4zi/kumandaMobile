import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useDevices } from '@/context/DeviceContext';

export default function TabTwoScreen() {
  const { devices, setDevices } = useDevices();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={null}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Ayarlar</ThemedText>
      </ThemedView>

      <ThemedText>Cihaz bağlantılarını yönet.</ThemedText>
      <ThemedText>
        Cihazları bağlamak için IP adreslerini girin. Cihazı bulmak için otomatik arama
        yapabilirsiniz. Cihaz bulunamazsa, IP adresini manuel olarak girebilirsiniz.
      </ThemedText>

      {Object.entries(devices).map(([key, device]) => (
        <Collapsible key={device.id} title={`${device.connected ? '✅' : '❌'} ${device.name}`}>
          <ThemedText>Cihaz IP:</ThemedText>
          <TextInput
            style={styles.input}
            value={device.ip}
            onChangeText={(text) =>
              setDevices(prev => {
                const updated = { ...prev };
                updated[key as keyof typeof devices].ip = text;
                return updated;
              })
            }
            placeholder=""
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Toggle Connection"
              onPress={() => {
                setDevices(prev => {
                  const updated = { ...prev }; // create a shallow copy
                  const deviceKey = key as keyof typeof devices;
                  updated[deviceKey].toggleConnection(); // ✅ call method on the device
                  return updated;
                });
              }}
            />
          </View>
        </Collapsible>
      ))}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 6,
    marginVertical: 8,
  },

  buttonContainer: {
    marginTop: 10,
    alignSelf: 'flex-start',
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },

  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});