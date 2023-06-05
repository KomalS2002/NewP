import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer";

const INITIAL_STATE= {
user:{
_id:"6473570a532e0d5a004450af",
username:"random",
email:"random@gmail.com",
password:"12345678",
profilePicture:"",
coverPicture:"",
followers:[],
following:[],
isAdmin:false,   
},
isFetching:false,
error:false,
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children})=>{
    const[state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    return (
    <AuthContext.Provider 
    value={{
        user:state.user,
        isFetching:state.isFetching,
        error:state.error,
        dispatch
        }}>
    {children}
    </AuthContext.Provider>
    )
}