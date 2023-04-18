import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

axios.get(url).then(res => {
  console.log(res.data);
});
