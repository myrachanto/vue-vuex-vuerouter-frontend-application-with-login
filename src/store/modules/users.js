import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:7777'
const state ={
    token: localStorage.getItem('access_token') || null,
    username: localStorage.getItem('username') || null,
    admin: localStorage.getItem('admin') || false,
    supervisor: localStorage.getItem('supervisor') || false,
    employee: localStorage.getItem('employee') || false,
    errors: {},
    success: {},
    isProccessing: false
}
const getters ={
    loggedIn(state){
        return state.token != undefined
    },
    Token(state){
        return state.token
    },
    admin(state){
        return state.admin != false && state.supervisor != false && state.employee != false
    },
    supervisor(state){
        return state.supervisor != false && state.employee != false
    },
    username: (state)=> state.username,
    // admin: (state)=> state.admin != false,
    // supervisor: (state)=> state.supervisor != false,
    employee: (state)=> state.employee != false,
} 
const actions ={ 
    async login(context, payload){
      await axios.post('/login', {
            email: payload.email,
            password:payload.password
        })
        .then(response => {
                localStorage.setItem('access_token', response.data.Token)
                localStorage.setItem('username', response.data.uname)
                localStorage.setItem('admin', response.data.Admin)
                localStorage.setItem('supervisor', response.data.Supervisor)
                localStorage.setItem('employee', response.data.Employee)
                context.commit('login', response.data)                
        })
        .catch(Message => {
            const message =  Message
            context.commit('setError', message)             
        })
       
    },
    async Register(context,data){
            await axios.post('/register', {
                fname: data.fname,
                lname: data.lname,
                uname: data.uname,
                phone: data.phone,
                address: data.address,
                picture: data.picture,
                dob: data.dob,
                email: data.email,
                password:data.password
            })
            .then(response => {
                context.commit('newdata', response.data)                
            })
                
            .catch(Message => {
                const message =  Message
                context.commit('setError', message)             
            })

    },
    async logout(context){
            axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
            if(context.getters.loggedIn){
            await axios.get(`/api/logout/${context.getters.Token}`)
            .then(() => {
                localStorage.removeItem('access_token')
                localStorage.removeItem('username')
                localStorage.removeItem('admin')
                localStorage.removeItem('supervisor')
                localStorage.removeItem('employee')
                context.commit('logout')             
              })
              .catch(Message => {
                const message =  Message
                context.commit('setError', message)             
            })
        }
        
        }
        
}
const mutations = {
    
    newdata: (state, data) => state.info.unshift(data),
    login: (state, data) => {
        (state.token = data.token),
        (state.username = data.username),
        (state.admin = data.admin),
        (state.supervisor = data.supervisor),
        (state.employee = data.employee)
    }, 
    logout: (state)=> { 
        (state.token = null),
        (state.username = null),
        (state.admin = false),
        (state.supervisor = false),
        (state.employee = false)
    },
    setError: (state, errs)=> (state.errors = errs),
}

export default{
    state,
    getters,
    actions,
    mutations
}