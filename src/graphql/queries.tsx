import { gql } from "@apollo/client";

export const GET_CHARACTERS = (page: number, filter: string) => gql`
  query {
    characters(page:${page}, filter: {name: "${filter}"}) {
     info {
      next
      prev
      }
      results {
        id
        image
        name
        status
        gender
        species
        type
        location {
          name
        }
      }
    }
  }
`;
export const GET_CHARACTER = (id: number) => gql`
  query {
    character(id:${id}) {
      name
      image
      status
      gender
      species
      type
      location {
        name
      }
    }
  }
`;
export const GET_EPISODES = (page: number, filter: string) => gql`
  query {
    episodes(page:${page}, filter: {name: "${filter}"}) {
     info {
      next
      prev
      }
      results {
        id
        name
        air_date
        episode
        characters {
          id
          name
          image
        }
       created
      }
    }
  }
`;