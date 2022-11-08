<template>

<div>
    <div class="amount">
        <FlavorAmount />
    </div>
    <div class="amount">
        <OrnamentAmount />
    </div>
    <div id="table-container">

        <table>
            <thead>
                <tr>
                    <th colspan="9"><h1 class="sub-title">Historial de pedidos</h1></th>
                </tr>
                <tr>
                    <th># Pedido</th>
                    <th>Cliente</th>
                    <th>Télefono</th>
                    <th>Correo<br>eléctronico</th>
                    <th>Descripción</th>
                    <th>Fecha</th>
                    <th>Método<br>de pago</th>
                    <th>Selección<br>personalizada</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="$store.getters.allOrders.length == 0">
                    <td colspan="9"><h1>Sin pedidos</h1></td>
                </tr>
                <OrderRow v-else 
                v-for="(order,index) in $store.getters.allOrders" 
                :key="index" 
                :order="order"
                />
            </tbody>
        </table>

    </div>
</div>

</template>

<script>
import OrderRow from '../components/OrderRow.vue'
import FlavorAmount from '../components/FlavorAmount.vue'
import OrnamentAmount from '../components/OrnamentAmount.vue'
export default{
    components:{
        // OrderRow,
        FlavorAmount,
        OrnamentAmount,
        OrderRow
    }
}
</script>

<style >
.title{
    display: flex;
    font-size: 50px;
    justify-content: center;
    color: #8A392C;
}
.sub-title{
    font-size: 30px;
    color: #7A453D;
    font-family: 'Josefin Sans',monospace;
    margin-bottom: 10px;
}

#amount{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: scroll;
    justify-content: center;
    align-content: center;
}
#table-container{
    overflow-x: auto;
}
    table{
        width: 100%;
        margin-bottom: 10px;
    }
    tbody:nth-child(2n+1){
        background-color: rgb(197, 193, 193);
    }
    
    
    @media only screen and (max-width: 680px){
        
        table{
            display: block;
            width: 100%;
        }
}
</style>