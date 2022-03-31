import { users } from '../Datafile/UserData/Userdata'

export function Check_Login(usernumber, password) {
    try {
        let data = users.find(user => (user.usernumber === usernumber && user.password === password));
        return data;
    }
    catch (e) {
        console.log(e);
        return []
    }
}