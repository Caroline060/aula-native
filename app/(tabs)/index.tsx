import { StyleSheet, Image, TextInput, Button } from 'react-native';
import { useState } from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  const [nome, atualizaNome]= useState('Escreva seu nome aqui.');
  const [sobrenome, atualizaSobrenome]= useState('Escreva seu sobrenome aqui.');
  const [cpf, atualizaCpf]= useState('Escreva seu CPF aqui. Ex: 123.456.789-00');
  const [telefone, atualizaTelefone]= useState('Escreva seu telefone aqui. Ex: (12)3456-7890');
  const [email, atualizaEmail]= useState('Escreva seu email aqui');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aba Um</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Image 
        source={require('@/assets/images/icone.png')}
      />
      <TextInput
        value={nome}
        onChangeText={atualizaNome}
      />
      <TextInput
        value={sobrenome}
        onChangeText={atualizaSobrenome}
      />
      <TextInput
        value={cpf}
        onChangeText={atualizaCpf}
        inputMode='numeric'
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
        onPress={() => {alert(nome + ' ' + sobrenome + '  ' + cpf + '  ' + telefone + '  ' + email)}}
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
