module.exports = {
  title: "Core Mechanics",
  description: "We can fix this!",
  base: "/",
  themeConfig: {
      sidebar: [
          "/",
          "/some-other-page",
          "/core-lore",
          "/players",
          "/team-history"
      ],
      contributors: false,
      lastUpdated: true,
      lastUpdatedText: 'Last updated',
      repo: 'xSke/mechs.team',
      docsDir: "docs/"
  },
  extendsPageOptions: ({ filePath }, app) => {
      return {
        frontmatter: {
          permalinkPattern: '/:slug',
        },
      }
  },
};
