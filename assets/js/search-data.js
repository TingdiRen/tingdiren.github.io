// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Working papers and publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "post-from-fairness-to-functions-schur-concavity-and-the-principle-of-transfers",
        
          title: "From Fairness to Functions: Schur-Concavity and the Principle of Transfers",
        
        description: "An introduction to Schur-concavity, bridging the gap between the intuitive Pigou-Dalton principle of transfers and the formal mathematics of inequality measurement in welfare economics.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Schur/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-passed-the-ph-d-qualifying-examination",
          title: 'Passed the Ph.D. qualifying examination! 🎉',
          description: "",
          section: "News",},{id: "news-i-presented-the-design-of-an-optimal-insurance-contract-a-lipschitz-neural-network-approach-at-ime-2025-in-tartu-estonia",
          title: 'I presented The Design of an Optimal Insurance Contract: A Lipschitz Neural-Network Approach...',
          description: "",
          section: "News",},{id: "news-i-presented-ai-for-incentive-compatible-insurance-design-learning-optimal-indemnity-with-lipschitz-networks-at-the-16th-risk-management-and-actuarial-science-forum-in-jinan-china",
          title: 'I presented AI for Incentive-Compatible Insurance Design: Learning Optimal Indemnity with Lipschitz Networks...',
          description: "",
          section: "News",},{id: "news-our-working-paper-ai-for-incentive-compatible-insurance-design-learning-optimal-indemnity-with-lipschitz-networks-is-now-available-on-ssrn",
          title: 'Our working paper AI for Incentive-Compatible Insurance Design: Learning Optimal Indemnity with Lipschitz...',
          description: "",
          section: "News",},{id: "news-i-was-selected-for-the-2026-china-scholarship-council-csc-state-sponsored-study-abroad-program",
          title: 'I was selected for the 2026 China Scholarship Council (CSC) State-Sponsored Study Abroad...',
          description: "",
          section: "News",},{id: "news-i-presented-optimal-insurance-under-disappointment-theory-without-prior-expectation-at-the-2026-international-workshop-on-risk-sharing-in-shenzhen-china",
          title: 'I presented Optimal Insurance Under Disappointment Theory Without Prior Expectation at the 2026...',
          description: "",
          section: "News",},{id: "news-i-presented-adverse-selection-and-search-frictions-the-equilibrium-effects-of-insurance-regulation-at-ime-2026-in-seoul-south-korea",
          title: 'I presented Adverse Selection and Search Frictions: The Equilibrium Effects of Insurance Regulation...',
          description: "",
          section: "News",},{id: "news-i-presented-research-on-tweedie-modeling-for-unmatched-insurance-data-at-cicirm-2026-in-kunming-china",
          title: 'I presented research on Tweedie modeling for unmatched insurance data at CICIRM 2026...',
          description: "",
          section: "News",},{id: "news-our-working-paper-optimal-insurance-under-disappointment-theory-without-prior-expectation-is-now-available-on-ssrn",
          title: 'Our working paper Optimal Insurance Under Disappointment Theory Without Prior Expectation is now...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%69%6E%67%64%69%72%65%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/TingdiRen", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-3362-2370", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Tingdi-Ren/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=xT2aF08AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
