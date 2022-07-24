import axios from "axios";

export function hello(userId) {
  axios
    // .post("http://127.0.0.1:8080" + "/regular-expense/add", expense)
    // .then(() =>
    //   Toast.fire({
    //     toast: true,
    //     position: "top-right",
    //     iconColor: "green",
    //     showConfirmButton: false,
    //     timer: 3000,
    //     timerProgressBar: true,
    //     icon: "success",
    //     title: "Great Success",
    //   })
    // )
    // .catch((err) => console.error(err));
    .get("http://127.0.0.1:8080" + "/expenses/regulars?userId=" + userId)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch((error) => {
      console.error(JSON.stringify(error));
      return [];
    });
}
