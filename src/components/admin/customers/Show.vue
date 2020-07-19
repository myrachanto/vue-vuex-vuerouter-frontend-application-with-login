<template>
    <div class="panel panel-default">
        <div class="panel-heading">
             <div class="header">
               <button class="btn btn-success btn-sm" @click="$router.push('/customer/' + form.ID + '/edit')">Edit</button>
                           <span class="panel-title">{{form.Company}}/ {{form.Name}}</span>

               <button class="btn btn-danger btn-sm" @click="remove()">Delete</button>
           </div>
        </div>
        <div class="panel-body">
            <div class="row">
                <div class="col-sm-4">
                    <div>
                    <label>Company</label>
                    <p>{{form.Company}}</p>
                    </div>
                    <div>
                    <label>Name</label>
                    <p>{{form.Name}}</p>
                    </div>
                </div>
                    <div class="col-sm-4">
                    <div>
                    <label>Email</label>
                    <p>{{form.Email}}</p>
                    </div>
                    <div>
                    <label>Phone</label>
                    <p>{{form.Phone}}</p>
                    </div>
                </div>
                    <div class="col-sm-4">
                    <div>
                    <label>Created at</label>
                    <p>{{form.CreatedAt}}</p>
                    </div>
                    <div>
                    <label>Address</label>
                    <p>{{form.Address}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
    name: 'CutsomerShow',
    data(){
        return{
            resource: '/api/customer',
            redirect: '/'
        }

    },
    created(){
        this.Show()
    },
    computed: mapGetters(['form']),
    methods:{
        Show(){
             var vm = this
            //     // eslint-disable-next-line no-console
            //     console.log(vm.resource)
            this.$store.dispatch('View', {
                resource: vm.resource,
                id: vm.$route.params.id
            })
           
        }, 
        remove(){
            var vm = this
            this.$store.dispatch('remove', {
                resource: vm.resource,
                id: vm.$route.params.id
            })
            .then(() => {
                vm.$router.push(vm.redirect)
            })
            .catch(error => {
                return error
            })
        },
       
    }
}

</script>
