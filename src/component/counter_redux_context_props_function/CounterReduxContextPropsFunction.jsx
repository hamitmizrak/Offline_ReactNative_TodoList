// REACT LIBRARIES
import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useCounterContext} from './CounterContext';

// REACT NATIVE LIBRARIES
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Alert,
} from 'react-native';

// Vector Icons
import Icon from 'react-native-vector-icons/FontAwesome';

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// Uyarı Kartı Bileşeni
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
  );
};

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION COUNTER
// const CounterReduxContextPropsFunction = ({ initialCount = 0, modalMessage = "Sayaç değeri hedefe ulaştı!" }) => {
const CounterReduxContextPropsFunction = ({route}) => {
  /////////////////////////////////////////////////
  // Props Veri Almak
  const {initialCount, modalMessage} = route.params;

  /////////////////////////////////////////////////
  // Redux hookları
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  /////////////////////////////////////////////////
  // Context hook
  const {info} = useCounterContext();

  /////////////////////////////////////////////////
  // UseRef
  const buttonClickCount = useRef(0); // Bu hooks(kanca) bir bileşenin yaşam döngüsü  boyunca kalır.
  // useRef: Hooks için referans almak için kullanılır.
  // useRef: Renderlar arasında kalıcığı sağlar. Bileşenin yeniden render edilmesine neden olmaz.

  /////////////////////////////////////////////////
  // State ve diğer hooklar
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const targetCount = 5; // Sabit bir hedef değer olarak ayarladık

  // useEffect: Sayaç belirli bir değere ulaştığında modal göster
  useEffect(() => {
    if (count === targetCount) {
      setIsAlertVisible(true);
    }
    console.log(`Counter Function useEffect Hook: counter ${count}`);

    // Konsol log için useRef kullanımı
    console.log(`Button clicked ${buttonClickCount.current} times`);

    // Temizleme işlemi örneği
    return () => {
      console.log('useEffect cleanup');
    };
  }, [count]);

  /////////////////////////////////////////////////
  // useMemo: Counter değerinin iki katını hesapla
  const doubledValue = useMemo(() => {
    console.log('Calculating doubled value...');
    return count * 2;
  }, [count]);

  // useCallback: Artırma
  const handleIncrease = useCallback(() => {
    dispatch({type: 'INCREMENT'});
    buttonClickCount.current += 1;
  }, [dispatch]);

  /////////////////////////////////////////////////
  // useCallback: Azaltma fonksiyonları
  const handleDecrease = useCallback(() => {
    dispatch({type: 'DECREMENT'});
    // Eğer sayac 0'dan küçük olursa, sayacı sıfırla
    if (count <= 0) {
      Alert.alert("Counter Function\nSayaç 0'dan küçük olamaz!");

      // 1.YOL
      dispatch({type: 'RESET'}); //sayaçı sıfırla
      buttonClickCount.current = initialCount; //Buton tıklama sayısını başlangıç değerine getir

      // 2.YOL
      //handleReset();
    } else {
      buttonClickCount.current -= 1;
    }
  }, [count, dispatch]);

  // Reset fonksiyonu
  const handleReset = () => {
    dispatch({type: 'RESET'});
    buttonClickCount.current = initialCount;
  };

  /////////////////////////////////////////////////
  // Modal kapatma fonksiyonu
  const closeAlert = () => {
    setIsAlertVisible(false);
  };

  /////////////////////////////////////////////////
  // Return
  return (
    // ImageBackground
    <ImageBackground
      source={require('../../assets/redux.webp')}
      style={styles.imageBackground}>
      <View style={styles.container}>
        <Text style={styles.counterText}> Sayaç: {count}</Text>
        <Text style={styles.counterText}> İki Katı: {doubledValue}</Text>
        <Text style={styles.infoText}>{info}</Text>
        <View style={styles.buttonContainer}>
          {/* Artırma */}
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'blue'}]}
            onPress={handleIncrease}>
            <Icon name="plus" size={18} color="#fff" />
            <Text style={styles.buttonText}>Artır</Text>
          </TouchableOpacity>

          {/* Azaltma */}
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'green'}]}
            onPress={handleDecrease}>
            <Icon name="minus" size={18} color="#fff" />
            <Text style={styles.buttonText}>Azalt</Text>
          </TouchableOpacity>

          {/* Temizle */}
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'red'}]}
            onPress={handleReset}>
            <Icon name="refresh" size={18} color="#fff" />
            <Text style={styles.buttonText}>Temizle</Text>
          </TouchableOpacity>
        </View>

        {/* Alert Modal */}
        <AlertCard
          visible={isAlertVisible}
          onClose={closeAlert}
          message={modalMessage}
        />
      </View>
    </ImageBackground>
  );
};

// EXPORT FUNCTION
export default CounterReduxContextPropsFunction;

////////////////////////////////////////////////////////////////
// STYLE
const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover', // cover, container, stretch
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
    color: 'blue',
  },

  infoText: {
    fontSize: 16,
    marginBottom: 20,
    color: 'gray',
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
  },

  alertBox: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  alertMessage: {
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
  },
  alertCloseButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
}); // end styles
