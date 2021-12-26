import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import StaffEditForm from '../components/StaffEditForm';
import { Text, View } from '../components/Themed';

export default function ModalScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personel Kartı</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <StaffEditForm staff={route.params} />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 8,
    height: 1,
    width: '80%',
  },
});
