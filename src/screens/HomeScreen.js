import React from 'react';
import { Text, StyleSheet, View, Button , TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {    // This way it just pulls navigation property out of props.
  // const HomeScreen = (props) => {  // pulls all properties out of props
  // console.log(props.navigation)
  return <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button 
      onPress={() => navigation.navigate("Component")}
      title="Components"
    />
    <Button
      onPress={()=>navigation.navigate("List")}
      title="List"
    />
    {/* <TouchableOpacity onPress={()=>console.log('List Pressed')} >
      <Text>List</Text>
    </TouchableOpacity> */}
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
