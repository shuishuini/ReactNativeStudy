import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


// import ViewStudy from './componentsStudy/ViewStudy';
import TextStudy from './componentsStudy/TextStudy';
{/*import TextStudy2 from './componentsStudy/TextStudy2';*/}
import ButtonStudy from './componentsStudy/ButtonStudy';
import ImageStudy from './componentsStudy/ImageStudy';
{/* import ImageStudy2 from './componentsStudy/ImageStudy2'; */}
import TextInputStudy from './componentsStudy/TextInputStudy';
import AlertStudy from './componentsStudy/AlertStudy';
import DimensionStudy from './componentsStudy/DimensionStudy';
import ScrollViewStudy from './componentsStudy/ScrollViewStudy';
// import FlatListStudy from './componentsStudy/FlatListStudy';坏了不能用

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Hello world!</Text>
      <Text style={styles.font}>This is Yidan!</Text>
      {/* <ViewStudy></ViewStudy> */}
      <TextStudy></TextStudy>
      {/* <TextStudy2></TextStudy2> */}
      <ButtonStudy></ButtonStudy>
      <ImageStudy></ImageStudy>
      {/* <ImageStudy2></ImageStudy2> */}
      <TextInputStudy></TextInputStudy>
      <AlertStudy></AlertStudy>
      <DimensionStudy></DimensionStudy>
      <ScrollViewStudy></ScrollViewStudy>
      {/* <FlatListStudy></FlatListStudy> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font:{
    fontSize: 20,
    lineHeight: 30,
    color: "skyblue"
  }
});
