import { useFetch } from "@vueuse/core";

const API_URL = "https://kulmiye-api.up.railway.app";

const getDegree = async () => {
    const { isFetching, data, error } = await useFetch(`${API_URL}/degree/`).get().json();
    return { isFetching, data, error };
};
const getScholarhip = async () => {
    const { isFetching, data, error } = await useFetch(`${API_URL}/scholarship/`).get().json();
    return { isFetching, data, error };
};

export { getScholarhip,getDegree };
