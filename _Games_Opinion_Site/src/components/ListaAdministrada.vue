<template>
  <div class="container">
    <h2 class="text-center mt-5">Administrando la Lista de Opiniones</h2>
    <div class="mt-5" v-if="enviandoOpiniones.length > 0" data-cy="administrandoLista">
      <div class="table-responsive">
        <table class="table table-hover">
          <thead class="table-light">
            <tr>
              <th>#</th>
              <th>Persona</th>
              <th>Juego</th>
              <th>Opinión</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in enviandoOpiniones" :key="index">
              <td>{{index+1}}</td>
              <td v-text="item.nombre"></td>
              <td v-text="item.juego.name"></td>
              <td v-text="item.opinion"></td>
              <td><button type="button" class="btn btn-danger" @click="eliminando(index)" :data-cy="'eliminarOpinion'+index">Eliminar</button></td>
              <td><button type="button" class="btn btn-info" @click="editando(item)">Editar</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="alert alert-danger mt-5" role="alert" v-else data-cy="sinAdministrar">
      No existen opiniones para administrar.
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'ListaAdministrada',
  computed: {
    ...mapGetters(['enviandoOpiniones']),
  },
  methods: {
    eliminando(index){
      let resultado = confirm("Seguro que desea eliminar");
      if (resultado) {
        this.$store.dispatch('eliminarOpinion',index);
      }
    },
    editando(item){
      this.$router.push({name: 'Editando', params: {id: item.id}});
    }
  }
}
</script>