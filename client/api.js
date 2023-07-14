import sanityClient from "./sanity";
let sanityQuery = (query, params) => sanityClient.fetch(query, params);

export const getFeaturedResturants = () => {
  return sanityQuery(`
    *[_type == "featured"] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      }
    `);
};
