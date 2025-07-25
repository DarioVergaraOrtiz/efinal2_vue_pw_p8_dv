import axios from "axios";

const URL = "http://localhost:8081/api/agenda/v1/pacientes";

const guardarPaciente = async (body) => {
    const data = axios.post(URL,body).then(b => b.data);
    return data;
}

export const guardarPacienteFachada = async(body) => {
    return await guardarPaciente(body);
} 