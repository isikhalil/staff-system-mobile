 
import { Button, Platform, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
 
import { Text, View } from '../components/Themed';

export default function TabThreeScreen() {

  const [staffFirstName] = '';
  const [staffLastName] = ''; 
  const [staffDepartment] = ''; 
  const [staffEmail] = ''; 
  const [staffTitle] = ''; 

  return (
    <ScrollView>
       <View style={styles.container}>
       <View style={styles.formGroup}>
        <Text style={styles.label}>Ad</Text>
        <TextInput key={staffFirstName} style={styles.input} defaultValue={staffFirstName} />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Soyad</Text>
        <TextInput key={staffLastName} style={styles.input} defaultValue={staffLastName} />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput key={staffEmail} style={styles.input} defaultValue={staffEmail} />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Departman</Text>
        <TextInput key={staffDepartment} style={styles.input} defaultValue={staffDepartment} /> 
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Ünvan</Text>
        <TextInput key={staffTitle} style={styles.input} defaultValue={staffTitle} /> 
      </View>

<View   style={styles.but}>
        <Button 
          title="Kaydet"
          onPress={() =>  ('Left button pressed')}
        /> 
      </View>
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
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
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
    margin: 16,
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
