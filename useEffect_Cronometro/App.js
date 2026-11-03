import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Cronometro() {
  const [segundos, setSegundos] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setSegundos(s => s + 1);
    }, 1000);
    return () => clearInterval(id); // limpeza
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.numero}>{segundos}s</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  numero: { fontSize: 48 },
});
