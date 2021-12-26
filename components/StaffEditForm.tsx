import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Button, Platform, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import Colors from '../constants/Colors';
import { Staff } from '../redux/reducers';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function StaffEditForm({ staff }: { staff: Staff }) {
  console.log(staff)

  const [staffFirstName] = React.useState(staff.firstName);
  const [staffLastName] = React.useState(staff.lastName); 
  const [staffDepartment] = React.useState(staff.department); 
  const [staffEmail] = React.useState(staff.email); 
  const [staffTitle] = React.useState(staff.title); 
  const [staffBirthDate] = React.useState(staff.birthDate); 
 
  const setSelectedValue = (...args) => {
    console.log(args);
  }

  return (
    <ScrollView>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Ad</Text>
        <TextInput key={staff.firstName} style={styles.input} defaultValue={staffFirstName} />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Soyad</Text>
        <TextInput key={staff.lastName} style={styles.input} defaultValue={staffLastName} />
      </View> 
      <View style={styles.formGroup}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput key={staff.lastName} style={styles.input} defaultValue={staffEmail} />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Departman</Text>
        <TextInput key={staff.lastName} style={styles.input} defaultValue={staffDepartment} /> 
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Ünvan</Text>
        <TextInput key={staff.lastName} style={styles.input} defaultValue={staffTitle} /> 
      </View>
      {/* <View style={styles.formGroup}>
        <Text style={styles.label}>Soyad</Text>
        <Picker
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View> */}

<View   style={styles.but}>
        <Button 
          title="Kaydet"
          onPress={() =>  ('Left button pressed')}
        /> 
      </View>

    </ScrollView>
    /*
    <View>
      <View style={styles.getStartedContainer}>
      <TextInput placeholder="Email" />
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Open up the code for this screen:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <MonoText>{staff.firstName}</MonoText>
        </View>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Change any of the text, save the file, and your app will automatically update.
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making changesasdasd
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    */
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold'
  },
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#cccccc',
    padding: 8,
    fontSize: 16
  },
  but: {  
    justifyContent: 'space-between',
  },
});
