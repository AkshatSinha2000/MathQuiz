import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../../components/Header'

const participents = () => {
  const {participants} = useSelector(state=>state.quiz)
  const renderitem = (item) => {
    console.log(item)
    return(
      <View style={styles.container}>
        <Text style={styles.text}>{item.item.name}</Text>
        <Text style={styles.text}>{item.item.score}</Text>
      </View>
    
    )
  }
  return (
    <SafeAreaView style={styles.safeareaview}> 
      <Header part={true}/>
      <Text style={[styles.heading,{textAlign:'center',marginVertical:30}]}>People who take part in quiz</Text>
      <View style={styles.headingcontainer}>
        <Text style={styles.heading}>Name</Text>
        <Text style={styles.heading}>Score</Text>
      </View>
      <FlatList 
      data = {participants}
      renderItem={renderitem}
      keyExtractor={item => item.name}
      />

    </SafeAreaView>
  )
}

export default participents

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:50,
    marginVertical:5
  },
  safeareaview:{
    flex:1,
    paddingVertical:20,
    paddingHorizontal:20
  },
  headingcontainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:50,
    marginBottom:20,
    
  },
  heading:{
    fontWeight:'bold',
    fontSize:16
  },
  text:{
    textAlign:'center',

  }
})