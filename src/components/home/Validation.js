
export default function Validation(user) {
    let errors = {}

    if(!user.services) {
        errors.services="service is required"
    }
    if(!user.email) {
        errors.email="email is required"
    } 
    else if (!/\S+@\S+\.\S+/.test(user.email)){
        errors.email="email invalid"
    }
    return errors;
}
