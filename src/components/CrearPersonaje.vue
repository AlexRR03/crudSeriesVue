<template>
  <div>
    <h1>Nuevo Personaje</h1>

    <form v-on:submit.prevent="crearPersonaje()">
      <div class="form-group">
        <label for="nombrePersonaje">Nombre</label>
        <input 
          type="email"
          class="form-control"
          id="nombrePersonaje"
          placeholder="Introduce el nombre del personaje nuevo"
          v-model="personaje.nombre"
        />
      </div>
      <div class="form-group">
        <label for="imgPersonaje">Imagen</label>
        <input 
          type="text"
          class="form-control"
          id="nombrePersonaje"
          placeholder="Introduce URl de la imagen"
          v-model="personaje.url"
        />
      </div>
        <div class="form-group">
        <label for="imgPersonaje">Serie</label>
        <input 
          type="text"
          class="form-control"
          id="nombrePersonaje"
          placeholder="Introduce nombre de la serie"
        v-model="personaje.nomSerie"
          />
      </div>
      <button type="submit" class="btn btn-primary">Crear Nuevo Personaje</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CrearPersonaje",
  data(){
    return{
        personaje:{
            nombre:"",
            url:"",
            nomSerie:""
        }
    }
  }
};
</script>

<style>
    h1{
        color: blue;
    }
    .form-group{
        margin: 20px;
    }

</style>
