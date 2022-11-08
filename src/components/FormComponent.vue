<template>
    <form v-on:submit="sendOrder" >
        <!--costumer data  -->
        <div id="costumer">
            <div>
                <label for="name">Nombre</label>
                <input type="text" v-model="name" placeholder="Su nombre"/>
            </div>
            <div>
                <label for="phone">Teléfono</label>
                <input type="phone" v-model="phone" placeholder="Su teléfono"/>
            </div>
            <div>
                <label for="phone">Correo</label>
                <input type="email" v-model="email" placeholder="Su correo"/>
            </div>
            <div>
                <label for="phone">Descripción</label>
                <textarea  v-model="description" placeholder="Breve descripción"></textarea>
            </div>
            <div>
                <label for="date">Fecha del evento</label>
                <input type="date" v-model="date" />
            </div>
            <div>
                <label for="method">Método de pago</label>
                <select v-model="method">
                    <option disabled selected></option>
                    <option value="Tarjeta de credito">Tarjeta de crédito</option>
                    <option value="Efectivo">Efectivo</option>
                    <option value="Targeta de regalo">Tarjeta de regalo</option>
                </select>
            </div>
        </div>
        <!-- checkboxes options -->
        <h4 class="sub-title">Selección de sabores</h4>
        <div class="fo-container" >
            <ItemComponent 
            v-for="(item,index) in this.$store.getters.flavors" 
            :key="index" 
            :itemName="item.name" 
            :cost="item.price" 
            :src="item.imgURL"  
            :type="item.type"
            :index="index"
            @send-price="updateTotal"
            />
        </div>
        <h4 class="sub-title">Selección de adornos</h4>
        <div class="fo-container">
            <ItemComponent 
            v-for="(item,index) in this.$store.getters.ornamentsL" 
            :key="index" 
            :itemName="item.name" 
            :cost="item.price" 
            :src="item.imgURL"
            :type="item.type"
            :index="index"
            @send-price="updateTotal"
            />
        </div> 
        <div>
            <h1 class="sub-title">Total: ${{ total }}</h1>
        </div>
        <!-- submit button -->
        <div>
            <input type="submit" value="Realizar pedido"/>
        </div>
    </form>
</template>

<script>
import ItemComponent from './ItemComponent.vue'
export default {
    name:'FormComponent',
    components:{
        ItemComponent
    },
    data:function(){
        return{
            total:0,
            name:'',
            phone:'',
            email:'',
            description:'',
            date:'',
            method:'',
            ordersCounter:0,
            itemSelection: [],
            itemTypeIndex:[]
        }

    },
    methods:{
        updateTotal(e){
            if(e.isChecked){
                this.itemSelection.push(e.name)
                this.itemTypeIndex.push({type:e.type,index:e.index,amount:e.amount})
                this.total+=e.price
            }else{
                this.itemSelection = this.itemSelection.filter(item => item !== e.name)
                this.total-=e.price
            }
        },
        resetFields(){
            this.total=0
            this.name=''
            this.phone=''
            this.email=''
            this.description=''
            this.date=''
            this.method=''
            this.itemSelection= []
            this.itemTypeIndex=[]
        },
        sendOrder(e){
            e.preventDefault()
            if(this.name !== '' && this.phone !== '' && this.email !== '' && this.description !== '' && this.date !== ''){
                if(this.itemSelection.length == 0)
                    alert("Tiene que seleccionar almenos un sabor o un adorno :)")
                else{
                    this.$store.commit('add',{
                        name:this.name,
                        phone:this.phone,
                        email:this.email,
                        description:this.description,
                        date:this.date,
                        method:this.method,
                        itemSelection:this.itemSelection,
                        total:this.total
                    })
                    this.$store.commit('substract',this.itemTypeIndex)
                    alert("Pedido realizado")
                    this.resetFields()
                    e.target.reset()
                }
            }else{
                alert("Debe de llenar todos los campos")
            }
            
        }
    }
}
</script>

<style>

form{
    padding-left: 50px;
    padding-right: 50px;
}
#costumer{
    display: grid;
    grid-template-columns: auto auto;
}

div{
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
}

.fo-container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
label{
        font-family: 'Josefin Sans',monospace;
        display: block;
        text-align: left;
    }
input{
    font-family: 'Josefin Sans',monospace;
    box-sizing: border-box;
    padding: 10px;
    font-size: 20px;
    display: block;
    width: 100%;
}
input[type=date]{
    color: gray;
}
input[type=submit]{
    padding:10px;
    font-size: 20px;
    color:white;
    background-color: #E6680A;
    border-radius: 15px;
}
input[type=submit]:hover{
    cursor: pointer;
}
textarea{
    width: 100%;
    font-family: 'Josefin Sans',monospace;
    font-size: 20px;
}
select{
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    font-family: 'Josefin Sans',monospace;
    font-size: 20px;
    color: gray;
}

@media only screen and (max-width: 860px){
    .fo-container{
        display:grid;
        grid-template-columns: auto auto auto;
    }
    #costumer{
        grid-template-columns: auto;
    }
    
}
</style>