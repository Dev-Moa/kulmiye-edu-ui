import router from "@/router";
import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: localStorage.getItem("token") ? true : false,
    currentUser: null,
    loading: false,
    error: null,
  }),
  actions: {
    async login(data) {
      try {
        const res = await axios.post("auth/token/login/", data);
        localStorage.setItem("token", res.data.auth_token); // Adjust this based on your actual token structure
        this.isLoggedIn = true;
        router.push({ name: "home" });
        return { success: true, data: res.data };
      } catch (error) {
        const errorMessage =
          error.response && error.response.data
            ? error.response.data.detail
            : "Login failed. Please try again.";
        return { success: false, message: errorMessage };
      }
    },

    async logout() {
      try {
        const res = await axios.post("auth/token/logout/");
        localStorage.removeItem("token");
        this.isLoggedIn = false;
        router.push("/");
        return { success: true, data: res.data };
      } catch (error) {
        const errorMessage =
          error.response && error.response.data
            ? error.response.data.detail
            : "Logout failed. Please try again.";
        return { success: false, message: errorMessage };
      }
    },

    async getCurrentUser() {
      this.loading = true;
      try {
        const res = await axios.get("auth/users/me/");
        this.currentUser = res.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async signup(data) {
      try {
        const res = await axios.post("auth/users/", data);
        localStorage.setItem("token", res.data.auth_token); // Adjust this based on your actual token structure
        this.isLoggedIn = true;
        router.push({ name: "home" });
        return { success: true, data: res.data };
      } catch (error) {
        const errorMessage =
          error.response && error.response.data
            ? error.response.data.detail
            : "Signup failed. Please try again.";
        return { success: false, message: errorMessage };
      }
    }
  },
});
