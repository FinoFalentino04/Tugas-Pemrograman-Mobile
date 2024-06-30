import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

const About = ({ route, navigation }) => {
  const { friend } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Informasi</Text>
      <Image source={friend.image} style={styles.friendImage} />
      <Text style={styles.detail}>Nama: {friend.name}</Text>
      <Text style={styles.detail}>No.HP: {friend.no}</Text>
      <Text style={styles.detail}>Email: {friend.email}</Text>
      <Button title="Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  friendImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },
  detail: {
    fontSize: 18,
    marginBottom: 10
  }
});

export default About;
