<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            
             <div class="header">
                 <span class="panel-title">{{title}}</span>
           </div>
        </div>
        <div class="panel-body">
            <form class="form" @submit.prevent="save()">
            <div class="row">
                <div class="col-sm-4">
                    <div>
                    <label>Company</label>
                    <input type="text" class="form-control" v-model="form.Company">
                    </div>
                    <div>
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="form.Name">
                    </div>
                </div>
                    <div class="col-sm-4">
                    <div>
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="form.Email">
                    </div>
                    <div>
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="form.Phone">
                    </div>
                </div>
                    <div class="col-sm-4">
                    <label>Address</label>
                    <textarea class="form-control" v-model="form.Address"></textarea> 
                    </div>
                
            </div>
               <button class="btn btn-default btn-sm">Save</button>
            </form>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
    name: 'CustomerForm',
    data(){
        return{
            option: {},
            title: 'Create',
            resource: 'api/customer',
            redirect: '/customers',
            store: 'api/customer',
            method: 'post'
        }

    },
    created(){
        if(this.$route.meta.mode === 'edit'){
            this.title = 'Edit'
            this.resource = 'api/customer/' + this.$route.params.id
            this.store = 'api/customer/' + this.$route.params.id
            this.method = 'put'
        }
        this.Show()
    },
    computed: mapGetters(['form']),
    methods:{
        save(){
            var vm = this
            this.$store.dispatch('save', {
                method: vm.method,
                store: vm.store,
                form: vm.form,
            })
            .then(() => {
                vm.$router.push(vm.redirect)
            })
            
        },
        Show(){
             var vm = this
            //     // eslint-disable-next-line no-console
            //     console.log(vm.resource)
            this.$store.dispatch('Show', {
                resource: vm.resource
            })
           
        },
    }
}

</script>
