import { gql } from 'apollo-server';

const typeDefs = gql`
    type Query {
        pokemon (id: ID!): Pokemon
        results: [ResultItem]
    }

    type Pokemons {
        results: Results
    }

    type Results {
        resultItem: [ResultItem]
    }

    type ResultItem {
        name: String
        url: String
    }

    type Pokemon {
        id: ID
        forms: [Form]
        types: [Types]
    }

    type Form {
        name: String
    }

    type Types {
        type: Type
    }

    type Type {
        name: String
    }
`;

export default typeDefs