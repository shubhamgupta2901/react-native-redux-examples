/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet,View, Text, Button} from 'react-native'
import PropTypes from 'prop-types';


class CounterComponent extends React.Component {
  constructor(props){
    super(props);
    
  }
  componentDidMount =() => {
    console.log('state: ');
    console.log(this.state);
    console.log('Props: ');
    console.log(this.props.toString());
  }
  render(){
    return (
        <View style={styles.container}>
            <Button
              title="Increment Count"
              onPress = {()=>this.props.increment()}
            />
            <Text>{this.props.count}</Text>
            <Button
              title="Decrement Count"
              onPress = {()=>this.props.decrement()}
              />
            
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
})

CounterComponent.propTypes ={
}

CounterComponent.defaultProps ={
}

export default CounterComponent;
