const assert = require('assert');

const graphQLCompress = require('../');

const query = `
{
  allSpecies (after: "c3BlY2llczox") {
    edges {
      node {
        name,
        classification,
        designation,
        averageHeight,
        averageLifespan,
        eyeColors,
        hairColors,
        skinColors,
        language,
        homeworld {
          name,
          diameter,
          rotationPeriod,
          orbitalPeriod,
          gravity,
          population,
          climates,
          terrains,
          surfaceWater,
          residentConnection {
            edges {
              node {
                name,
                birthYear,
                eyeColor,
                gender,
                hairColor,
                height,
                mass,
                skinColor,
                created,
                edited,
                id
              }
            }
          },
          created,
          edited,
          id
        },
        created,
        edited,
        id
      }
    }
  }
}
`;

const expected = '{allSpecies(after:"c3BlY2llczox"){edges{node{name,classification,designation,averageHeight,averageLifespan,eyeColors,hairColors,skinColors,language,homeworld{name,diameter,rotationPeriod,orbitalPeriod,gravity,population,climates,terrains,surfaceWater,residentConnection{edges{node{name,birthYear,eyeColor,gender,hairColor,height,mass,skinColor,created,edited,id}}},created,edited,id},created,edited,id}}}}';

assert.strictEqual(graphQLCompress(query), expected);
