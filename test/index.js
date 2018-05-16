const assert = require('assert');

const graphQLCompress = require('../');

const query1 = `
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

const expected1 = '{allSpecies(after:"c3BlY2llczox"){edges{node{name,classification,designation,averageHeight,averageLifespan,eyeColors,hairColors,skinColors,language,homeworld{name,diameter,rotationPeriod,orbitalPeriod,gravity,population,climates,terrains,surfaceWater,residentConnection{edges{node{name,birthYear,eyeColor,gender,hairColor,height,mass,skinColor,created,edited,id}}},created,edited,id},created,edited,id}}}}';

assert.strictEqual(graphQLCompress(query1), expected1);

const query2 = `
{
  allSpecies (after: "c3BlY2llczox") {
    edges {
      node {
        name
        classification
        designation
        averageHeight
        averageLifespan
        eyeColors
        hairColors
        skinColors
        language
        homeworld {
          name
          diameter
          rotationPeriod
          orbitalPeriod
          gravity
          population
          climates
          terrains
          surfaceWater
          residentConnection {
            edges {
              node {
                name
                birthYear
                eyeColor
                gender
                hairColor
                height
                mass
                skinColor
                created
                edited
                id
              }
            }
          }
          created
          edited
          id
        }
        created
        edited
        id
      }
    }
  }
}
`;

const expected2 = '{allSpecies(after:"c3BlY2llczox"){edges{node{name classification designation averageHeight averageLifespan eyeColors hairColors skinColors language homeworld{name diameter rotationPeriod orbitalPeriod gravity population climates terrains surfaceWater residentConnection{edges{node{name birthYear eyeColor gender hairColor height mass skinColor created edited id}}}created edited id}created edited id}}}}'

assert.strictEqual(graphQLCompress(query2), expected2);
