<template>
  <div class="container">
    <h1 class="text-center mt-5">Lista de Juegos Disponibles</h1>
    <div class="row mt-5">
      <div class="col-12 col-sd-12 col-md-6 col-lg-4 col-xl-4 my-4" v-for="(juego, index) in enviandoJuegos" :key="index">
        <div class="card">
          <img :src="juego.background_image" class="card-img-top" :alt="juego.name">
          <div class="card-body">
            <h5 class="card-title" v-text="juego.name"></h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Rating: {{juego.rating}}</li>
            <li class="list-group-item">Released: {{juego.released}}</li>
            <li class="list-group-item">Updated: {{Intl.DateTimeFormat('CLP').format(new Date(juego.updated))}}</li>
          </ul>
          <div class="card-body text-center">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#modal-'+index" :data-cy="'opinando'+index">Opinar</button>
          </div>
        </div>
        <!-- modal -->
        <div class="modal fade" :id="'modal-'+index" tabindex="-1" :aria-labelledby="'exampleModalLabel'+index" aria-hidden="true" ref="modalOpinion">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" :id="'exampleModalLabel'+index">Escribe tu opinon para el juego: {{juego.name}}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre:</label>
                    <input type="text" class="form-control" :id="'nombre'+index" placeholder="Evan You" v-model="nombre">
                  </div>
                  <div class="mb-3">
                    <label for="opiniones" class="form-label">Opiniones</label>
                    <textarea class="form-control" :id="'opiniones'+index" rows="3" v-model="opiniones" placeholder="Tu opinion debe ir aquí..."></textarea>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="guardarOpinion(juego,index)" :data-cy="'guardarOpinion'+index">Guardar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'Home',
  data() {
    return {
      nombre: '',
      opiniones: '',
    }
  },
  computed: {
    ...mapGetters(['enviandoJuegos']),
  },
  methods: {
    guardarOpinion(juego){
      if (this.nombre && this.opiniones) {
        let opinionUser = {
          nombre: this.nombre,
          opinion: this.opiniones,
          juego: juego,
          id: Math.floor((Math.random() * 100) + 1)
        };
        this.$store.dispatch('guardandoOpinion',opinionUser);
        alert("Opinión agrega exitosamente");
        this.nombre = "";
        this.opiniones = "";
      } else {
        alert("Error al ingresar los datos.");
      }
    }
  }
}
</script>

<style scoped>
 .card-img-top{
   min-height: 150px;
   max-height: 150px;
 }
</style>