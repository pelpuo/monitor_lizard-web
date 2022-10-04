import { createContext, useCallback, useContext, useEffect, useState } from "react";
import {db} from "./../firebase"
import firebase from "firebase/compat/app"
import { useAuth } from "./AuthContext";


const AttendanceContext = createContext();

export function useAttendance(){
    return useContext(AttendanceContext)
}


export function AttendanceProvider({children}){
    const {currentUser, makeid} = useAuth();

    const [organizationData, setOrganizationData] = useState();
    const [allAttendanceData, setAllAttendanceData] = useState(new Map());
    const [allEmployeesData, setAllEmployeesData] = useState(new Map());
    const [singleEmployeeData, setSingleEmployeeData] = useState([]);
    const [singleEmployee, setSingleEmployee] = useState();
    const [inOffice, setInOffice] = useState(0);

    const retrieveOrganizationData = useCallback(async () => {
        console.log("retrieveOrganizationData made a query")
        const temp = await db.collection("organization").where("adminId", "==", currentUser?.uid ?? "")
           .get()
           .then(querySnapshot => {
            return querySnapshot?.docs[0]
           })
        
           if(temp?.data() != null){
            // console.log(temp)
            setOrganizationData({"uid":temp.id, ...temp.data()})
            return temp.id
           }
    }, [currentUser])
    

    const retrieveAttendanceData = useCallback(async (uid) =>{
        console.log("retrieveAttendanceData made a query")
        await db.collection("attendance").where("organizationId", "==", uid ?? "")
        .onSnapshot(querySnapshot =>{
            var temp = new Map();
            querySnapshot.forEach(doc => temp.set(doc.id, doc.data()))
            // console.log(uid)
            // console.log(temp)
            // return temp;
            setAllAttendanceData(temp)
        })
        // .then((temp) => {
        //     // console.log(arr)
        //     setAllAttendanceData(temp)
        // })
        
    }, [])


    const retrieveAllEmployees = useCallback(async (uid) => {
        console.log("retrieveAllEmployees made a query")
        await db.collection("employee").where("organizationId", "==", uid ?? "")
        .get()
        .then(querySnapshot =>{
            var temp = new Map()
            querySnapshot.forEach(doc => {  
                temp.set(doc.id, {"uid":doc.id, ...doc.data()})
            })
            return temp;
        })
        .then((res) => {
            setAllEmployeesData(res)
        })    
    }, [])


    const retrieveSingleEmployee = useCallback(async (employeeId) =>{
        console.log("RetrieveSingleEmployee made a query")
        await db.collection("attendance").where("employeeId", "==", employeeId ?? "")
        .get()
        .then(querySnapshot =>{
            var arr = []
            querySnapshot.forEach(doc => arr.push(doc.data()))
        })
        .then((arr) => setSingleEmployeeData(arr))

        
    }, [])


    const getInOffice = useCallback(() => {
        const date = new Date()
        const attendanceArray = Array.from(allAttendanceData)
        const temp = attendanceArray.filter((attendance) => 
        { 
          return ((date.getDay() === attendance[1].date.toDate().getDay()) && 
          (date.getMonth() === attendance[1].date.toDate().getMonth()) &&
            attendance[1].status === "In Office")
        })
          setInOffice(temp.length)
      }, [allAttendanceData])

    
    const getEmployeeFromId = (id) => {
        const currentEmp = allEmployeesData.get(id)
        setSingleEmployee(currentEmp)
    }

    const getEmployeeDataFromId = useCallback((id) =>{
        // console.log(id)
        const temp = Array.from(allAttendanceData).filter(attendance =>{
            return attendance[1].employeeId === id;
        })
        // console.log(temp)
        setSingleEmployeeData(temp)
    }, [allAttendanceData])

    const verifyEmployee = async (employeeId) => {
        await db.collection("employee").doc(employeeId)
        .update({
            isVerified:true
        })
        .then(() =>{
            retrieveAllEmployees(organizationData.uid);
            // allEmployeesData.get(employeeId).isVerified = true;
        })
    }

    const deleteEmployee = async (employeeId) => {
        await db.collection("employee").doc(employeeId)
        .delete()
        .then(() =>{
            retrieveAllEmployees(organizationData.uid)
            // allEmployeesData.delete(employeeId);
        })
    }


    const updateUserDetails = async(firstName, lastName, email, password, cpassword) =>{
        console.log("Updating user details")

        const user = firebase.auth().currentUser

        user.updateEmail(email)
        .then(() =>{
            user.updateProfile({
                displayName: `${firstName} ${lastName}`
            })
            .then(() =>{
                db.collection("organization").doc(organizationData.uid)
                .update({
                    adminName: `${firstName} ${lastName}`
                })
    
            }).then(() =>{
                if(password!== "" && password === cpassword){
                    user.updatePassword(password)
                }
            })
        }).catch((e)=>{
            console.log(e)
        }) 

        
   
    }

    const updateOrganizationDetails = async(orgName, industry, country, startingTime, closingTime, latitude, longitude) =>{
        console.log("Updating organization details")

        const startingTimeArr = String(startingTime).split(":")
        const closingTimeArr = String(closingTime).split(":")

        await db.collection("organization").doc(organizationData.uid)
        .update({
            "name": orgName,
            "industry": industry,
            "country": country,
            "startingTime": new firebase.firestore.Timestamp(parseInt(startingTimeArr[0]) * 60 * 60 + parseInt(startingTimeArr[1]) * 60, 0),
            "closingTime": new firebase.firestore.Timestamp(parseInt(closingTimeArr[0]) * 60 * 60 + parseInt(closingTimeArr[1]) * 60, 0),
            "location": new firebase.firestore.GeoPoint(parseFloat(latitude), parseFloat(longitude)),
        }).then(()=>{
            alert("Organization details updated successfully")
            retrieveOrganizationData()
        })
    }

    const updateOrganizationCode = async () => {
        console.log("Updating organization code")

        const newCode = makeid(5)
        await db.collection("organization").doc(organizationData.uid)
        .update({
            uniqueCode: newCode
        }).then(()=>{
            alert(`Organization code updated to ${newCode}`)
            retrieveOrganizationData()
        })
    }



    useEffect(() => {
      if(currentUser){
        retrieveOrganizationData()
        .then((uid)=> {
            retrieveAttendanceData(uid)
            retrieveAllEmployees(uid)
        })
        .then(()=> getInOffice())
        }
    }, [currentUser])
    



    const value = {
        allAttendanceData, 
        organizationData,
        allEmployeesData,
        singleEmployeeData,
        inOffice,
        singleEmployee,
        retrieveAllEmployees,
        retrieveAttendanceData,
        retrieveSingleEmployee,
        verifyEmployee,
        deleteEmployee,
        getEmployeeDataFromId,
        getEmployeeFromId,
        updateUserDetails,
        updateOrganizationDetails,
        updateOrganizationCode
    }

    return(
        <AttendanceContext.Provider value={value} >{children}</AttendanceContext.Provider>
    )
}

export default AttendanceContext;