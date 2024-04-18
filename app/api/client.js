import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.165.189:9000/api",
});

export default apiClient;
