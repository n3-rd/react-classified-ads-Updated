import axios from 'axios'


export const userChat = (id) => axios.get(`/chat/${id}`)
export const getUser = (userId) => axios.get(`/user/${userId}`)