<template>
    <tr>
        <td>{{ order.orderNumber }}</td>
        <td>{{ order.name }}</td>
        <td>{{ order.phone }}</td>
        <td>{{ order.email }}</td>
        <td>{{ order.description }}</td>
        <td>{{ order.date }}</td>
        <td>{{ order.method }}</td>
        <td class="items">
            <ul>
                <li v-for="(item,index) in order.itemSelection" :key="index">
                    {{ item }}
                </li> 
            </ul>
        </td>
        <td>${{ order.total }}</td>
    </tr>
</template>

<script>
export default {
    name:'OrderRow',
    props:{
        order:Object
    },
    data(){
        return{
            delivered:false,
            rejected:false,
            orderNumber:Number
        }
    },
    methods:{
        markAsDelivered(){
            this.delivered=true
        }
    }
}
</script>

<style scoped>
    li{
        list-style: none;
        text-align: left;
        border-bottom: 1px black dotted;
    }
    tr{
        border-bottom: 2px solid black;
    }
</style>
