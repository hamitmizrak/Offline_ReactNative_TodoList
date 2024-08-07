// IMPORT
// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// REACT NATIVE LIBRARIES
import {
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';

// Blur View
import {BlurView} from '@react-native-community/blur';

// COUNTER CLASS
import CounterClass from './counter/CounterClass';

// COUNTER FUNCTION
import CounterFunction from './counter/CounterFunction';

// COUNTER FUNCTION HOOKS
import CounterFunctionHooks from './counter_hooks/CounterFunctionHooks';

// COUNTER FUNCTION HOOKS REDUX CONTEXT PROPS
import CounterReduxContextPropsFunction from './counter_redux_context_props_function/CounterReduxContextPropsFunction';

// Redux Import
import {Provider} from 'react-redux';
import StoreRedux from './counter_redux_context_props_function/StoreRedux';
import {CounterProvider} from './counter_redux_context_props_function/CounterContext';

// STACK (CREATE)
const Stack = createNativeStackNavigator();

// NAVIGATION (HOME)
// 1.YOL => function Home(){return()}
// 2.YOL => const Home=()=>{return()}
function Home() {
  return (
    // Redux
    <Provider store={StoreRedux}>
      {/* Context */}
      <CounterProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {/* Home */}
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'Anasayfaya Hoşgeldiniz.'}}
            />

            {/* Profile */}
            <Stack.Screen
              name="ProfileName"
              component={ProfileScreen}
              options={{title: 'Profile'}}
            />

            {/* Device Information */}
            <Stack.Screen
              name="DeviceInformationName"
              component={DeviceInformationScreen}
              options={{title: 'Device Information'}}
            />

            {/* Counter Class Component */}
            <Stack.Screen
              name="CounterClassName"
              component={CounterClass}
              options={{title: 'Counter Class'}}
            />

            {/* Counter Function Component */}
            <Stack.Screen
              name="CounterFunctionName"
              component={CounterFunction}
              options={{title: 'Counter Function'}}
            />

            {/* Counter Function Hook Component */}
            <Stack.Screen
              name="CounterFunctionHooks"
              component={CounterFunctionHooks}
              options={{title: 'Counter Function Hooks'}}
            />

            {/* Counter Function Redux- Context-Props Hook Component */}
            <Stack.Screen
              name="CounterReduxContextPropsFunctionHooks"
              component={CounterReduxContextPropsFunction}
              options={{
                title: 'Counter Function Redux Context Props Function Hooks',
              }}
              ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </CounterProvider>
    </Provider>
  ); //end return
} // end Home

// EXPORT
export default Home;

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// PAGES (Screen)
// 1- Profile Screen
const ProfileScreen = ({navigation, route}) => {
  return <Text>Profile Sayfasına Hoşgeldiniz: {route.params.name}</Text>;
}; //end ProfileScreen

