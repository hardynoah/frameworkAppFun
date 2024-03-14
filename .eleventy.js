const Test = require('./src/_includes/components/test');
const Navbar = require('./src/_includes/components/navbar');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addWatchTarget("src/css/");

  eleventyConfig.addPassthroughCopy("src/blog/posts/img");
  eleventyConfig.addWatchTarget("src/blog/posts/img");


  eleventyConfig.addShortcode("Test", Test);
  eleventyConfig.addShortcode("Navbar", Navbar);

  eleventyConfig.addCollection('posts', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/blog/posts/**/*.md');
  })

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: '_site',
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
}