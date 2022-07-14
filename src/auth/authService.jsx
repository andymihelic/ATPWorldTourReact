import axios from "../api/axios";

const url = "/api/users";
const loginURL = "/api/auth/login";

const register = async (name, username, email, password) => {
  return await axios.post(url + "/register", {
    name,
    username,
    email,
    password,
  }).then((response) => {
    localStorage.setItem("token", JSON.stringify(response.data));
    return response.data
  })
};

const login = async (email, password) => {
  return await axios
    .post(loginURL, { email, password })
    .then(({data: response}) => {
      if (response.data.token) {      
        localStorage.setItem("token", JSON.stringify(response.data));
      }
      return response.data
    });
};

const recoveryEmail = async (email) => {
  return await axios.post(url + "/forgotPassword", {email})
  .then((response) => {
    localStorage.setItem("token", JSON.stringify(response.data));
    return response.data
  })
}

const resetPassword = async (accessToken, password) => {
  return await axios.post(`${url}/reset/${accessToken.token}`, {password})
  .then((response)=> {
    return response.data
  })
}

const authService = {
    register,
    login,
    recoveryEmail,
    resetPassword,
};
  
  export default authService;