<template>
  <div>
        <h1>Personajes</h1>
        <table class="table table-striped table-bordered" v-if="personajes.length > 0 ">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="personaje in personajes" :key="personaje">
                        <td>{{personaje.nombre}}</td>
                        <td><img :src="personaje.imagen" alt=""></td>
                    </tr>
                </tbody>
        </table>
        <div v-else>
            <h2>No existen Personajes de esta serie</h2>
        </div>
  </div>
</template>

<script>
import ServiceSeries from '@/services/ServiceSeries'
const service = new ServiceSeries()
export default {
    name:"PersonajesSerie",
    data(){
        return{ 
            personajes:[]
        }
    },
    mounted(){
        let idSerie = this.$route.params.idserie
        service.getPersonajesByIdSerie(idSerie).then(result=>{
            this.personajes = result
        })
    }
}
</script>

<style>
    img{
        width: 150px;
        height: 150px;
    }
    h2{
        color:red
    }
</style>