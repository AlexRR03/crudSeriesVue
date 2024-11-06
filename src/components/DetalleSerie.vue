<template>
    <div>
        <h1>Detalle</h1>
        <div v-if="serie" class="card" style="width: 18rem;">
            <img :src="serie.imagen" class="card-img-top" alt="">
            <div class="card-body">
            <h5 class="card-title">Titulo: {{serie.nombre}}</h5>
            <p class="card-text">Puntuacion: {{serie.puntuacion}}</p>
            <router-link :to="'/serie/personajes/'+serie.idSerie"  class="btn btn-success">Personajes</router-link>
        </div>
    </div>
    </div>
</template>

<script>
import ServiceSeries from '@/services/ServiceSeries'
const service = new ServiceSeries()
export default {
    name:"DetalleSerie",
    data(){
        return{
            serie:null
        }
    },
    mounted(){
        this.loadSeries()
    },
    watch:{
        '$route.params.id'(nextVal,oldVal){
            if(nextVal!=oldVal){
                this.loadSeries()
            }
        }
    },
    methods:{
        loadSeries(){
        let id =this.$route.params.id
        service.getSeriesById(id).then(result=>{
            this.serie= result
            console.log(this.serie)
        })
        }
    }
}
</script>

<style>
    
</style>