import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native'
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

function App() : JSX.Element {
  const [randomBackground, setRandomBackground] = useState("#ffffff");
  const generateRandomColor = () => {
    const hexRange = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(color);
  }
  return (
    <>
        <StatusBar backgroundColor={randomBackground} />
        <View style={[styles.container,{backgroundColor:randomBackground} ]} >
          <TouchableOpacity onPress={generateRandomColor} >
            <View style={[styles.actionBtn]} >
              <Text style={styles.actionBtnTxt} >press me</Text>
            </View>
          </TouchableOpacity>
        </View>
    </>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  
  },
  actionBtn: {
    width: 200,
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'uppercase',
  }

})