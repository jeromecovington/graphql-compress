function compressQuery(text) {
  const query = text.replace(/\s+/g, ' ');
  return query.replace(/\s*(\[|\]|\{|\}|\(|\)|:|\,)\s*/g, '$1');
}

query = `
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

console.log(compressQuery(query));
