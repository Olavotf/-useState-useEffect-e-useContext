import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TemaContext } from '../contexts/TemaContext';

export default function Home() {
  const { modo, cores, alternarTema } = useContext(TemaContext);
  return (
    <View style={[styles.container, { backgroundColor: cores.fundo }]}>
      <Text style={[styles.texto, { color: cores.texto }]}>
        Tema atual: {modo}
      </Text>
      <Button title="Trocar tema" onPress={alternarTema} color={cores.primaria} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  texto: { fontSize: 24, marginBottom: 20 },
});
