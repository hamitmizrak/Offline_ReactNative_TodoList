// IMPORT
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// REACT NATIVE LIBRARIES
import {Button, Text, View, StyleSheet} from 'react-native';

// COUNTER CLASS; FUNCTION
import CounterClass from './counter/CounterClass';
import CounterFunction from './counter/CounterFunction';

// STACK (CREATE)
const Stack = createNativeStackNavigator();

// NAVIGATION (HOME)
// 1.YOL => function Home(){return()}
// 2.YOL => const Home=()=>{return()}
function Home() {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
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
  return (
    // Home page Container
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        {/* Profile */}
        <View style={{marginTop: 5, marginBottom: 5}}>
          <Button
            color="red"
            title="Profile"
            onPress={() =>
              navigation.navigate('ProfileName', {name: 'ProfileName'})
            }></Button>
        </View>

        {/* Device */}
        <View style={{marginTop: 5, marginBottom: 5}}>
          <Button
            color="blue"
            title="Device Information"
            onPress={() =>
              navigation.navigate('DeviceInformationName', {
                name: 'DeviceInformationName',
              })
            }></Button>
        </View>
      </View>

      <View  style={styles.buttonRow} >
        {/* Counter Class */}
      <View style={{marginTop: 5, marginBottom: 5}}>
        <Button
          color="orange"
          title="Counter Class"
          onPress={() =>
            navigation.navigate('CounterClassName', {name: 'CounterClassName'})
          }></Button>
      </View>

      {/* Counter Function */}
      <View style={{marginTop: 5, marginBottom: 5}}>
        <Button
          color="red"
          title="Counter Function"
          onPress={() =>
            navigation.navigate('CounterFunctionName', {
              name: 'CounterFunctionName',
            })
          }></Button>
      </View>
      </View>
      
    </View>
  ); //end return
}; // end Home Screen

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', /* Dikey */
    justifyContent: 'center', /* Yatay */
    backgroundColor: '#000000',
  }, // end container

  buttonRow:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    // width: '100%',
    marginBottom: 10,
    
  }
}); // end styles
