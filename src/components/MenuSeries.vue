<template>
  <div>
    <nav
      class="navbar navbar-expand-sm navbar-dark bg-dark"
      aria-label="Third navbar example"
    >
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-sm-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/crear">Nuevo Personaje</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/"
                >Modificar Personaje</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Series</a
              >

              <ul v-if="series.length > 0" class="dropdown-menu">
                <!-- CARGAR SERIE EN UN BUCLE DINAMICAMENTE -->

                <li
                  class="list-group-item-dark"
                  v-for="serie in series"
                  :key="serie"
                >
                  <router-link :to="'/serie/' + serie.idSerie">
                    {{ serie.nombre }}
                  </router-link>
                </li>
              </ul>
              <ul v-else class="dropdown-menu">
                <li class="list-group-item-dark">{{ mensaje }}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ServiceSeries from "../services/ServiceSeries";
const service = new ServiceSeries();
export default {
  name: "MenuSeries",
  data() {
    return {
      series: [],
      mensaje: "No hay series disponbles",
    };
  },
  mounted() {
    service.getSeries().then((result) => {
      // console.log(result)
      this.series = result;
      // console.log(this.series)
    });
  },
};
</script>

<style></style>
