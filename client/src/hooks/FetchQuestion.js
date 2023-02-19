import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import * as Action from "../redux/question_reducer"
import {getServerData} from "../helper/helper"



export const useFetchQuestion = ()=>{
const dispatch = useDispatch();

   const [getData, setGetData]= useState({isLoading : false, apiData : [], serverError: null})

   useEffect(()=>{
    setGetData(prev =>({...prev, isLoading : true}));


// async function to fetch data

(async ()=>{
try{

    const [{questions, answers}] = await getServerData(`https://quiz-app-ae62.onrender.com/api/questions`,(data)=>data)
    // console.log({questions, answers})
    

    if(questions.length>0){
        setGetData(prev =>({...prev, isLoading : false}));
        setGetData(prev =>({...prev, apiData : questions}));

        dispatch(Action.startExamAction({questions,answers}))
    }else{
        throw new Error("No Question Avaliable")
    }

}catch(error){
    setGetData(prev =>({...prev, isLoading : false}));
    setGetData(prev =>({...prev, serverError : error}));

}
})();

   },[dispatch])

   return [getData, setGetData];
}

/**For moving to next question */
 export const MoveNextQuestion = ()=>async(dispatch)=> {
    try{
dispatch(Action.moveNextAction());
    }catch(error){
        console.log(error)
    }
 }

 /**For moving to previous question */

 export const MovePrevQuestion = ()=>async(dispatch)=> {
    try{
dispatch(Action.movePrevAction());
    }catch(error){
        console.log(error)
    }
 }