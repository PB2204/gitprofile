// gitprofile.config.js

const config = {
  github: {
    username: 'PB2204', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'pabitra-banerjee',
    twitter: 'FossilianBhed',
    mastodon: '',
    facebook: 'Pabitra Banerjee',
    instagram: '',
    youtube: 'Explore-Code', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'rockstarpabitra',
    dev: 'rockstarpabitra',
    stackoverflow: 'RockstarPabitra', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://pabitrabanerjee.newsgoogle.org',
    phone: '+91 9064485906',
    email: 'rockstarpabitra2204@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1uvkcu_ExfxZiIrCHRsbAS_V6JM3E2xQy/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    // 'PHP',
    // 'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'MySQL',
    // 'PostgreSQL',
    'Git',
    'HTML',
    // 'Docker',
    // 'PHPUnit',
    'CSS',
    // 'Antd',
    'Tailwind',
    'Bootstarp',
    'Python',
    'Machine Learning',
  ],
  experiences: [
    {
      company: 'MB WEBBERS',
      position: 'Founder , CEO & Full-Stack Developer',
      from: 'June 2022',
      to: 'Present',
      companyLink: 'https://mb-webbers.newsgoogle.org',
    },
    {
      company: 'Code Explorer',
      position: 'Founder & CEO',
      from: 'August 2022',
      to: 'Present',
      companyLink: 'https://explorecode.newsgoogle.org',
    },
    {
      company: 'Craft Space',
      position: 'CTO',
      from: 'February 2023',
      to: 'Present',
      companyLink: 'https://craftspace.in',
    },
  ],
  certifications: [
    {
      name: 'Google Code-Jam Farewell Round',
      body: 'My Position Was 150th AT Google Code Jam Farewell Round',
      year: 'April 2023',
      link: 'https://drive.google.com/file/d/19ZidazNG1VkpIfIOtKejAMIciKS84OdT/view?usp=sharing',
    },
  ],
  education: [
    {
      institution: 'Manbazar Radha Madhab Institution',
      degree: 'Higher Secondary',
      from: '2019',
      to: '2021',
    },
    {
      institution: 'Bikramjeet Goswami Memorial College',
      degree: 'B.Sc. Mathematics',
      from: '2021',
      to: '2022',
    },
    {
      institution: 'Manbhum Mahavidyalaya',
      degree: 'B.Sc. Cpmputer Science',
      from: '2023',
      to: '2027',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  // externalProjects: [
  //   {
  //     title: 'Project Name',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
  //     imageUrl: 'https://via.placeholder.com/250x250',
  //     link: 'https://example.com',
  //   },
  //   {
  //     title: 'Project Name',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
  //     imageUrl: 'https://via.placeholder.com/250x250',
  //     link: 'https://example.com',
  //   },
  // ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'rockstarpabitra', // to hide blog section, keep it empty
    limit: 5, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ` Developed by <a 
      class="text-primary" href="https://pabitrabanerjee.newsgoogle.org"
      target="_blank"
      rel="noreferrer"
    >Pabitra Banerjee</a> || Made With ❤️`,
};

export default config;
