import { useFetch } from "@vueuse/core"

const API_URL = "https://kulmiye-api.up.railway.app"

// get
const getUniversity = async () => {
    const { isFetching, data, error } = await useFetch(`${API_URL}/program/`).get().json();
    return { isFetching, data, error };
};

export {getUniversity}