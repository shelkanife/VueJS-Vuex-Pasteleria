<template>
    <div>
        <label v-if="type != 'submit'">{{ label }}</label>
        <input v-if="type != 'textarea' && type != 'select' && type != 'submit'" :type="type" :placeholder="label" v-model="model"/>
        <input v-if="type == 'submit'" :type="type" :value="label"/>
        <textarea v-if="type == 'textarea'" :placeholder="label" v-model="model"></textarea>

        <select v-if="type == 'select'" v-model="model">
            <option disabled selected></option>
            <option value="cc">Tarjeta de crédito</option>
            <option value="cash">Efectivo</option>
            <option value="gc">Tarjeta de regalo</option>
        </select>
    </div>
</template>

<script>
export default {
    name:'FormGroup',
    props:{
        label:String,
        type:String,
        value:{
            type:String
        }
    },
    data:function(){
        return{
            model:''
        }
    },
    watch:{
        value(){
            this.$emit('input',this.model)
        }
    }
    
}
</script>

<style scoped>
    div{
        box-sizing: border-box;
        padding: 10px;
        width: 100%;
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
        color:black;
        background-color: aquamarine;
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
</style>
