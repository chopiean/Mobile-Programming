import React, { useState } from "react";
import {
    Alert,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";

function generateSecret() {
    return Math.floor(Math.random() * 100) + 1;
}

export default function App() {
    const [secret, setSecret] = useState(generateSecret());
    const [guessInput, setGuessInput] = useState(' ');
    const [feedback, setFeedback] = useState('Guess the secret number between 1 and 100.');
    const [attemps, setAttempts] = useState(0);

    const onMakeGuess = () => {
        const guess = parseInt(guessInput, 10);

        if (Number.isNaN(guess)) {
            setFeedback('Please enter a valid whole number.');
            return;
        }

        setAttempts(prev => prev + 1);

        if (guess < secret) {
            setFeedback(`Your guess ${guess} is too low.`);
        }else if (guess > secret) {
            setFeedback(`Your guess ${guess} is too high.`);
        }else {
            Alert.alert(
                'Number Guessing Game',
                `You guessed the number in ${attemps + 1} guesses.`,
                [
                    {
                        text: 'OK',
                        onPress: () => {
                            setSecret(generateSecret());
                            setGuessInput('');
                            setFeedback('Guess a number between 1-100');
                            setAttempts(0);
                        },
                    },
                ]
            );
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{feedback}</Text>
        
            <TextInput
            style={styles.input}
            value={guessInput}
            onChangeText={setGuessInput}
            placeholder="Enter a number"
            keyboardType="numeric"
            />
    
            <TouchableOpacity style={styles.button} onPress={onMakeGuess}>
            <Text style={styles.buttonText}>MAKE GUESS</Text>
            </TouchableOpacity>
            </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    },
    title: {
    fontSize: 18,
    marginBottom: 20,
    },
    input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '60%',
    textAlign: 'center',
    marginBottom: 20,
    },
    button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    },
    buttonText: {
    color: 'white',
    fontWeight: 'bold',
    },
    });