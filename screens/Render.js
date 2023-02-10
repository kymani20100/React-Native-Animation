import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";

const Render = () => {
  const [elements, setElements] = useState([
    { key: "element1", name: "", age: "", number: "", country: "" },
    { key: "element2", name: "", age: "", number: "", country: "" },
    { key: "element3", name: "", age: "", number: "", country: "" },
    { key: "element4", name: "", age: "", number: "", country: "" }
  ]);

  const handleChange = (name, index) => {
    const newElements = [...elements];
    newElements[index].name = name;
    setElements(newElements);
  };

  const handleAge = (age, index) => {
    const newElements = [...elements];
    newElements[index].age = age;
    setElements(newElements);
  };

  const handleNumber = (number, index) => {
    const newElements = [...elements];
    newElements[index].number = number;
    setElements(newElements);
  };

  const handleCountry = (country, index) => {
    const newElements = [...elements];
    newElements[index].country = country;
    setElements(newElements);
  };

  const handleSubmit = () => {
    if (!validate()) {
      return;
    }
    // logic to handle form submission
    console.log(elements);
  };

  const validate = () => {
    let isValid = true;
    const newElements = [...elements];
    newElements.forEach(element => {
      if (!element.value) {
        isValid = false;
        element.error = `${element.key} is required`;
      } else {
        element.error = "";
      }
    });
    setElements(newElements);
    return isValid;
  };

  return (
    <View style={{marginTop: 35, padding: 10}}>
      <ScrollView>
      {elements.map((element, index) => (
        <>
          <TextInput
            key={element.key+1+index}
            placeholder={element.name}
            onChangeText={name => handleChange(name, index)}
            value={element.name}
            style={{height: 35, borderWidth: 1, borderColor: '#CCC', marginBottom: 5, paddingHorizontal: 10}}
          />
          <TextInput
            key={element.key+2+index}
            placeholder={element.age}
            onChangeText={age => handleAge(age, index)}
            value={element.age}
            style={{height: 35, borderWidth: 1, borderColor: '#CCC', marginBottom: 5, paddingHorizontal: 10}}
          />
          <TextInput
            key={element.key+3+index}
            placeholder={element.number}
            onChangeText={number => handleNumber(number, index)}
            value={element.number}
            style={{height: 35, borderWidth: 1, borderColor: '#CCC', marginBottom: 5, paddingHorizontal: 10}}
          />
          <TextInput
            key={element.key+4+index}
            placeholder={element.country}
            onChangeText={country => handleCountry(country, index)}
            value={element.country}
            style={{height: 35, borderWidth: 1, borderColor: '#CCC', marginBottom: 5, paddingHorizontal: 10}}
          />

          {!!element.error && (
            <Text style={styles.errorText}>{element.error}</Text>
          )}
        </>
      ))}
      </ScrollView>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default Render;
