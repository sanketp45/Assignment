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
      
      default:
        return state
    }
  }
  export default reducer