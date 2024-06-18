<template>
  <div id="app">
    <h1>Tienda 32 Bits</h1>
    <h3>Lista de juegos</h3>
    <table border="1px">
      <thead>
        <th>Código</th>
        <th>Color</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>Precio</th>
        <th>Acciones</th>
      </thead>
      <tbody>
        <tr
          v-for="(juego, i) in juegos"
          :key="i"
          :style="{ color: juego.color }"
        >
          <td>{{ juego.codigo }}</td>
          <td>
            <select v-model="juego.color">
              <option value="black">Negro</option>
              <option value="red">Rojo</option>
              <option value="blue">Azul</option>
              <option value="green">Verde</option>
            </select>
          </td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>${{ Number(juego.precio).toLocaleString() }}</td>
          <td>
            <button @click="incrementar(i)">+</button>
            <button @click="decrementar(i)">-</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h5>Total: {{ totalJuegos }} juegos</h5>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState(["juegos"]),
    ...mapGetters(["totalJuegos"]),
  },
  methods: {
    ...mapActions(["incrementar", "decrementar"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}

table {
  width: 50%;
  margin: auto;
}
</style>
