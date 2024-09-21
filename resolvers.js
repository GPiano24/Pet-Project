const API_URL = 'https://pokeapi.co/api/v2';

const Query = {
    pokemon: async (parent, args, context, info) => {
        const { id } = args;
        const response = await fetch(`${API_URL}/pokemon/${id}`);
        return response.json();
    },

    // Get All Pokemons, API by Default limits to 20 pokemons
    // To Get more add to end of API ?offset=<X>&limit=<Y>
    // where X is the starting index and Y is the number of pokemons to get
    results: async (parent, args, context, info) => {
        const response = await fetch(`${API_URL}/pokemon`);
        const data = await response.json();
        return data.results;
    }
}

export default { Query };