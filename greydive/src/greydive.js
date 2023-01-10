import axios from "axios";

export default axios.create({
  baseURL: "https://greydive-echezuri-default-rtdb.firebaseio.com/",
});
