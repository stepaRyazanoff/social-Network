import axios from "axios"

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '9947e954-4f4d-4295-a326-d1a6673e842c'
    },
})

export const usersAPI = {
    getUsers: async (pageSize = 1, currentPage = 5) => {
        const response = await
            instance.get(`users?count=${pageSize}&page=${currentPage}`)
        return response.data
    },

    setSubscribe: async id => {
        const response = await
            instance.post(`follow/${id}`)
        return response.data
    },

    deleteSubscribe: async id => {
        const response = await
            instance.delete(`follow/${id}`)
        return response.data
    }
}

export const authAPI = {
    authMe: async () => {
        const response = await
            instance.get('auth/me')
        return response.data
    },

    getAuthPhoto: async userId => {
        const response = await
            instance.get(`profile/${userId}`)
        return response.data.photos.small
    }
}

export const profileAPI = {
    getProfile: async id => {
        const response = await
            instance.get(`profile/${id}`)
        return response.data
    }
}




