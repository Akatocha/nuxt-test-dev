import axios from "axios";
let dynamicRoutes = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
    return res.data.map(user => `/users/${user.id}`);
  });
};

export default dynamicRoutes;
