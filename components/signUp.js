import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { reduxForm, Field } from "redux-form";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

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


class SignUp extends React.Component {
  render() {
    return (
      <KeyboardAwareScrollView style={styles.container}>

      <View style={styles.inputContainer}>
        <Text>Pas encore de compte ?</Text>
        <Text>Inscrivez-vous</Text>
        <Field
          name="firstName"
          component={textInput}
        />
        <Field
          name="lastName"
          component={textInput}
        />
        <Field
          name="email"
          component={textInput}
        />
        <Field
          name="password"
          component={textInput}
        />
        <Field
          name="telephone"
          component={textInput}
        />

        <Button
          onPress={this.props.handleSubmit}
          title="S'inscrire"
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
      </KeyboardAwareScrollView>
    )
  }
}

export default reduxForm({
  form: 'signUp-form'
})(SignUp)

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputStyle: {
    height: 32,
   width: 240,
   borderColor: "black",
   borderWidth: 1,
   borderRadius: 8,
   margin: 5,
   padding: 5
 }
});
