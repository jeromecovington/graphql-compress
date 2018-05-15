module.exports = function graphQLCompress(text) {
  const query = text.replace(/\s+/g, ' ');
  return query.replace(/\s*(\[|\]|\{|\}|\(|\)|:|\,)\s*/g, '$1');
};
