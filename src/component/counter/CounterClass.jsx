// rcc = TAB (React JS)

// REACT LIBRARIES
import React, {Component} from 'react';

// REACT NATIVE LIBRARIES
import {View, Text, Button, StyleSheet, TouchableOpacity, Alert} from 'react-native';

// Vector Icons
import Icon from'react-native-vector-icons/FontAwesome';

// CLASS COUNTER
//export default class CounterClass extends Component {
class CounterClass extends Component {
  // Constructor
  constructor(props) {
    super(props);
    // Durum (State) Default başlangıç değerleri
    this.state = {
      counter: 0,
    };

    // BIND
    this.inCreaseCounter = this.inCreaseCounter.bind(this);
    this.deCreaseCounter = this.deCreaseCounter.bind(this);
  } //end constructor

  ////////////////////////////////////////////////////////////////

  // FUNCTION
  // Increase Counter (Sayaç değerini 1 artırır)
  inCreaseCounter = () => {
    this.setState(prevState => ({counter: prevState.counter + 1}));
  };

  // Decrease Counter (Sayaç değerini 1 azaltır)
  deCreaseCounter = () => {
    // Eğer sayac 0'dan küçük olursa, sayacı sıfırla
    if (this.state.counter <= 0) {
      Alert.alert("Sayaç 0'dan küçük olamaz!");
      this.setState({counter: 0});
    } else {
      this.setState(prevState => ({counter: prevState.counter - 1}));
    }
  };

  ////////////////////////////////////////////////////////////////
  // Render
  render() {
    // Return
    return (
      <View style={styles.container}>
        <Text style={styles.counterText}> Sayaç: {this.state.counter}</Text>
        <View style={styles.buttonContainer}>
          {/* 1.YOL ARTIRMA */}
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'red'}]}
            onPress={this.inCreaseCounter}>
              <Icon name="plus" size={18} color="#fff" />
            <Text style={styles.buttonText}>Artır</Text>
          </TouchableOpacity>
          {/* 2.YOL ARTIRMA */}
          {/* <Button title="Sayaç Artırma" onPress={this.inCreaseCounter} /> */}

          {/* 1.YOL AZALTMA */}
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'blue'}]}
            onPress={this.deCreaseCounter}>
              <Icon name="minus" size={18} color="#fff" />
            <Text style={styles.buttonText}>Azalt</Text>
          </TouchableOpacity>

          {/* 2.YOL AZALTMA */}
          {/* <Button title="Sayaç Azalt" onPress={this.deCreaseCounter} /> */}
        </View>
      </View>
    ); //end return
  } //end render
} //end class

// EXPORT COUNTER CLASS
export default CounterClass;

////////////////////////////////////////////////////////////////

// STYLE
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#383E42', // antrasit(Gri Tonları)
  },

  counterText: {
    fontSize: 25,
    marginBottom: 18,
    color: '#fff',
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
}); //end styles
