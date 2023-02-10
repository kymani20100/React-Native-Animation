import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

const Form = ({ person }) => {
  const [formData, setFormData] = useState({
    name: person.name,
    age: person.age,
    address: person.address,
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 15 }}>
      <TextInput
        value={formData.name}
        onChangeText={text => handleChange('name', text)}
        placeholder="Name"
        style={{height: 30, width: '100%', borderColor: 'gray', borderWidth: 1 }}
      />
      <TextInput
        value={formData.age}
        onChangeText={text => handleChange('age', text)}
        placeholder="Age"
        style={{height: 30, width: '100%', borderColor: 'gray', borderWidth: 1 }}
      />
      <TextInput
        value={formData.address}
        onChangeText={text => handleChange('address', text)}
        placeholder="Address"
        style={{height: 30, width: '100%', borderColor: 'gray', borderWidth: 1 }}
      />
      <TouchableOpacity onPress={() => console.log(formData)}>
        <Text style={{color: 'black'}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;