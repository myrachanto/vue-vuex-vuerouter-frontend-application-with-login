import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:7777'
const state ={
    token: localStorage.getItem('access_token') || null,
    info:[],
    errors:{},
    form:{}
}
const getters ={
    getdata: (state) => state.info,
    geterrors: (state)=> state.errors,
    form: (state)=> state.form,
}
const actions ={ 
   async save(context,p){
    //    // eslint-disable-next-line no-console
    //     console.log(p.form.phone)
        axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
        await axios[p.method](p.store,{
                name: p.form.Name,
                company: p.form.Company,
                phone: p.form.Phone,
                address: p.form.Address,
                email: p.form.Email,
            })
        .then(response => {
            context.commit('newdata', response.data)                
        })
            
        .catch(error => {
            const message =  error
            context.commit('setError', message)             
        })
    },
    async View(context, p){
        axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
        await axios.get(`${p.resource}/${p.id}`)
        .then(response => {
            context.commit('viewData', response.data)                
        })
            
        .catch(error => {
            const message =  error
            context.commit('setError', message)             
        })
    },
   async Show(context, p){
        axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
        await axios.get(`${p.resource}`)
         .then(response => {
            context.commit('viewData', response.data)                
        })
            
        .catch(error => {
            const message =  error
            context.commit('setError', message)             
        })
    },
    async remove(context, p){
        axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
           await axios.delete(`${p.resource}/${p.id}`)
           .then(response => {
            context.commit('removedata', response.data)                
        })
            
        .catch(error => {
            const message =  error
            context.commit('setError', message)             
        })
           
    },
    async getdata(context, p){
        axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
           await axios.get(`${p.source}?column=${p.column}&direction=${p.direction}&per_page=${p.per_page}&page=${p.page}&search_column=${p.search_column}&search_operator=${p.search_operator}&search_query_1=${p.search_query_1}&search_query_2=${p.search_query_2}`)
                .then(response => {
                    localStorage.setItem('access_token', response.data.Token)
                    localStorage.setItem('username', response.data.uname)
                    localStorage.setItem('admin', response.data.Admin)
                    localStorage.setItem('supervisor', response.data.Supervisor)
                    localStorage.setItem('employee', response.data.Employee)
                    context.commit('getdata', response.data)         
                })
                .catch(error => {
                    console.log(error.error)
                    context.commit('setError', error.data)             
                })
    },     
}
const mutations = {
    getdata: (state, data) => (state.info = data),
    newdata: (state, data) => state.info.unshift(data),
    viewData: (state, data) => (state.form = data),
    removedata: (state, data) => (state.info = state.info.filter(d => d.id !== data.id)),
    setError: (state, errs)=> (state.errors = errs),
}

export default{
    state,
    getters,
    actions,
    mutations
}