<template>
   <div class="panel panel-default">
       <div class="panel-heading">
           <div class="header1" >
           <span class="panel-title">{{title}}</span>
               <router-link :to="create" class="btn btn-success btn-sm" >Create</router-link>
               <button class="btn btn-default btn-sm" @click="showFilter = !showFilter">filter</button>
           </div>
               <div class="header" v-if="showFilter">
                <div class="filter-column">
                    <select class="form-control" v-model="params.search_column">
                        <option v-for="(column,index) in filter" :key="index">{{column}}</option>
                    </select>
                </div>   
                <div class="filter-operator">
                    <select class="form-control" v-model="params.search_operator">
                        <option v-for="(value, key) in operators" :key="key" >{{key}}</option>
                    </select>
                    </div>   
                    <div class="input1">
                        <input type="text" class="form-control" v-model="params.search_query_1" 
                        @keyup.enter="fetchData" placeholder="search"/>
                        </div>         
               <div>  
                    <div class="input2" v-if="params.search_operator === 'between'">
                        <input type="text" class="form-control" v-model="params.search_query_2" 
                        @keyup.enter="fetchData" placeholder="search"/>
                        </div>  
                        <div><button class="btn btn-info btn-sm" @click="GetData()">Search</button></div>       
               </div>  
               </div>
       </div>
       <div class="panel-body">
       
            <div class="result">
                <table class="table table-responsive striped">
                    <thead>
                        <tr>
                            <th v-for="item in thead" :key="item.id">
                                <div class="data" @click="sort(item.key)" v-if="item.sort">
                                    <span>{{item.title}}</span>
                                    <span v-if="params.column === item.key">
                                        <span v-if="params.direction === 'asc'">&#x25B2;</span>
                                        <span v-else>&#x25BC;</span>
                                    </span>
                                </div>
                                <div v-else>
                                    <span>{{item.title}}</span>
                                </div>
                            </th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                     <slot v-for="item in info" :item="item"></slot>   
                    </tbody>
                </table>
            </div>
       </div>
       <div class="footer">
            <div>Per page</div>   
            <div><select class="form-control" v-model="params.per_page" @change="GetData">
                <option>7</option>
                <option>10</option>
                <option>25</option>
                <option>50</option>
                </select>
                </div>   
            <!-- <div>Showing : {{from}} - {{to}}
                of {{total}}</div>    -->
            <div class="p">
                <button class="btn btn-default" @click="prev()">Previos</button></div>   
                <div> Current page: </div>
                <div> <input type="number" class="form-control" v-model="params.page" @keyup.enter="GetData"/></div>
            <div><button class="btn btn-default" @click="next()">Next</button></div>   
        </div>
   </div>
</template>

<script>
//import Vue from 'vue'
// import axios from 'axios'
// import { mapActions} from 'vuex'
    export default {
        props: ['source', 'thead', 'filter', 'create', 'title', 'info'],
        data(){
            return{
                // info:[],
                showFilter: false,
                params:{ 
                    column: 'id',
                    direction: 'desc',
                    per_page:7,
                    page:1,
                    search_column: 'id',
                    search_operator: 'greater_than',
                    search_query_1:0,
                    search_query_2: ''
                },
                 operators:{
                     equal_to: '=',
                     not_equal_to: '<>',
                     less_than: '<',
                     greater_than: '>',
                     greater_than_or_equall_to: '>=',
                     less_than_or_equal_to: '<=',
                     in: 'IN',
                     not_in: 'NOT_IN', 
                     like: 'LIke',
                     between: 'Between',

                 }
            }
        },
    
        //computed: mapGetters(["getdata"]),
       created(){
                 this.GetData()
       },
            methods:{

                next(){
                   // if(this.next_page_url){
                        this.params.page ++
                        
                        this.GetData()
                  //  }
                },
                prev(){
                    //     if(this.prev_page_url){
                        this.params.page --
                        
                        this.GetData()
                  //  }
                },
                sort(column){
                    if(column === this.params.column){
                        if(this.params.direction === 'desc'){
                            this.params.direction = 'asc'
                        }else{
                            this.params.direction = 'desc'
                        }
                    }else{
                        this.params.column = column
                        this.params.direction = 'asc'
                    }
                    this.GetData()
                },
                GetData(){
                    //var vm = this
            this.$store.dispatch('getdata', {
                source: this.source,
                column: this.params.column,
                direction: this.params.direction,
                per_page: this.params.per_page,
                page: this.params.page,
                search_column: this.params.search_column,
                search_operator: this.params.search_operator,
                search_query_1: this.params.search_query_1,
                search_query_2: this.params.search_query_2,
            })
            // .then( => {
            // //     // // eslint-disable-next-line no-console
            // //     // console.log(response.data)
            // //     vm.info = response.data
            // // //    Vue.set(vm.info, 'info', response.data)
            // //     // eslint-disable-next-line no-console
            // //     // console.log(info)
            // //    // Vue.set(vm.data, 'model', response.data)
            // })
            }
            }

    
    }
</script>
<style>
.footer{
    display: flex;
    justify-content:space-between;
    width: 100%;
}
.header{
    display: flex;
    justify-content:space-between;
    width: 100%;
}
.p{
    justify-content: flex-end
}
</style>