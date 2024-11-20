import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  name: '',
  level : '',
  method : '',
  score : 0,
  questions: 0 ,
  participants : [],
  loading: true,
  error: null,
};

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setuser: (state, action) => {
      state.level = action.payload.level
      state.name = action.payload.name
      state.method = action.payload.method
      state.questions = action.payload.questions
      console.log(state.level)
    },
    AddScore : (state,action) => {
      state.score++
      console.log('Scoree===>',state.score);
    },
    resetuser : (state,action) => {
      state.level = ''
      state.name = ''
      state.method = ''
      state.score = 0
      state.questions = 0
    },
    AddParticipents:(state,action) =>  {
      console.log(action.payload)
      state.participants = state.participants.concat(action.payload)
    }
   
  },
});

export const {setuser,AddScore,resetuser,AddParticipents} =
  quiz.actions;
export default quiz.reducer;
