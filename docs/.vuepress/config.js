module.exports = {
  title: "Core Mechanics",
  description: "We can fix this!",
  base: "/",
  themeConfig: {
      sidebar: [
          "/",
          "/core-lore/",
          {
              text: "Core Players",
              children: [
                  {
                      text: "Active Original Players",
                      children: [
                          "/players/adelaide-judochop",
                          "/players/gia-holbrook",
                          "/players/jolene-willowtree",
                          "/players/kelvin-drumsolo",
                          "/players/zoey-kirchner"
                      ]
                  },
                  {
                      text: "Active Exchanged Players",
                      children: [
                          "/players/cannonball-sports",
                          "/players/mindy-kugel",
                          "/players/shirai-mcelroy"
                      ]
                  },
                  "/players/notable-shadowed",
                  "/players/former-exchanged",
                  "/players/incinerated-redacted",
                  "/players/clone-replica"
              ]
          },
          {
            text: "Team History",
            children: [
              "/team-history/season12/",
              "/team-history/season13/",
              "/team-history/season14/",
              "/team-history/season15/",
              "/team-history/season16/",
              "/team-history/season17/",
              "/team-history/season18/",
              "/team-history/season19/",
              "/team-history/season20/",
              "/team-history/season21/",
              "/team-history/season22/",
              "/team-history/season23/",
              "/team-history/season24/",
            ]
          }
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
