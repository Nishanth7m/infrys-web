module.exports = function rawHtmlLoader(source) {
  return `export default ${JSON.stringify(source)};`;
};

