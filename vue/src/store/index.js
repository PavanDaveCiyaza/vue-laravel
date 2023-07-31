import { createStore } from "vuex";


const store = createStore({
    state: {
        user: {
            data: {
                name: "Tom Cook",
                email: "tom@example.com",
                imageUrl:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facea",
            },
            token: '123'
        }
    }
    
})

export default store;