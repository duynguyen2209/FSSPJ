import { LOG_IN } from "../../const"

export const Loginredux = (data) => {
    return{
        type: LOG_IN,
        payload:data
    }
}