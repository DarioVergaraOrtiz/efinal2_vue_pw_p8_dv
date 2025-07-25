<template>
  <div class="formulario">
    <ul>
      <li>
        <label for="cedula">Cedula: </label>
        <input type="number" id="cedula" v-model="cedula" />
      </li>
      <li>
        <label for="nombre">Nombre: </label>
        <input type="text" id="nombre" v-model="nombre" />
      </li>
      <li>
        <label for="apellido">Apellido: </label>
        <input type="text" id="apellido" v-model="apellido" />
      </li>
      <li>
        <label for="genero">Genero</label>
        <input type="" id="genero" v-model="genero" />
      </li>
      <li>
        <button @click="guardarDoctor()">Guardar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { guardarDoctorFachada } from "../client/ClienteDoctor.js";
export default {
  data() {
    return {
      cedula: 0,
      nombre: "",
      apellido: "",
      genero: "",
    };
  },
  methods: {
    async guardarDoctor() {
      const bodyDoctor = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        genero: this.genero,
      };

      const data = await guardarDoctorFachada(bodyDoctor);
      console.log(data);
      this.cedula = 0;
      this.nombre = "";
      this.apellido = "";
      this.genero = "";
    },
  },
};
</script>

<style>
.formulario {
  max-width: 400px;
  margin: auto;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: initial;
}
ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

button {
  padding: 10px;
  background: #341b92;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background: #111d5f;
}
</style>