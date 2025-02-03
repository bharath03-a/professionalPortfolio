/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bharath",
  title: "Hi all, I'm Bharath",
  subTitle: emoji(
    "A passionate Data Science and Data Engineer 🚀 with expertise in building scalable data solutions using Python, PySpark, Airflow, Apache Beam, Kafka and Google Cloud, transforming complex data challenges into intelligent insights. \
    Keen on exploring cutting-edge technologies like Large Language Models (LLMs), Retrieval-Augmented Generation (RAG) based applications to push the boundaries of innovative data-driven solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1KfInFGeisNxfZ4pVRfg-cwMKy-7pRqAa/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bharath03-a",
  linkedin: "https://www.linkedin.com/in/bharath-velamala-570578181/",
  gmail: "bharathvelamala1929@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA SCIENCE AND DATA ENGINEER PASSIONATE ABOUT SCALABLE DATA SOLUTIONS AND CUTTING-EDGE TECHNOLOGIES WITH AI",
  skills: [
    emoji(
      "⚡ Build scalable ETL pipelines and automate workflows using tools like Apache Beam, Airflow, and PySpark"
    ),
    emoji("⚡ Develop and deploy machine learning models, including NLP and deep learning solutions, for actionable insights"),
    emoji(
      "⚡ Expertise in cloud platforms like Google Cloud and AWS for data engineering and analytics"
    ),
    emoji(
      "⚡ Hands-on experience in Snowflake for data warehousing and Terraform for infrastructure automation."
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

 softwareSkills: [
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  // {
  //   skillName: "R Programming",
  //   fontAwesomeClassname: "fas fa-chart-line" // No direct R icon, using a chart-related icon
  // },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  // {
  //   skillName: "Bash Scripting",
  //   fontAwesomeClassname: "fas fa-terminal"
  // },
  {
    skillName: "Google Cloud Platform",
    fontAwesomeClassname: "fab fa-google"
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "Snowflake",
    fontAwesomeClassname: "fas fa-snowflake"
  },
  // {
  //   skillName: "Apache Spark",
  //   fontAwesomeClassname: "fas fa-bolt" // No direct Spark icon, using a lightning bolt
  // },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "Kubernetes",
    fontAwesomeClassname: "fas fa-cubes"
  },
  // {
  //   skillName: "Terraform",
  //   fontAwesomeClassname: "fas fa-code-branch" // No direct Terraform icon, using a branching icon
  // },
  // {
  //   skillName: "Tableau",
  //   fontAwesomeClassname: "fas fa-chart-bar"
  // },
  // {
  //   skillName: "Apache Beam",
  //   fontAwesomeClassname: "fas fa-stream" // No direct Beam icon, using a stream-related icon
  // },
  // {
  //   skillName: "PyTorch",
  //   fontAwesomeClassname: "fas fa-brain" // No direct PyTorch icon, using a brain icon for AI/ML
  // },
  // {
  //   skillName: "TensorFlow",
  //   fontAwesomeClassname: "fas fa-project-diagram" // No direct TensorFlow icon, using a network diagram
  // }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Arizona",
      logo: require("./assets/images/UofALogo.png"),
      subHeader: "Master of Science in Data Science",
      duration: "August 2023 - May 2025",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Indian Institute of Technology, Patna",
      logo: require("./assets/images/IITPLogo.png"),
      subHeader: "Bachelor of Technology in Mechanical Engineering",
      duration: "July 2017 - May 2021",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show the workExperiences section
  experience: [
    {
      role: "Data Science Intern",
      company: "Mayo Clinic",
      companylogo: require("./assets/images/MayoLogo.png"), // Replace with the actual logo path
      date: "May 2024 – Present",
      desc: "Developed a desktop application for analyzing clinical and EHR records, achieving significant performance improvements.",
      descBullets: [
        "Integrated MedSpaCy for medical condition analysis with a 75% success rate.",
        "Engineered custom NLP components, boosting application performance by 50%.",
        "Deployed clinical data tools, reducing data processing time by 30% and improving decision-making efficiency by 25%."
      ]
    },
    {
      role: "Data Engineer",
      company: "HSBC",
      companylogo: require("./assets/images/HSBCLogo.jpg"), // Replace with the actual logo path
      date: "Jan 2023 – Aug 2023",
      desc: "Led data migration and automation projects, improving execution speed and decision-making efficiency.",
      descBullets: [
        "Built automated ETL pipelines and migrated data from mainframes to Google Cloud, improving execution speed by 40%.",
        "Developed real-time ETL workflows on Google Cloud, enhancing decision-making efficiency by 30%.",
        "Resolved over 50 data migration bugs, improving consistency and reducing bug resolution time by 25%."
      ]
    },
    {
      role: "Associate Data Engineer",
      company: "SpringML Inc.",
      companylogo: require("./assets/images/springMLLogo.jpg"), // Replace with the actual logo path
      date: "Jan 2021 – Dec 2022",
      desc: "Designed scalable ETL pipelines and automated workflows to enhance operational efficiency.",
      descBullets: [
        "Developed ETL pipelines using Google Cloud Dataflow and Apache Beam, processing over 2M+ records in under 8 minutes.",
        "Built automated workflows in BigQuery and dashboards in Looker, improving operational visibility by 40%.",
        "Integrated SAP IBP API with Google Data Fusion for supply chain analytics, reducing forecast retrieval time by 35%."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
