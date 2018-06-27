import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { reduxForm, Field } from "redux-form";



function textInput(props) {
  const { input } = props;
  return (
      <TextInput 
      style={styles.inputStyle}
        onChangeText={input.onChange}
        value={input.value}
        placeholder={input.name}
      />
  );
}

class signIn extends React.Component {
  render() {
    return (
      <View style={styles.inputContainer}>
        <Text>Veuillez vous connecter</Text>
        <Field
          name="email"
          component={textInput}
          type="email"
        />
        <Field
          name="password"
          component={textInput}
          type="text"
        />
        <Button
          onPress={this.props.handleSubmit}
          title="Se connecter"
          titleStyle={{ fontWeight: "700", fontSize: 17 }}
          buttonStyle={{
            backgroundColor: "#13f6af",
            width: 160,
            height: 38,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 8
          }}
          containerStyle={{ marginBottom: 12, marginTop: 8 }}
        />
      </View>
      )
  }
}

export default reduxForm({
  form: 'signIn-form'
})(signIn)


const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputStyle: { 
    height: 40,
    width: 240,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    margin: 5,
    padding: 5,
  }
});