import axios from "axios"

export const userUpdate = (user, changingField, value) => {
    return axios.put(`https://6324bd619075b9cbee414973.mockapi.io/users/${user.id}`, {[changingField]: value,})
}