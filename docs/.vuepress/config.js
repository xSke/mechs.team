module.exports = {
  title: "Core Mechanics",
  description: "We can fix this!",
  base: "/",
  themeConfig: {
      sidebar: [
          "/",
          "/core-lore",
          "/players",
          "/team-history/full-history",
          /*{
            text: "Team History",
            children: [
              {
                text: "Season 12-14",
                children: [
                  "/team-history/season12",
                  "/team-history/season13",
                  "/team-history/season14",
    
                ]
              },
              "/team-history/season15",
              "/team-history/season16",
              "/team-history/season17",
              "/team-history/season18",
              "/team-history/season19",
              "/team-history/season20",
              "/team-history/season21",
              "/team-history/season22",
              "/team-history/season23",
              "/team-history/season24",
            ]
          }*/
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
