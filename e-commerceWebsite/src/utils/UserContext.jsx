import { createContext } from "react" //used for creating global store
const UserContext=createContext({
    name:'Priya',
    email:'priya@gmail.com'
})
export default UserContext;
