import axios from 'axios'


export const userChat = (id) => axios.get(`/chat/${id}`)
export const getUser = (userId) => axios.get(`/user/${userId}`)
export const getMessages = (chatId) => axios.get(`/message/${chatId}`)
export const addMessage = (data) => axios.post('/message', data)
export const sendMessage = (chatId, message) => axios.post(`/message/${chatId}`, {message})