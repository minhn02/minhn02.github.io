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
  },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-home-server",
          title: 'Home Server',
          description: "Small media server",
          section: "Projects",handler: () => {
              window.location.href = "/projects/homeserver_project/";
            },},{id: "projects-hybrid-robotics-lab",
          title: 'Hybrid Robotics Lab',
          description: "Cooperative multi-agent reinforcement learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hybrid_project/";
            },},{id: "projects-nasa-jet-propulsion-laboratory",
          title: 'NASA Jet Propulsion Laboratory',
          description: "Power Distribution Systems and Optimal Control",
          section: "Projects",handler: () => {
              window.location.href = "/projects/jpl_project/";
            },},{id: "projects-mechanical-keyboards",
          title: 'Mechanical Keyboards',
          description: "Fun input devices",
          section: "Projects",handler: () => {
              window.location.href = "/projects/keyboard_project/";
            },},{id: "projects-pc-building",
          title: 'PC Building',
          description: "Custom desktop computer",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pc_project/";
            },},{id: "projects-space-enterprise-at-berkeley",
          title: 'Space Enterprise at Berkeley',
          description: "Collegiate liquid rocketry team",
          section: "Projects",handler: () => {
              window.location.href = "/projects/seb_project/";
            },},{id: "projects-slice-lab",
          title: 'SLICE Lab',
          description: "Hardware Software Codesign for Robotic Workloads",
          section: "Projects",handler: () => {
              window.location.href = "/projects/slice_project/";
            },},{
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
