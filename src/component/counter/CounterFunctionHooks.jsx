// Snippet: React Native Snippet author: jundat95
// imp
// rnc => React Native Class Component
// rnce => React Native Class Export Component
// rnpc => React Native Class Export PureComponent Component

// rnf => React Native Function Component
// rnfe => React Native Function Export Component
// rnfes => React Native Function Export Component styles
// rnfs => React Native Function Component styles

//////////////////////////////////////////////////////////////////////////////////////////
// REACT
import React, {useState,useEffect,useRef,useMemo,useCallback,useReducer} from 'react'

// REACT NATIVE
import { StyleSheet, Text, View,Modal,ImageBackground,TouchableOpacity } from 'react-native'

// Vector Icons
import Icon from 'react-native-vector-icons/FontAwesome';
//////////////////////////////////////////////////////////////////////////////////////////

// Uyarı Kart Bileşi
const AlertCard = ({visible, onClose, message}) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.alertContainer}>
        <View style={styles.alertBox}>
          <Text style={styles.alertMessage}>{message}</Text>
          <TouchableOpacity style={styles.alertCloseButton} onPress={onClose}>
            <Text style={styles.alertCloseButtonText}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  ); //end return
}; //end AlertCard


//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// FUNCTION
const CounterFunctionHooks = () => {
  return (
    <View>
      <Text>CounterFunctionHooks</Text>
    </View>
  )
}

// EXPORT
export default CounterFunctionHooks


//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// STYLES
const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover', //cover,container,stretch
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#383E42', // antrasit(Gri Tonları)
  },

  counterText: {
    fontSize: 25,
    marginBottom: 18,
    // color: '#000',
    // color: '#000000',
    color: 'black',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    paddingHorizontal: 10,
  },

  button: {
    flex: 1,
    padding: 8,
    margin: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 13,
    color: '#fff',
  },

  // Alert Modal
  alertContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    // padding:20,
    // borderRadius:10,
  },

  alertBox: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
  },
  alertMessageer: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  alertCloseButton: {
    top: 10,
    right: 10,
    backgroundColor: '#6200ee',
    borderRadius: 5,
    padding: 6,
    position: 'absolute',
    elevation: 5,
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    // borderRadius: 5,
    // marginTop: 10,
    // padding: 10,
    // backgroundColor:'#f44336',
    // borderRadius: 5,
    // color:'#fff',
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // alignItems:'center',
  },
  alertCloseButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
}); //end styles

