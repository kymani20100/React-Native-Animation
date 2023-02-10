import React, { Component } from 'react';
import { Text, 
        StyleSheet, 
        View,
        AppRegistry,
        Animated,
        TouchableOpacity,
        Dimensions
     } from 'react-native'

export default class Questionnaire extends Component {
    state = {
        index: 0,
        questions: [
            "Can one live a virtuous life in a society filled with corruption and vice?",
            "Is it truly possible to live a life of simplicity and self-sufficiency?",
            "What is the true nature of happiness and can it be attained?",
            "Can one maintain their integrity in the face of temptation and adversity?",
            "What is the relationship between virtue and pleasure, and should both be prioritized?",
            "Is it possible to live a virtuous life without adhering to any particular set of moral or ethical beliefs?",
            "Can one reconcile the idea of individual freedom with the needs and wants of society?",
            "What is the relationship between knowledge and virtue, and are they important?",
            "Can one distinguish between true wisdom and superficial understanding?",
            "Can the idea of self-control be applied to the pursuit of virtue and the achievement of happiness?",
        ],
        animation: new Animated.Value(0),
        progress: new Animated.Value(0)
    };

    handleAnswer = () => {
        Animated.parallel([
            Animated.timing(this.state.progress, {
                toValue: this.state.index + 1,
                duration: 400,
                useNativeDriver: false
            }),
            Animated.timing(this.state.animation, {
                toValue: 1,
                duration: 400,
                useNativeDriver: false
            })
        ]).start(() => {
            this.setState((state) => {
                return {
                    index: state.index + 1
                }
            }, () => {
                this.state.animation.setValue(0)
            })
        });
    }


  render() {
    // DESTRUCTURING TO MAKE THEM NORMAL VARIABLES
    const {questions, index} = this.state;
    const {width} = Dimensions.get('window');

    // PROGRESSBAR
    const progressInterpolate = this.state.progress.interpolate({
        inputRange: [0, questions.length],
        outputRange: ["0%", "100%"]
    })

    const progressStyle = {
        width: progressInterpolate
    }

    const mainQuestionInterpolate = this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -width]
    })

    const nextQuestionInterpolate = this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: [width, 0]
    })

    const mainStyle = {
        transform: [
            {
                translateX: mainQuestionInterpolate
            }
        ]
    }

    const nextStyle = {
        transform: [
            {
                translateX: nextQuestionInterpolate
            }
        ]
    }

    let question = questions[index];
    let nextQuestion;

    if(index + 1 < questions.length) {
        nextQuestion = questions[index + 1];
    }else{
        question = questions[index];
        // Must solve here
    }
   
    return (
      <View style={styles.container}>
        <View style={[StyleSheet.absoluteFill, styles.overlay]}>
            <Animated.Text style={[styles.questionText, mainStyle]}>
                {question}
            </Animated.Text>
            <Animated.Text style={[styles.questionText, nextStyle]}>
                {nextQuestion}
            </Animated.Text>
        </View>

        <View style={styles.progress}>
            <Animated.View style={[styles.bar, progressStyle]} />
        </View>

        <TouchableOpacity style={[styles.option]} onPress={this.handleAnswer} activeOpacity={0.7}>
            <Text style={[styles.optionText]}>No</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.option, styles.yes]} onPress={this.handleAnswer} activeOpacity={0.7}>
            <Text style={[styles.optionText]}>Yes</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: "#E22D4B",
        flexDirection: 'row'
    },
    progress: {
        position: "absolute",
        left: 0,
        bottom: 0,
        right: 0,
        height: 10
    },
    bar: {
        height: "100%",
        backgroundColor: "#FFF"
    },
    option: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    yes: {
        backgroundColor: "rgba(255, 255, 255, .1)"
    },
    optionText: {
        fontSize: 30,
        color: "#FFF",
        marginBottom: 50
    }, 
    overlay: {
        alignItems: "center",
        justifyContent: "center"
    },
    questionText: {
        backgroundColor: "transparent",
        position: "absolute",
        fontSize: 30,
        color: "#FFF",
        textAlign: "center"
    }

})