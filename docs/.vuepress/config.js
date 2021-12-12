module.exports = {
  title: "Core Mechanics",
  description: "We can fix this!",
  base: "/",
  themeConfig:
      {
          logo: "/assets/mechsHomeLogo.png",
          logoDark: "/assets/mechsAwayLogo.png",
          navbar:
              [
                  {
                      text: "Core Lore",
                      link: "/core-lore-index.md",
                      children: [
                          "/core-lore/heist-root.md",
                          "/core-lore/maximum.md",
                          "/core-lore/the-core-is-down.md"
                      ]
                  },
                  {
                    text: "Players",
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
                        {
                            text: "Notable Shadowed Players",
                            children: [
                                "/players/mira-lemma",
                                "/players/bottles-suljak",
                                "/players/kofi-gildehaus",
                                "/players/kelvin-andante",
                                "/players/allan-kranch",
                                "/players/ilane-snart",
                                "/players/augusto-reddick"
                            ]
                        },
                        {
                            text: "Former Exchanged Players",
                            children: [
                                "/players/doc-anice",
                                "/players/lady-matsuyama",
                                "/players/lizzy-pasta",
                                "/players/torus-mcghee",
                                "/players/jasper-blather",
                                "/players/foxy-pebble",
                                "/players/jaylen-hotdogfingers"
                            ]
                        },
                        {
                            text: "Incinerated and Redacted",
                            children: [
                                "/players/hands-scoresburg",
                                "/players/ruffian-applesauce",
                                "/players/bees-taswell",
                                "/players/christian-combs"
                            ]
                        },
                        {
                            text: "Clones and Replicas",
                            children: [
                                "/players/wyatt-mason-xi",
                                "/players/cote-loveless-iii"
                            ]
                        }
                    ]
                  },
                  {
                      text: "Team History",
                      children:[
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
          sidebar:
              {
                  "/": [
                      {
                          text: "Home",
                          link: "/index.md"
                      },
                      {
                          text: "Core Lore",
                          link: "/core-lore-index.md"
                      }
                  ],
                  "/players/": [
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
                              {
                                  text: "Notable Shadowed Players",
                                  children: [
                                      "/players/mira-lemma",
                                      "/players/bottles-suljak",
                                      "/players/kofi-gildehaus",
                                      "/players/kelvin-andante",
                                      "/players/allan-kranch",
                                      "/players/ilane-snart",
                                      "/players/augusto-reddick"
                                  ]
                              },
                              {
                                  text: "Former Exchanged Players",
                                  children: [
                                      "/players/doc-anice",
                                      "/players/lady-matsuyama",
                                      "/players/lizzy-pasta",
                                      "/players/torus-mcghee",
                                      "/players/jasper-blather",
                                      "/players/foxy-pebble",
                                      "/players/jaylen-hotdogfingers"
                                  ]
                              },
                              {
                                  text: "Incinerated and Redacted",
                                  children: [
                                      "/players/hands-scoresburg",
                                      "/players/ruffian-applesauce",
                                      "/players/bees-taswell",
                                      "/players/christian-combs"
                                  ]
                              },
                              {
                                  text: "Clones and Replicas",
                                  children: [
                                      "/players/wyatt-mason-xi",
                                      "/players/cote-loveless-iii"
                                  ]
                              }
                          ]
                      },
                  ],
                  "/team-history/": [
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
              },
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