// 2- Device InformationScreen
const DeviceInformationScreen = ({navigation, route}) => {
  return (
    <Text>Device Information Sayfasına Hoşgeldiniz: {route.params.name}</Text>
  );
}; // end DeviceInformationScreen

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// 3- Home Screen
const HomeScreen = ({navigation, route}) => {
  const counterFunction = () =>
    //Alert.alert('Counter Function', 'Resme Tıklandı.');
    navigation.navigate('CounterFunctionName', {
      name: 'CounterFunctionName',
    });

  // RETURN
  return (
    <View style={styles.main}>
      {/* /////////////////////////////////////////////////////////////////////////// */}

      {/* Header */}
      <View style={styles.header}>
        <TextInput placeholder="Arama" style={styles.searchInput} />
        <Text style={styles.viewAll}>view all</Text>
      </View>

      {/* /////////////////////////////////////////////////////////////////////////// */}
      {/*  Populer Category */}
      <View style={styles.categoryContainer}>
        {/*  Populer Category:1 */}
        <TouchableOpacity
          style={styles.categoryButton}
          title="device"
          onPress={() =>
            navigation.navigate('DeviceInformationName', {
              name: 'DeviceInformationName',
            })
          }>
          <Image
            source={require('../assets/device.webp')}
            style={styles.categoryIcon}
          />
          <Text>Device</Text>
        </TouchableOpacity>

        {/*  Populer Category:2 */}
        <TouchableOpacity
          style={styles.categoryButton}
          title="Profile"
          onPress={() =>
            navigation.navigate('ProfileName', {name: 'ProfileName'})
          }>
          <Image
            source={require('../assets/profile.webp')}
            style={styles.categoryIcon}
          />
          <Text>Profile</Text>
        </TouchableOpacity>

        {/*  Populer Category:3 */}
        <TouchableOpacity style={styles.categoryButton}>
          <Image
            source={require('../assets/device.webp')}
            style={styles.categoryIcon}
          />
          <Text>Device</Text>
        </TouchableOpacity>
      </View>

      {/* /////////////////////////////////////////////////////////////////////////// */}
      {/* CARD */}
      {/* Component-1 */}
      <ScrollView horizontal={true} style={styles.componentContainer}>
        {/* Counter Class Component-1 */}
        <View style={styles.componentCard}>
          <TouchableOpacity
            title="Counter Class"
            onPress={() =>
              navigation.navigate('CounterClassName', {
                name: 'CounterClassName',
              })
            }>
            <Image
              source={require('../assets/device.webp')}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
                backgroundColor: '#000', // for testing purposes only
              }}
            />
            {/* <Text></Text> */}
          </TouchableOpacity>

          {/* Blur Effect */}
          <BlurView style={styles.absolute} blurType="light" blurAmount={10}>
            <Text style={styles.componentText}>Counter Class Component</Text>
          </BlurView>
        </View>

        {/* Counter Function Component-2 */}
        <View style={styles.componentCard}>
          <TouchableOpacity onPress={counterFunction}>
            <Image
              source={require('../assets/profile.webp')}
              style={styles.componentImage}
            />
          </TouchableOpacity>
          <Text style={styles.componentText}>Counter Function Component</Text>

          {/* Blur Effect */}
          <BlurView style={styles.absolute} blurType="light" blurAmount={10}>
            <Text style={styles.componentText}>Counter Function Component</Text>
          </BlurView>
        </View>
      </ScrollView>

      {/* /////////////////////////////////////////////////////////////////////////// */}
      {/* CARD */}
      {/* Component-1 */}
      <ScrollView horizontal={true} style={styles.componentContainer}>
        {/* Counter Function Component-3 Hooks */}
        <View style={styles.componentCard}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('CounterFunctionHooks', {
                name: 'CounterFunctionHooks',
              })
            }>
            <Image
              source={require('../assets/hooks.webp')}
              style={styles.componentImage}
            />
          </TouchableOpacity>

          {/* Blur Effect */}
          <BlurView style={styles.absolute} blurType="light" blurAmount={10}>
            <Text style={styles.componentText}>Counter Function Hooks</Text>
          </BlurView>
        </View>

        {/* Counter Function Redux Context Props Component-4 Hooks */}
        <View style={styles.componentCard}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('CounterReduxContextPropsFunctionHooks', {
                name: 'CounterReduxContextPropsFunctionHooks',

                // (Props) Passing parameters
                initialCount: '0',
                modalMessage: 'Sayaç değeri hedefe ulaştı!',
              })
            }>
            <Image
              source={require('../assets/redux.webp')}
              style={styles.componentImage}
            />
          </TouchableOpacity>

          {/* Blur Effect */}
          <BlurView style={styles.absolute} blurType="light" blurAmount={10}>
            <Text style={styles.componentText}>
              Counter Redux Context Props
            </Text>
          </BlurView>
        </View>
      </ScrollView>
    </View>

    // Home page Container
    // <View style={styles.container}>
    //   <View style={styles.buttonRow}>
    //     {/* Profile */}
    //     <View style={{marginTop: 5, marginBottom: 5}}>
    //       <Button
    //         color="red"
    //         title="Profile"
    //         onPress={() =>
    //           navigation.navigate('ProfileName', {name: 'ProfileName'})
    //         }></Button>
    //     </View>

    //     {/* Device */}
    //     <View style={{marginTop: 5, marginBottom: 5}}>
    //       <Button
    //         color="blue"
    //         title="Device Information"
    //         onPress={() =>
    //           navigation.navigate('DeviceInformationName', {
    //             name: 'DeviceInformationName',
    //           })
    //         }></Button>
    //     </View>
    //   </View>

    //   <View  style={styles.buttonRow} >
    //     {/* Counter Class */}
    //   <View style={{marginTop: 5, marginBottom: 5}}>
    //     <Button
    //       color="orange"
    //       title="Counter Class"
    //       onPress={() =>
    //         navigation.navigate('CounterClassName', {name: 'CounterClassName'})
    //       }></Button>
    //   </View>

    //   {/* Counter Function */}
    //   <View style={{marginTop: 5, marginBottom: 5}}>
    //     <Button
    //       color="red"
    //       title="Counter Function"
    //       onPress={() =>
    //         navigation.navigate('CounterFunctionName', {
    //           name: 'CounterFunctionName',
    //         })
    //       }></Button>
    //   </View>
    //   </View>

    // </View>
  ); //end return
}; // end Home Screen

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// CSS
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  },

  searchInput: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 10,
    borderColor: 'blue',
    height: 35,
    marginBottom: 15,
    opacity: 0.8,
    padding: 10,
  },
  viewAll: {
    color: 'blue',
  },

  //   category Container
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  categoryIcon: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    borderRadius: 10,
  },

  categoryButton: {
    alignItems: 'center',
  },
  componentContainer: {
    padding: '10px',
  },
  componentCard: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  componentImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#cccccc', // for testing purposes only
  },

  absolute: {
    position: 'absolute',
    top: 130,
    left: 0,
    bottom: 0,
    right: 0,
  },
  componentText: {
    position: 'absolute',
    bottom: 4,
    left: 22,
    fontSize: 10,
    color: 'rgba(0,0,0,.6)',
    padding: 2,
    borderRadius: 10,
  },
  // componentText: {
  //   position: 'absolute',
  //   bottom: 4,
  //   left: 10,
  //   fontSize: 10,
  //   color: 'white',
  //   backgroundColor:"black",
  //   padding:5,
  //   opacity:0.8,
  //   borderRadius: 10,
  // },
}); // end styles

//   container: {
//     flex: 1,
//     alignItems: 'center' /* Dikey */,
//     justifyContent: 'center' /* Yatay */,
//     backgroundColor: '#000000',
//   }, // end container

//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     // width: '100%',
//     marginBottom: 10,
//   },
