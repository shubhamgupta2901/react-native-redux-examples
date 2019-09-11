/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet,View, Text} from 'react-native'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){
    return (
        <View style={styles.container}>
            <Text>App</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default App;
