<template>
    <h1 class="title">Pedido personalizado</h1>
    <div>
        <p class="sub-title">Selecciona los sabores que están presentes en tu pastel</p>
        <FormComponent />
    </div>
</template>

<script>
import FormComponent from '../components/FormComponent.vue'
export default {
    components:{
        FormComponent
    }
}
</script>

<style>
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
</style>