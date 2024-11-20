import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import icon from '../assets';
import {useNavigation} from '@react-navigation/native';
import screen from '../navigation/screen';

const Header = (part) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={()=> part === true ? navigation.goBack() : null}>
      <Text style={styles.headerTitle}>MathQuiz</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(screen.Participents)}>
        <Image source={icon.topScore} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
