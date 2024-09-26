import { createSlice, PayloadAction } from "@reduxjs/toolkit";
enum AuthStatus{
    LOADING = "loading",
    AUTHENTICATED = "authenticated",
    UNAUTHENTICATED = "unauthenticated"
}
interface User {
    username :string,
    email : string,
    password : string,
    role : string
}   
interface AuthState {
    user : User,
    status : string
}
const initialState : AuthState = {
    user : {} as User,
    status : AuthStatus.LOADING
}


 const authSlice = createSlice({
    name : "auth",
    initialState ,
    reducers : {
        setUser(state:AuthState, action:PayloadAction<User>){
            state.user = action.payload
        },
        setStatus(state:AuthState, action:PayloadAction<AuthStatus>){
            state.status = action.payload
        }
    }

 })
 export const { setUser, setStatus } = authSlice.actions
 export default authSlice.reducer