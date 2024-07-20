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
    }
  }
`;