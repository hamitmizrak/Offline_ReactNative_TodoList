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
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useReducer,
} from 'react';

// REACT NATIVE
import {
  StyleSheet,
  Text,
  View,
  Modal,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';

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

// useReducer : Birden fazla durumun birlikte çalışması gerektiği zamanlarda kullanılabilir.
// useReducer : Karmaşık durum(state) yönetimi zor olan yapılarda kullanılabilir.
// useReducer : Birden gazla ilgili durumların birlikte çalışması gerektiği zamanlarda kullanırız.
// Durum güncellemerini daha kontrollü ve öngürebilir olmasını sağlar.
// reducer(state, action)
// state: Mevcut durumu temsil
// action: Durumuhn nasıl değişceğini tanımlar
// reducer: initialState başlangıç durumudur.
// dispatch: Durumunu güncellemek için kullanılan fonksiyondur.

const initialState = {count: 0};

// reducer fonksiyonları
// Switch ifadesinde hangi eylem türlerinde nasıl bir durum olduğunda ne yapacağını tanımlar.
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return initialState;
    default:
      throw new Error();
  } //end switch
} //end reducer

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// FUNCTION
const CounterFunctionHooks = () => {
  ///////////////////////////
  // STATE
  const [isAlertVisible, setIsAlertVisible] = useState(false); // Modal
  const [state, dispatch] = useReducer(reducer, initialState); // useReducer
  const buttonClickCount = useRef(0); //
  const minusCount = 5; // sayacın azaltacağı değeri

  ///////////////////////////
  // EFFECTS
  // Bileşenlerde yükleme veya güncelleme yapıldığında çalışır.
  // Örneğin: fetching, DOM güncelleştirmelerinde
  // 2 parametre olarak alır.
  // 1.parametre Yan etki fonksiyonu(Effect Function)
  // 2.parametre Bağımlılıklar dizi: Eğer boş bir dizi bırakılırsa yan etki fonksiyonu yalnızca ilk kez yüklendiğinde çalışır (componentDidMount)
  // Eğer bağımlılıklar diziye bir eleman eklenirse, y bu değer değiştiğinde yan etki fonksiyonu yani 1.parametrede çalışır.
  useEffect(() => {
    // Asyn-Await
    // 1.YOL
    /*
    const checkCounterAsyncAwait = async () => {
      console.log("Counter Function useEffect Hook: counter 5 oldu!");
      await new Promise(resolve => {
        if (state.count === minusCount) {
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
    if (state.count === minusCount) {
      setIsAlertVisible(true); // Alert aç

      /*
      buttonClickCount.current++; // Alertın kaç kez tıklandığını tutar
      setTimeout(() => {
        setIsAlertVisible(false); // Alert kapanır
        dispatch({type:'reset'}); // sayacı sıfırlar
      }, 2000); // Alertın kaç saniye süreceklerini tutar
      */
    } //end if

    // useEffect
    console.log(`Counter Function useEffect Hook: ${state.count}`);

    // useRef kullanımı
    console.log(`Button Clicked Count: ${buttonClickCount.current} times`);

    // Temizleme işlem örneği
    return () => {
      console.log('useEffect cleanup');
      console.log('Counter Function useEffect Hook: Component will unmount');
    }; //end useEffect
  }, [state.count]); //end useEffect

  ///////////////////////////
  // useMemo: counter değerinin 2 katı, 2. parametre olarak verilerek optimize edilir.
  /*
  useMemo: optimizasyonu sağlar.  hesaplamalar sonucu hatırlamak için değişkenlerde 1 tanesi değiştinde değişirir.
  */
  const doubledValue = useMemo(() => {
    console.log('Counter Function useMemo Hook: Calculating doubledValue');
    return state.count * 2;
  });

  ///////////////////////////
  // useCallback: Artırma ve azaltma fonksiyonlar
  // useCallback : bir fonksiyonun referansını yeniden oluşturmayı engeller
  // useCallback: optimizasyonu sağlar.

  // Artırma
  const handleIncrease = useCallback(() => {
    dispatch({type: 'increment'});
    buttonClickCount.current++;
    //buttonClickCount.current+=1;
  }, []);

  // Azaltma
  const handleDecrease = useCallback(() => {
    if (buttonClickCount.current <= 0) {
      Alert.alert("Counter Function\nSayaç 0'dan küçük olamaz!");
    } else {
      dispatch({type: 'decrement'});
      buttonClickCount.current--;
      //buttonClickCount.current-=1;
    }
  }, []);

  // Sıfırlama(Resetleme)
  const handleReset = () => {
    dispatch({type: 'reset'});
    buttonClickCount.current = 0;
  };

  ///////////////////////////
  // Modal Kapatma fonksiyonları
  const closeAlert = () => {
    setIsAlertVisible(false);
  };

  // showAlert Alert butona tıkladığımda göstersin
  const showAlert = () => {
    setIsAlertVisible(true);
  };

  ///////////////////////////
  // Return
  return (
    <ImageBackground
      //source={{uri: 'https://via.placeholder.com/600x800'}} //internet uri
      source={require('../../assets/device.webp')}
      style={styles.imageBackground}>
      <View style={styles.container}>
        <Text style={styles.counterText}> Sayaç: {state.count}</Text>
        <Text style={styles.counterText}> Sayaçın 2 Katı: {doubledValue}</Text>
        <View style={styles.buttonContainer}>
          {/* 1.YOL ARTIRMA */}
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'blue'}]}
            onPress={handleIncrease}>
            <Icon name="plus" size={18} color="#fff" />
            <Text style={styles.buttonText}>Artır</Text>
          </TouchableOpacity>
          {/* 2.YOL ARTIRMA */}
          {/* <Button title="Sayaç Artırma" onPress={handleIncrease} /> */}

          {/* 1.YOL AZALTMA */}
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'green'}]}
            onPress={handleDecrease}>
            <Icon name="minus" size={18} color="#fff" />
            <Text style={styles.buttonText}>Azalt</Text>
          </TouchableOpacity>
          {/* 2.YOL AZALTMA */}
          {/* <Button title="Sayaç Azalt" onPress={this.handleDecrease} /> */}

          {/* TEMİZLEME(RESET) */}
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'red'}]}
            onPress={handleReset}>
            <Icon name="refresh" size={18} color="#fff" />
            <Text style={styles.buttonText}>Temizle</Text>
          </TouchableOpacity>

          {/* ALERT MODAL */}
          <AlertCard
            visible={isAlertVisible}
            onClose={closeAlert}
            // message={`Sayaç değeri: ${buttonClickCount.current}`}
            message={"Sayaç değeri: "+ buttonClickCount.current}
          />
        </View>
      </View>
    </ImageBackground>
  ); //end return
}; //end CounterFunctionHooks

// EXPORT
export default CounterFunctionHooks;

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

  // Alert Box
  alertBox: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
  },

  // Alert Message
  alertMessageer: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },

  // Alert Close Button
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

  // Alert Close ButtonText
  alertCloseButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
}); //end styles
