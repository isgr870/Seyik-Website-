module.exports = function (eleventyConfig) {
  // Static assets
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("seyik-logo.png");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");
  eleventyConfig.addPassthroughCopy("404.html");

  // Multi-page HTML (kept as-is for design fidelity)
  const pages = [
    "index.html",
    "about.html",
    "programs.html",
    "impact.html",
    "climate.html",
    "get-involved.html",
    "contact.html",
    "blog.html",
    "article-welcome.html",
    "team.html",
    "donate.html",
  ];
  pages.forEach((p) => eleventyConfig.addPassthroughCopy(p));

  // Blog from Markdown
  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi.getFilteredByGlob("content/blog/*.md").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-UG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
};
