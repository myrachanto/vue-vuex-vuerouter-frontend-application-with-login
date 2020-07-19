<template>
    <data-viewer :source="source" :thead="thead" :filter="filter" :create="create" :title="title" :info="getdata">

        <template slot-scope="props">
            <tr>
            <td>{{props.item.ID}}</td>
            <td>{{props.item.Company}}</td>
            <td>{{props.item.Name}}</td>
            <td>{{props.item.Email}}</td>
            <td>{{props.item.CreatedAt}}</td>
            <td><button class="btn btn-info btn-sm" @click="$router.push('/customer/' + props.item.ID)">View</button>
            <button class="btn btn-default btn-sm" @click="$router.push('/customer/' + props.item.ID +'/edit')">Edit</button>
            </td></tr>
        </template>
    </data-viewer>
</template>
<script>
    import DataViewer from '../../DataViewer.vue'
    import { mapGetters } from 'vuex'
    export default{
        name: 'CustomerIndex',
        data(){
            return{
                title:'Customers',
                source: 'api/customer',
                create: '/customer/create',
                thead:[
                    {title: 'Id', key: 'ID', sort:true},
                    {title: 'Company', key: 'company', sort:true},
                    {title: 'Name', key: 'name', sort:true},
                    {title: 'Email', key: 'email', sort:true},
                    {title: 'Created at', key: 'created_at', sort:true}

                ],
                filter:[
                    'ID', 'company', 'name', 'email', 'phone', 'address', 'creeated_at'
                ]
            }

        },
        components:{
            DataViewer
        },
        computed: mapGetters(['getdata'])
    }
</script>
