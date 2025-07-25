import axios from "axios";

const URL = "http://localhost:8081/api/agenda/v1/doctores";

const guardarDoctor = async (body) => {
    const data = axios.post(URL,body).then(b => b.data);
    return data;
}

export const guardarDoctorFachada = async(body) => {
    return await guardarDoctor(body);
} 