import axios from "axios";

const BOARD_API_BASE_URL = "http://localhost:8080/api/auth";

class AuthService {
    signUp(auth) {
        return axios.post(BOARD_API_BASE_URL + "/signUp", auth)
    }

    login(auth) {
        return axios.post(BOARD_API_BASE_URL + "/login", auth)
    }
}

export default new AuthService();