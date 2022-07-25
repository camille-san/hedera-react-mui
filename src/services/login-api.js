import axios from "axios";

export function createNewUser(user) {
  axios
    .post("http://127.0.0.1:8080" + "/login", user)
    .then((response) => {
      // TOAST SUCCESS
      console.log(JSON.stringify(response.data));
    })
    .catch((err) => console.error(err));
}
