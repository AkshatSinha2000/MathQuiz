import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddScore, resetuser } from '../../redux/slices/handledata'
import { useNavigation } from '@react-navigation/native'
import screen from '../../navigation/screen'
import color from '../../utils/color'

const QuestionPage = () => {
  const {level,method,name,questions} = useSelector(state=>state.quiz)
  const [First, setFirst] = useState(0)
  const [Second, setSecond] = useState(0)
  const [correctanswer , setCorrectanswer] =useState(0)
  const [array , setArray] =useState([])
  const [answer, setanswer] = useState(0)
  const [selectedindex , setSelectedIndex] = useState(null)
  const [count , setCount] = useState(0)
  const [stoptimer , setstoptimer] = useState(false)
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [timer , settimer]= useState(30)
  const [invoke , setInvoke]= useState(false)


  const solve =(a , b) => {
    console.log('kjsbdj',a)
    if(method === '+') {const ans = a + b ;setCorrectanswer(ans); optionArray(ans)}
        if(method === '-') {const ans = a - b ;setCorrectanswer(ans); optionArray(ans)}
        if(method === '*') {const ans = a * b ;setCorrectanswer(ans); optionArray(ans)}
        if(method === '/') {const ans = Math.round(a / b) ;setCorrectanswer(ans); optionArray(ans)}
        
  }

  const optionArray = (ans) => {
    console.log('working')
    let index = Math.floor(Math. random() * (3 - 0) + 0 );
    array[index] = ans;
    // console.log('first',array, ans)
    // console.log('array===>',array[index],index)
    let count = 50
    index = index + 1
    let c = 0
    while(c < 3){
      console.log('index',index)
      if(index <= 3){
        array[index] = ans + count;
        // console.log('array2===>',array[index],index,c)
        c = c + 1;
        index = index + 1
      }else{
          index = 0;
        
      }
      count = count + 10;
    }
    console.log('array',array)
  }

  const handlequestions = () => {
    if(level === 'Easy'){
      const a = Math.floor(Math.random()*100)
      const b = Math.floor(Math.random()*10)
      setFirst(a)
      setSecond(b)
      solve(a ,b)
      
    }
    if(level === 'Medium'){
      const a = Math.floor(Math.random()*1000)
      const b = Math.floor(Math.random()*100)
      setFirst(a)
      setSecond(b)
      solve(a ,b)
    }
      if(level === 'Hard'){
        const a = Math.floor(Math.random()*10000)
      const b = Math.floor(Math.random()*1000)
      setFirst(a)
      setSecond(b)
      solve(a ,b)
      }
    
    }

  useEffect(()=>{
    handlequestions()
    
  },[])
  
  useEffect(()=>{
      setInterval(function () {{settimer((prev) => (prev-1))}},1000);
  },[])

  useEffect(()=>{
    setTimeout(() => {
      console.log(count,'======',questions-1)
      if(count < questions-1){handlequestions()}else{navigation.reset({index:0,routes:[{name:screen.Score}]})}
      settimer(30)
      setCount(count+1)
      setInvoke(!invoke)
    }, 30000);
  },[invoke])

  const score = () => {
    if(answer === correctanswer){
        dispatch(AddScore());
      }
      if(selectedindex) {
        handlequestions()
        setSelectedIndex(null)
        setCount(count+1)
        settimer(30);
      }else {Alert.alert('Please Select option')}
  }

  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.container}>
      <Text style={styles.name}>Player Name: {name}</Text>
      <View style={styles.timercontainer}>
      <Text>Question: {First} {method} {Second} = ?</Text>
      <Text>Timer: {timer}</Text>

      </View>
      {array.map((item,index)=>{
        // console.log(index)
        return (
          <TouchableOpacity onPress={()=> [setSelectedIndex(index),setanswer(item)]}>
            <Text style={[{fontWeight: selectedindex === index ? 'bold':'200' },styles.option]}>▷  {item}</Text>
          </TouchableOpacity>
        )
      })} 
      <View style={styles.buttoncontainer}>


<TouchableOpacity style={styles.button} onPress={()=>[dispatch(resetuser(),navigation.reset({index:0,routes:[{name:screen.Home}]}))]}><Text>Reset</Text></TouchableOpacity>
      {count < questions-1 ?
      <TouchableOpacity style={styles.button} onPress={()=>score()}><Text>Next</Text></TouchableOpacity>:
      <TouchableOpacity style={styles.button} onPress={()=>navigation.reset({index:0,routes:[{name:screen.Score}]})}><Text>Submit</Text></TouchableOpacity>
    }
    </View>
    </View>
    </SafeAreaView>
  )
}

export default QuestionPage

const styles = StyleSheet.create({
  safeareaview:{
    flex:1,
  },
  container:{
    marginHorizontal:20,
    marginVertical:30,
  },
  timercontainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:20
  },
  name:{
    fontSize:16,marginBottom:50
  },
  option:{
    fontSize:14,
    marginVertical:15,
  },
  button:{
    marginVertical:20,
    marginRight:10,
    backgroundColor:color.lightblue,
    fontWeight:'bold',
    alignSelf:'flex-start',
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:10,
  },
  buttoncontainer:{
    flexDirection:'row',
  }
})