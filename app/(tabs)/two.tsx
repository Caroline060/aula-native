import { StyleSheet, Image, TextInput, Button } from 'react-native';
import { useState } from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  const [texto, atualizaTexto]= useState('Olá, mundo!');
  const [telefone, atualizaTelefone]= useState('(12)3456-7890');
  const [email, atualizaEmail]= useState('exemplo@mail.com')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aba Dois</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Image 
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png?authuser=0',
          width: 64,
          height: 64,
        }}
      />
      <TextInput
        value={texto}
        onChangeText={atualizaTexto}
      />
      <TextInput
        value={telefone}
        onChangeText={atualizaTelefone}
        inputMode='numeric'
      />
      <TextInput
        value={email}
        onChangeText={atualizaEmail}
        inputMode='email'
      />
      <Button 
        title='ENVIAR'
        onPress={() => {alert(texto + '  ' + telefone)}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
