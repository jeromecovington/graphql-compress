/**
 * Compress query by stripping duplicate whitespace, and whitespace adjacent to
 * brackets, braces, parentheses, colons, and commas.
 *
 * @param {string} text - the text to compress
 * @returns {string} query - the compressed query
 */
module.exports = function graphQLCompress(text) {
  const query = text.replace(/\s+/g, ' ');
  return query.replace(/\s*(\[|\]|\{|\}|\(|\)|:|\,)\s*/g, '$1');
};
