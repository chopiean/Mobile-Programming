import React, { useState } from "react";
import {
    Keyboard,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";

export default function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);

  const toNumber = (v) => {
    const n = parseFloat(String(v).replace(",", "."));
    return Number.isNaN(n) ? 0 : n;
  };

  const onSum = () => {
    setResult(toNumber(a) + toNumber(b));
    Keyboard.dismiss();
  };

  const onSub = () => {
    setResult(toNumber(a) - toNumber(b));
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Result{result === null ? "" : `: ${result}`}
        </Text>

        <View style={styles.inputs}>
          <TextInput
            style={styles.input}
            value={a}
            onChangeText={setA}
            keyboardType="numeric"
            placeholder="Input first number"
            returnKeyType="next"
          />
          <TextInput
            style={styles.input}
            value={b}
            onChangeText={setB}
            keyboardType="numeric"
            placeholder="Input second number"
            returnKeyType="done"
          />
        </View>

        <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.squareBtn}
          onPress={() => setResult(toNumber(a) + toNumber(b))}
        >
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.squareBtn}
          onPress={() => setResult(toNumber(a) - toNumber(b))}
        >
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 },
  title: { fontSize: 26, fontWeight: "600", marginBottom: 16 },
  inputs: { width: "80%", gap: 12, marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  buttons: { flexDirection: "row", gap: 20, marginTop: 20 },
  squareBtn: {
    width: 40,
    height: 40,
    backgroundColor: "#3399CC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 3,
    elevation: 3,
  },
  btnText: {color: "#fff", fontSize: 22, fontWeight: "bold"},
});
