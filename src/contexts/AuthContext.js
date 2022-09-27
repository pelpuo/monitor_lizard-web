import { createContext, useContext, useEffect, useState } from "react";
import {auth, db} from "./../firebase"
import {doc, getDoc} from "firebase/firestore"
import firebase from "firebase/compat/app"

const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState();
    const [registeringUser, setRegisteringUser] = useState();

    async function signUp(email, password){
        const user = await auth.createUserWithEmailAndPassword(email, password).then(userCredential =>{
            return userCredential.user;
        })
        return user;
    }

    async function login(email, password){
        try {
            const credential = await auth.signInWithEmailAndPassword(email, password).then((userCredential)=>{
                console.log(`User is ${userCredential?.user?.email}`);
                return userCredential?.user
            })
            return credential;
        } catch (error) {
            
        }
    }

    async function checkEmailExists(email){
        const result = await auth.fetchSignInMethodsForEmail(email).then(providers =>{
            console.log(`providers are: ${providers}`)
            if(providers.length > 0){
                return true;
            }else{
                return false;
            }
        })
        return result;
    }

    async function registerUser(){
        console.log(registeringUser)
        const user = await signUp(registeringUser.email, registeringUser.password)
        await login(registeringUser.email, registeringUser.password)

        const startingTimeArr = String(registeringUser.startingTime).split(":")
        const closingTimeArr = String(registeringUser.closingTime).split(":")


        await db.collection("organization").add({
            "adminId": user.uid,
            "adminName": `${user.firstName} ${user.lastName}`,
            "industry": "",
            "country": registeringUser.country,
            "name": registeringUser.organization,
            "startingTime": new firebase.firestore.Timestamp(parseInt(startingTimeArr[0]) * 60 * 60 + parseInt(startingTimeArr[1]) * 60, 0),
            "closingTime": new firebase.firestore.Timestamp(parseInt(closingTimeArr[0]) * 60 * 60 + parseInt(closingTimeArr[1]) * 60, 0),
            "location": new firebase.firestore.GeoPoint(parseFloat(registeringUser.latitude), parseFloat(registeringUser.longitude)),
            "uniqueCode": makeid(5)

        })

        await firebase.auth.onAuthStateChanged(user =>{
            if(user){
                firebase.auth.currentUser.updateProfile({
                    displayName: `${registeringUser.firstName} ${registeringUser.lastName}`
                    })
            }
        })
        

    }

    function logout() {
        return auth.signOut()
    }

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }

    
    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            // console.log(user);
            if(user){
                // console.log(`Auth state changed and user is: ${user.displayName}`)
            }
        });
        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        registeringUser,
        setRegisteringUser,
        registerUser,
        checkEmailExists,
        signUp,
        login,
        logout
    }

    return(
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}

export default AuthContext;