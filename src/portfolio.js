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
  username: "Yue Li",
  title: "Hi all, I'm Yue",
  subTitle: emoji(
    "I'm a trilingual product & marketing professional (CN/JP/EN) with a strong background in robotics, AI, and SaaS solutions. My experience ranges from hands-on prototyping to strategic consulting and go-to-market execution for enterprise clients in Japan. I'm passionate about robotics innovation and fostering global collaboration across industries and cultures."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yueli-24",
  linkedin: "https://www.linkedin.com/in/yue-li-001007276/",
  gmail: "yue.career2023@gmail.com",
  facebook: "https://www.facebook.com/yueli24",
  twitter: "https://x.com/Yue_0124",
  xiaohongshu: "https://www.xiaohongshu.com/user/profile/5bf100a244363b50eb4e4f5a",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "Blending product strategy, technical consulting, and hands-on robotics experience to deliver intelligent solutions in a global context.",
  skills: [
    "📊 Deliver SaaS solution proposals tailored to the needs of Japanese enterprise clients, with deep understanding of their internal systems and business challenges.",
    "🧠 Plan and deliver AI-based consulting proposals and customer interviews, contributing to product iteration and strategic insights.",
    "🤖 Build and lead robotics projects using lidar, camera tracking, and sensor integration (C++ / Python / ROS).",
    "🗣 Trilingual communicator (CN / JP / EN) bridging product, engineering, and executive-level discussions across borders, including successful VC pitching and fundraising in Japanese.",
    "🎤 Organize AI hackathons and lead communities with 200+ members, bridging academia and industry through sponsorship and events.",
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "ROS", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "Figma", fontAwesomeClassname: "fab fa-figma" },
    { skillName: "SolidWorks", fontAwesomeClassname: "fas fa-cube" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Waseda University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Engineering in Mechanical Engineering",
      duration: "April 2020 - March 2024",
      grade: "GPA: 3.56 / 4.0 (Top 3%)",
      desc: "Studied robotics and core mechanical engineering with a focus on control systems, AI integration, and real-world application.",
      descBullets: [
        "### 🎓 Academic Excellence",
        "- **Honors**: Excellence Award from the Robotics Society of Japan (RSJ)",
        "- **Scholarships:**",
        "  - JASSO (Japanese Government Scholarship) ×2",
        "  - Fuji Seal Foundation Scholarship ×2",
        "",
        "### 📘 Core Curriculum",
        "- Robotics and Mechatronics",
        "- Control Engineering",
        "- Fluid Mechanics",
        "- Mechanics of Materials",
        "- Space Engineering",
        "- Image Processing",
        "- Introduction to Entrepreneurship",
        "- Programming (C, Python)"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false,
  experience: [
    {
      Stack: "Frontend Development",
      progressPercentage: "85%"
    },
    {
      Stack: "AI/ML",
      progressPercentage: "75%"
    },
    {
      Stack: "Business Development",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Channel Sales Manager",
      company: "Lark Japan",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "2024.06 - Present",
      desc: "Responsible for channel management, lead progression, solution design to contract signing, achieving 100% sales target.",
      descBullets: [
        "Channel partner relationship management",
        "Sales strategy development and execution",
        "Customer needs analysis and solution design"
      ]
    },
    {
      role: "Presales Intern",
      company: "Lark Japan",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "2023.11 - 2024.06",
      desc: "Deeply involved in presales support and customer proposal processes.",
      descBullets: [
        "Customer needs analysis",
        "Solution design",
        "Technical demonstration and support"
      ]
    },
    {
      role: "Frontend Intern",
      company: "Mujin Corporation",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "2022.07 - 2023.03",
      desc: "Conducted market research, wrote industry reports, created proposal materials, KOL collaboration, PR copywriting, 3D data organization, etc.",
      descBullets: [
        "Market research and industry analysis",
        "KOL collaboration and PR copywriting",
        "3D data organization and visualization"
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
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "EMIRA Business Competition 2022 Champion",
      subtitle: "Won 300,000 JPY prize money in the business competition",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "EMIRA Business Competition Logo",
      footerLink: [
        {
          name: "Certificate",
          url: ""
        }
      ]
    },
    {
      title: "Hackathon 'Aranami VC Award'",
      subtitle: "Received investment from Japanese VC",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Hackathon Logo",
      footerLink: [
        {
          name: "Project Details",
          url: ""
        }
      ]
    },
    {
      title: "IT Passport Examination",
      subtitle: "Successfully passed the Japanese IT certification exam",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "IT Passport Logo",
      footerLink: [
        {
          name: "Certificate",
          url: ""
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
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
