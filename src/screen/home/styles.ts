import { StyleSheet } from "react-native";
import color from "../../utils/color";

const styles = StyleSheet.create({
  safeareaview:{
    flex:1,
    backgroundColor:color.lightblue
  },
  heading:{
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:10,
  },
  inputcontainer: {
    paddingHorizontal:10,
    paddingVertical:10,
  },
  outtercontainer:{
    paddingHorizontal:20,
    backgroundColor:'lightgrey',
    paddingVertical:20,
    borderRadius:20,
    
  },
  lable: {
    fontSize: 14,
    marginBottom:10,
    fontWeight: 'bold',
    color: color.black,
  },
  textinput: {
    borderBottomWidth: 1,
    borderBottomColor: color.black,
    color: color.black,
    paddingVertical: 5,
  },
  submitbutton: {
    backgroundColor: 'black',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop:25
  },
  submittext: {
    color: 'white',
    fontWeight: 'bold',
  },
  maincontainer:{
    backgroundColor:color.seashell,
   
    paddingVertical:20,
    paddingHorizontal:20,
    flex:1,
    // justifyContent:'center'
  },
  options:{
    flexDirection:'row',
    marginVertical:5,
    
    
  },
  levelelement:{
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:100,
    marginHorizontal:5,
    borderWidth:1,
  },
  methodelement:{
    
    paddingVertical:5,
    paddingHorizontal:10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:100,
    marginHorizontal:5,
    borderWidth:1,
  },
  leveltext:{
    color:color.black,
    fontWeight:'bold',
    fontSize:12,
  },
  methodtext:{
    color:color.black,
    fontWeight:'bold',
    fontSize:12,
  }
})

export default styles