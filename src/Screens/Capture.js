import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Modal} from 'react-native';

export default function Capture(props) {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={{fontSize: 22, fontFamily: 'aerial'}}>
          Media App By Shubham Nishad
        </Text>
      </View>
      <View style={styles.botContainer}>
        <TouchableOpacity
          style={styles.captureButton}
          onPress={() => setVisible(true)}>
          <Text style={{fontFamily: 'aerial', fontSize: 18}}>
            Capture / View Media
          </Text>
        </TouchableOpacity>
      </View>

      {visible ? (
        <Modal animationType="slide" transparent={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity style={[styles.button, styles.uploadButton]}>
                <Text
                  style={{
                    fontFamily: 'aerial',
                    fontSize: 15,
                  }}>
                  Capture Media
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.uploadButton]}
                onPress={() => {
                  props.navigation.navigate('Gallery');
                  setVisible(!visible);
                }}>
                <Text
                  style={{
                    fontFamily: 'aerial',
                    fontSize: 15,
                  }}>
                  Open Gallery
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.uploadButton]}
                onPress={() => setVisible(!visible)}>
                <Text
                  style={{
                    fontFamily: 'aerial',
                    fontSize: 15,
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  captureButton: {
    backgroundColor: 'skyblue',
    width: '60%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: `#E5EBF0`,
    borderRadius: 60,
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#F7812E',
    borderColor: '#F7812E',
    borderWidth: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  uploadButton: {
    backgroundColor: 'white',
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  topContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
  },
  botContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
    marginBottom: 10,
  },
});
