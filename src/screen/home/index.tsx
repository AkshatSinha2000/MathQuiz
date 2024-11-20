import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import {useDispatch} from 'react-redux';
import {
  setlevel,
  setmethod,
  setname,
  setuser,
} from '../../redux/slices/handledata';
import {useNavigation} from '@react-navigation/native';
import screen from '../../navigation/screen';
import color from '../../utils/color';
import styles from './styles';

const Home = () => {
  const [method, setMethod] = useState('');
  const [level, setLevel] = useState('');
  const [name, setName] = useState('');
  const [questions, setQuestion] = useState(0);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleNavigation = () => {
    if (!name && !level && !method) {
      Alert.alert('Please Enter credentials');
    }
    if (name && level && method) {
      dispatch(setuser({name, level, method, questions}));
      navigation.reset({index: 0, routes: [{name: screen.QuestionPage}]});
    }
  };

  return (
    <SafeAreaView style={styles.safeareaview}>
      <Header part={false} />
      <View style={styles.maincontainer}>
        <View style={styles.outtercontainer}>

        <Text style={styles.heading}>Please Enter Your Details</Text>
        <View style={styles.inputcontainer}>
          <Text style={styles.lable}>Name</Text>
          <TextInput
            style={styles.textinput}
            onChangeText={text => setName(text)}></TextInput>
        </View>
        <View style={styles.inputcontainer}>
          <Text style={styles.lable}>Level</Text>
          <View style={styles.options}>
            <TouchableOpacity
              style={[
                styles.levelelement,
                {borderColor: level === 'Easy' ? 'blue' : 'white'},
              ]}
              onPress={() => setLevel('Easy')}>
              <Text style={styles.leveltext}>Easy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.levelelement,
                {borderColor: level === 'Medium' ? 'blue' : 'white'},
              ]}
              onPress={() => setLevel('Medium')}>
              <Text style={styles.leveltext}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.levelelement,
                {borderColor: level === 'Hard' ? 'blue' : 'white'},
              ]}
              onPress={() => setLevel('Hard')}>
              <Text style={styles.leveltext}>Hard</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputcontainer}>
          <Text style={styles.lable}>Type</Text>
          <View style={styles.options}>
            <TouchableOpacity
              style={[
                styles.methodelement,
                {borderColor: method === '+' ? 'blue' : 'white'},
              ]}
              onPress={() => setMethod('+')}>
              <Text style={styles.methodtext}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.methodelement,
                {borderColor: method === '-' ? 'blue' : 'white'},
              ]}
              onPress={() => setMethod('-')}>
              <Text style={styles.methodtext}>Subtract</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.methodelement,
                {borderColor: method === '*' ? 'blue' : 'white'},
              ]}
              onPress={() => setMethod('*')}>
              <Text style={styles.methodtext}>Multiply</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.methodelement,
                {borderColor: method === '/' ? 'blue' : 'white'},
              ]}
              onPress={() => setMethod('/')}>
              <Text style={styles.methodtext}>Divide</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputcontainer}>
          <Text style={styles.lable}>Number of Question</Text>
          <TextInput
            style={styles.textinput}
            onChangeText={text => setQuestion(text)}></TextInput>
          <TouchableOpacity
            style={styles.submitbutton}
            onPress={() => handleNavigation()}>
            <Text style={styles.submittext}>Submit</Text>
          </TouchableOpacity>
        </View>
              </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
