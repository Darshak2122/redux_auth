const userReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "DELETE_USER":
      return {
        ...state,
        items: state.items.filter((user)=> user.id !== action.payload)
      };
    case "UPDATE_USER":
      return {
        ...state,
        items: state.items.map((user)=> user.id === action.payload.id ? action.payload: user)
      };
    case "LOGIN_USER":
      return {
        ...state,
        auth: [state.auth = action.payload]
      };
    case "List_USER":
      return {
        ...state,
        list: [state.list = action.payload],
        items: state.items.filter((user)=> user.id !== action.payload.id)

      };
    case "LOGOUT_USER":
      return {
        ...state,
        auth: [state.auth = false],
        items: [...state.items, state.list[0]],
        list: [{}]

    };
    case "FORGOT_PASSWORD":
  return {
    ...state,
    forgotPasswordEmail: action.payload, 
    
  };

    default:
      return state;
  }
};

export default userReducer;
