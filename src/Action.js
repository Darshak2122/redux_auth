export const userRegister =(data)=>{
    return{
        type:'ADD_USER',
        payload:data
    }
}

export const userlogin =(num)=>{
    return{
        type:'LOGIN_USER',
        payload:num
    }
}

export const userlogout =(num)=>{
    return{
        type:'LOGOUT_USER',
        payload:num
    }
}

export const userDelete =(id)=>{
    return{
        type:'DELETE_USER',
        payload:id
    }
}

export const userInfo =(id)=>{
    return{
        type:'USER_USER',
        payload:id
    }
}

export const userUpdate =(data)=>{
    return{
        type:'UPDATE_USER',
        payload:data
    }
}

export const List =(email)=>{
    return{
        type:'List_USER',
        payload:email
    }
}
export const userForgotPassword = (pass) => {
    return {
        type: 'FORGOT_PASSWORD',
        payload: pass
    }
}

