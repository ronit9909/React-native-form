/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { validate } from 'validate.js';
import constraints from './constraints';
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

class Inputs extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { data: { emailAddress: "example@gmail.com" } };
  //   this._onPressButton = this._onPressButton.bind(this)
  // }
  // _onPressButton() {
  //   const validationResult = validate(this.state.data, constraints);
  //   // validationResult is undefined if there are no errors
  //   this.setState({ errors: validationResult });
  // }
  state =
    {
      email: '',
      password: ''
    }
  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  login = (email, pass) => {
    if (email === "" || pass === "") {
      if (email === "") {
        alert('Please enter email')
      }
      else {
        alert('Please enter password')
      }
    }
    else {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(email) === false) {
        alert('Email is not Correct')
        return false;
      }
      else {
        alert('Email:' + email + '\npassword:' + pass)
      }
    }
  }

  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.sectionTitle}>
          Email
        </Text>
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />
        <Text style={styles.sectionTitle}>
          Password
        </Text>
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={this.handlePassword}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={
            () => this.login(this.state.email, this.state.password)
          }>
          <Text style={styles.submitButtonText}>
            submit
        </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
export default Inputs
const styles = StyleSheet.create({

  engine: {
    position: 'absolute',
    right: 0,
  },

  container: {
    paddingTop: 23
  },

  input: {
    marginTop: 10,
    height: 40,
    paddingLeft: 15,
    borderColor: '#7a42f4',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20

  },

  highlight: {
    fontWeight: '400',
  },

  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 20,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
    textAlign: "center"
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 10,
    color: '#FF0000',
  },
});


