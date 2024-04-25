import client from "./client";
endpoint = "/auth";

const login = (email, password) => client.post(endpoint, { email, password });

export default {
  login,
};
