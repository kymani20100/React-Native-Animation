import React, { Component } from "react";
import {
  AppRegistry,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Text,
  StyleSheet,
  View,
  Animated,
  KeyboardAvoidingView,
} from "react-native";

import bg from "../assets/bg.png";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const createAnimationStyle = (animation) => {
  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-5, 0],
  });
  return {
    opacity: animation,
    transform: [
      {
        translateY,
      },
    ],
  };
};

export default class Stagger extends Component {
  state = {
    email: new Animated.Value(0),
    password: new Animated.Value(0),
    button: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.stagger(100, [
      Animated.timing(this.state.email, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(this.state.password, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(this.state.button, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      this._email.focus();
    });
  }

  render() {
    const emailStyle = createAnimationStyle(this.state.email);
    const passwordStyle = createAnimationStyle(this.state.password);
    const buttonStyle = createAnimationStyle(this.state.button);

    return (
      <View style={styles.container}>
        <ImageBackground
          source={bg}
          resizeMode="cover"
          style={[
            StyleSheet.absoluteFill,
            {
              width: null,
              height: null,
            },
          ]}
        >
          <View style={styles.container} />

          <KeyboardAvoidingView style={styles.form} behaviour="padding">
            <View style={styles.container}>
              <Text style={styles.title}>Login</Text>
              <AnimatedTextInput
                ref={(email) => (this._email = email)}
                style={[styles.input, emailStyle]}
                placeholder="Email"
                keyboardType={"email-address"}
              />

              <AnimatedTextInput
                style={[styles.input, passwordStyle]}
                placeholder="Password"
                secureTextEntry
              />

              <TouchableOpacity>
                <Animated.View style={[styles.button, buttonStyle]}>
                  <Text style={styles.buttonText}>Login</Text>
                </Animated.View>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <View style={styles.container} />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    color: "#FFF",
    backgroundColor: "transparent",
    textAlign: "center",
    marginBottom: 10,
  },
  form: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.25)",
    paddingVertical: 10,
  },
  input: {
    width: 250,
    height: 35,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#FFF",
    color: "#333",
    backgroundColor: "#FFF",
  },
  button: {
    backgroundColor: "lime",
    paddingHorizontal: 10,
    marginVertical: 5,
    width: 250,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#333",
  },
});
