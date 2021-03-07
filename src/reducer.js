import { useRadioGroup } from "@material-ui/core"
import UserData from "./UserData"

const initialState={

  UserData:[]

}


function reducer(state = initialState, action) {
    switch (action.type) {
      case 'add-user':
         
        return {
          ...state,
           UserData: [...state.UserData,action.payload] 
         }

         case 'remove':
           { 
             return{
              ...state,
              UserData: [...state.UserData, state.UserData.filter(item => item !== action.index)], 
             }
           }
      default:
        return state
    }
  }
  export default reducer