import React from 'react';
import { Text, View, StyleSheet, Button, FlatList, Image } from 'react-native';



const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KONTAK</Text>
      <Text style={styles.title}>Daftar Teman</Text>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
            <Image source={item.image} style={styles.friendImage} />
            <View style={styles.textContainer}>
              <Text style={styles.friendName}>{item.name}</Text>
              <Button
                title="Lihat"
                onPress={() => navigation.navigate('About', { friend: item })}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const friends = [
  { id: '1', name: 'Muhammad George Elmar', no: '0895360539307', email: 'georgejos79z@gmail.com', image: require('../assets/george.png') },
  { id: '2', name: 'Feri Irawan', no: '085793902926', email: 'feri186irawan@gmail.com', image: require('../assets/feri.png') },
  { id: '3', name: 'Utama Luhur Budi', no: '089630461568', email: 'noobberkarya123@gmail.com', image: require('../assets/uta.png') },
  { id: '4', name: 'Rafdy Fauzan Ilham Firdaus', no: '081296876396', email: 'rafdyfauzan57@gmail.com', image: require('../assets/rafdy.png') },
  { id: '5', name: 'Muhammad Fadlan Syuhada', no: '083893026231', email: 'mfadlan703@gmail.com', image: require('../assets/fadlan.png') }
];

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
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  friendImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  friendName: {
    fontSize: 18
  }
});

export default Home;
