import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  AppRegistry,
  Animated,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

import images from "../assets/grid";

export default class Grid extends Component {
  state = {
    activeImage: null,
    size: new Animated.ValueXY(),
    position: new Animated.ValueXY(),
    animation: new Animated.Value(0),
  };

  componentWillMount() {
    this._gridImages = {};
  }

  handleOpenImage = (index) => {
    this._gridImages[index].measure((x, y, width, height, pageX, pageY) => {
      this._x = pageX;
      this._y = pageY;
      this._width = width;
      this._height = height;

      this.state.position.setValue({
        x: pageX,
        y: pageY
      })

      this.state.size.setValue({
        x: width,
        y: height
      })

      this.setState({
        activeImage: images[index],
        activeIndex: index 
      }, () => {
        this._viewImage.measure((tX, tY, tWidth, tHeight, tPageX, tPageY) => {
            Animated.parallel([
              Animated.spring(this.state.position.x, {
                toValue: tPageX
              }),
              Animated.spring(this.state.position.y, {
                toValue: tPageY
              }),
              Animated.spring(this.state.size.x, {
                toValue: tWidth
              }),
              Animated.spring(this.state.size.y, {
                toValue: tHeight
              }),
              Animated.spring(this.state.animation, {
                toValue: 1
              })
            ]).start();
        })
      })

    })
  };

  render() {
    const animatedContentTranslate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [300, 0],
    });

    const animatedContentStyles = {
      opacity: this.state.animation,
      transform: [
        {
          translateY: animatedContentTranslate,
        },
      ],
    };

    const activeImageStyle = {
      width: this.state.size.x,
      height: this.state.size.y,
      top: this.state.position.y,
      left: this.state.position.x
    }

    const activeIndexStyle = {
      opacity: this.state.activeImage ? 0 : 1
    }

    const animatedCloseStyle = {
      opacity: this.state.animation
    }

    handleClose = () => {
      Animated.parallel([
          Animated.timing(this.state.position.x, {
            toValue: this._x,
            duration: 250,
          }),
          Animated.timing(this.state.position.y, {
            toValue: this._y,
            duration: 250
          }),
          Animated.timing(this.state.size.x, {
            toValue: this._width,
            duration: 250
          }),
          Animated.timing(this.state.size.y, {
            toValue: this._height,
            duration: 250
          }),
          Animated.timing(this.state.animation, {
            toValue: 0,
            duration: 250
          })
      ]).start(() => {
        this.setState({
          activeImage: null
        })
      });
    }

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <View style={styles.grid}>
            {images.map((src, index) => {

              const style = index === this.state.activeIndex ? activeIndexStyle : undefined;

              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => this.handleOpenImage(index)}
                >
                  <Image
                    source={src}
                    style={[styles.gridImage, style]}
                    resizeMode="cover"
                    ref={(image) => (this._gridImages[index] = image)}
                  />
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>

        <View
          style={StyleSheet.absoluteFill}
          pointerEvents={this.state.activeImage ? "auto" : "none"}
        >
          <View
            style={styles.topContent}
            ref={image => this._viewImage = image}
            onLayout={() => {}}
          >
            {/* View was cut from here */}
          </View>

          <Animated.View style={[styles.content, animatedContentStyles]}>
            <Text style={styles.title}>Pretty Image from Unsplash</Text>
            <Text>
              Everyone has the right to freedom of thought, conscience and
              religion; this right includes freedom to change his religion or
              belief, and freedom, either alone or in community with others and
              in public or private, to manifest his religion or belief in
              teaching, practice, worship and observance. Everyone has the right
              to freedom of opinion and expression; this right includes freedom
              to hold opinions without interference and to seek, receive and
              impart information and ideas through any media and regardless of
              frontiers. Everyone has the right to rest and leisure, including
              reasonable limitation of working hours and periodic holidays with
              pay.
            </Text>
          </Animated.View>
        </View>
            {/* Cut item was pasted here */}
            <Animated.Image
              key={this.state.activeImage}
              source={this.state.activeImage}
              resizeMode="cover"
              style={[styles.viewImage, activeImageStyle]}
            />

            <TouchableWithoutFeedback onPress={this.handleClose}>
              <Animated.View style={[styles.close, animatedCloseStyle]}>
                <Text style={styles.closeText}>X</Text>
              </Animated.View>
            </TouchableWithoutFeedback>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  gridImage: {
    width: "33%",
    height: 150,
  },
  topContent: {
    flex: 1,
  },
  content: {
    flex: 2,
    backgroundColor: "#FFF",
  },
  viewImage: {
    width: null,
    height: null,
    position: "absolute",
    top: 0,
    left: 0,
  },
  title: {
    fontSize: 28,
  },
  close: {
    position: "absolute",
    top: 20,
    right: 20
  },
  closeText: {
    backgroundColor: "transparent",
    fontSize: 28,
    color: "#FFF"
  }
});
