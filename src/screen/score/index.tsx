import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import screen from '../../navigation/screen'
import { useNavigation } from '@react-navigation/native'
import { AddParticipents, resetuser } from '../../redux/slices/handledata'
import color from '../../utils/color'

const Score = () => {
  const {name,score} = useSelector(state=>state.quiz)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(AddParticipents({name,score}))
    setTimeout(() => {
      navigation.reset({
        index : 0,
        routes:[{name  : screen.Home}]
      })
      dispatch(resetuser())
    }, 2500);
  },[])
  return (
    <SafeAreaView style = {styles.safeareaview}>
      <View style={styles.container}>
      <Text style={styles.text}>your Score is </Text>
      <Text style={styles.text}>{score} </Text>

      </View>
    </SafeAreaView>
  )
}

export default Score

const styles = StyleSheet.create({
  safeareaview:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'

  },
  container:{
    backgroundColor:color.lightblue,
    paddingHorizontal:40,
    paddingVertical:80,
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    fontSize:20,
  }
})