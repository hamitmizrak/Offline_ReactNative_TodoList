// rfce => TAB (React JS)

// REACT LIBRARIES
import React, {useCallback, useEffect, useMemo, useState} from 'react';

// REACT NATIVE LIBRARIES
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Modal,
} from 'react-native';

// Vector Icons
import Icon from 'react-native-vector-icons/FontAwesome';

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

// FUNCTION COUNTER
// 1.YOL
//function CounterFunction() {
const CounterFunction = () => {
  // State (Durum) Default başlangıç değerleri
  const [counter, setCounter] = useState(0);

  // Artırma 5 olursa
  const [minusCount, setMinusCount] = useState(5);

  // useEffect 
  useEffect(()=>{

    // Asyn-Await 
    // 1.YOL
    /*
    const checkCounterAsyncAwait = async () => {
      console.log("Counter Function useEffect Hook: counter 5 oldu!");
      await new Promise(resolve => {
        if (counter === 5) {
          Alert.alert('Sayaç 5 oldu!');
          // 2 saniye sonra göstersin
          const timeoutModalId= setTimeout(() => {
             //showAlert();
            setIsAlertVisible(true);
          }, 2000);
    
          // Temizleme işlemlerinde
          return() => {
            clearTimeout(timeoutModalId);
          }
        }
      })
    };//end asyn
    // Async-Await Calling
    checkCounterAsyncAwait();
    */

    // 2.YOL 
    if(counter === minusCount) {
      setIsAlertVisible(true);
    }
  },[counter])

  ////////////////////////////////////////////////////////////////
  // Alert Modal
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  // showAlert Alert butona tıkladığımda göstersin
  const showAlert = () => {
    setIsAlertVisible(true);
  };

  // showAlert Alert butona tıkladığımda kapatsın
  const closeAlert = () => {
    setIsAlertVisible(false);
  };

  ////////////////////////////////////////////////////////////////
  // FUNCTION
  // Increase Counter (Sayaç değerini 1 artırır)
  const inCreaseCounter = () => {
    setCounter(prevCounter => prevCounter + 1);

    // Eğer sayac 5'dan büyük olursa, alert göster
    // 1.YOL
    // if (counter === 5) {
    //   Alert.alert('Sayaç 5 oldu!');
    //   showAlert();
    // }

    // 2.YOL (useEffecti Kullandım)
  };

  // Decrease Counter (Sayaç değerini 1 azaltır)
  const deCreaseCounter = () => {
    // Eğer sayac 0'dan küçük olursa, sayacı sıfırla
    if (counter <= 0) {
      Alert.alert("Counter Function\nSayaç 0'dan küçük olamaz!");
      setCounter(0);
    } else {
      setCounter(prevCounter => prevCounter - 1);
    }
  };

  // Reset Counter (Sayaçı sıfırlar)
  // 1.YOL
  /*
  const resetCounter = () => {
    setCounter(0);
  };
  */

  // 2.YOL  => useCallback
  /*
  useCallback(()=>{},[]) 
  bu hooks: Belirli bağımlılıklar kümesine bağlı olarak geri çağırma fonksiyonlarını oluşturmak içindir
  Bu hook performans ve iyileştirmeler için kullanırız.
  */
 
  const resetCounter = useCallback(() => {
     console.log("Reset için: useCallback kullanıldı");
    setCounter(0);
  },[]);
  
  
  ////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////
  // Return
  return (
    <ImageBackground
      //source={{uri: 'https://via.placeholder.com/600x800'}} //internet uri
      source={require('../../assets/device.webp')}
      style={styles.imageBackground}>
      <View style={styles.container}>
        <Text style={styles.counterText}> Sayaç: {counter}</Text>
        <View style={styles.buttonContainer}>
          {/* 1.YOL ARTIRMA */}
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'blue'}]}
            onPress={inCreaseCounter}>
            <Icon name="plus" size={18} color="#fff" />
            <Text style={styles.buttonText}>Artır</Text>
          </TouchableOpacity>
          {/* 2.YOL ARTIRMA */}
          {/* <Button title="Sayaç Artırma" onPress={inCreaseCounter} /> */}

          {/* 1.YOL AZALTMA */}
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'green'}]}
            onPress={deCreaseCounter}>
            <Icon name="minus" size={18} color="#fff" />
            <Text style={styles.buttonText}>Azalt</Text>
          </TouchableOpacity>

          {/* 2.YOL AZALTMA */}
          {/* <Button title="Sayaç Azalt" onPress={this.deCreaseCounter} /> */}

          {/* RESET */}
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'red'}]}
            onPress={resetCounter}>
            <Icon name="minus" size={18} color="#fff" />
            <Text style={styles.buttonText}>Temizle</Text>
          </TouchableOpacity>

          {/* ALERT MODAL */}
          <View>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: 'orange'}]}
              onPress={showAlert}>
              <Icon name="minus" size={18} color="#fff" />
              <Text style={styles.buttonText}>Modal</Text>
            </TouchableOpacity>
            <AlertCard
              visible={isAlertVisible}
              onClose={closeAlert}
              message="Modal Alert Çalıştır"
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  ); //end return
}; //end Function

// EXPORT FUNCTION
export default CounterFunction;

////////////////////////////////////////////////////////////////
// STYLE
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
