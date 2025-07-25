<template>
  <div class="formulario">
    <ul>
        <li>
            <label for="cedula_doctor">Cedula Doctor: </label>
            <input type="number" id="cedula_doctor">
        </li>
        <li>
            <label for="cedula_paciente">Cedula Paciente: </label>
            <input type="number" id="cedula_paciente">
        </li>
        <li>
            <label for="fecha_cita">Fecha cita: </label>
            <input type="datetime-local" id="fecha_cita">
        </li>
        <li><button>Agendar</button></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.formulario {
  max-width: 400px;
  margin: auto;
  padding: 15px;
  background: #177e70;
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
  border: 1px solid #0b886d;
  border-radius: 4px;
  font-size: 16px;
}

button {
  padding: 10px;
  background: #341b92;
  color: rgb(138, 230, 253);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background: #111d5f;
}
</style>