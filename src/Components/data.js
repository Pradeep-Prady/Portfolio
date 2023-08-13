import nari1 from "./images/narikootam/narikootam (1).png";
import nari2 from "./images/narikootam/naritookam.png";
import nari3 from "./images/narikootam/narikootam (3).png";
import nari4 from "./images/narikootam/narikootam (4).png";
import nari5 from "./images/narikootam/narikootam (5).png";
import nari6 from "./images/narikootam/narikootam (6).png";
import nari7 from "./images/narikootam/narikootam (7).png";
import nari8 from "./images/narikootam/narikootam (8).png";
import nari9 from "./images/narikootam/narikootam (9).png";
import nari10 from "./images/narikootam/narikootam (10).png";
import nari11 from "./images/narikootam/narikootam (11).png";
import nari12 from "./images/narikootam/narikootam (12).png";
import nari13 from "./images/narikootam/narikootam (13).png";
import nari from "./images/narikootam/naritookam.png";

import food from "./images/foodstall/food (1).png";
import food1 from "./images/foodstall/food (1).png";
import food2 from "./images/foodstall/food (5).png";
import food3 from "./images/foodstall/food (6).png";
import food4 from "./images/foodstall/food (7).png";

import travel1 from "./images/travel/travel (1).png";
import travel2 from "./images/travel/travel (2).png";
import travel3 from "./images/travel/travel (3).png";
import travel4 from "./images/travel/travel (4).png";
import travel5 from "./images/travel/travel (5).png";
import travel6 from "./images/travel/travel (6).png";
import travel7 from "./images/travel/travel (7).png";

import music from "./images/music/music.png";
import music1 from "./images/music/music1.png";
import music2 from "./images/music/music2.png";

const projects = [
  {
    id: 1,
    title: "Friends Gallery",
    description:
      "A project designed to immortalize college memories by showcasing images of friends. It aims to foster lasting connections among friends and create a platform for reliving cherished moments.",
    role: "Solely responsible for the entire project, from conceptualization to implementation. Handled design, development, and deployment, ensuring a seamless platform to showcase friends' images and facilitate lasting connections",
    technologies:
      "Leveraged React.js for the user interface, implemented server-side logic using Node.js with Express, and stored data in MongoDB for efficient data management.",
    features:
      "Created a dynamic website enabling group chat for friends, facilitating real-time communication. Integrated image viewing with commenting capabilities, allowing users to interact with photos. Enabled photo uploading for expanding the collection and incorporated a review feature for sharing personal reflections.",
    time: "10 days",
    link: "https://github.com/Pradeep-Prady/Friends",
    challenges:
      "Encountered obstacles with email integration, real-time chat implementation, and troubleshooting issues. Overcame challenges by leveraging online resources to find solutions, ensuring seamless email communication and enabling effective real-time chat functionalities.",
    lessons:
      "This project provided invaluable lessons in email integration, real-time data handling, and enhanced UI animation techniques. It highlighted the significance of continuous learning, adapting to new technologies, and effectively leveraging online resources to overcome challenges",
    pic: nari,
    images: [
      {
        id: 1,
        url: nari1,
      },
      {
        id: 2,
        url: nari2,
      },
      {
        id: 3,
        url: nari3,
      },
      {
        id: 4,
        url: nari4,
      },
      {
        id: 5,
        url: nari5,
      },
      {
        id: 6,
        url: nari6,
      },
      {
        id: 7,
        url: nari7,
      },
      {
        id: 8,
        url: nari8,
      },
      {
        id: 9,
        url: nari9,
      },
      {
        id: 10,
        url: nari10,
      },
      {
        id: 11,
        url: nari11,
      },
      {
        id: 12,
        url: nari12,
      },
      {
        id: 13,
        url: nari13,
      },
    ],
  },

  {
    id: 2,
    title: "Food Stall",
    description:
      "Food Stall is a responsive website designed to cater to the essential needs of a small food stall business. The primary objective is to provide an online platform for showcasing various food offerings, displaying operational hours, and highlighting the stall's location.",
    role: "I single-handedly conceptualized, designed, and developed every aspect of this project, showcasing my proficiency across the entire development lifecycle.",
    technologies:
      "Leveraged React.js for the user interface, implemented server-side logic using Node.js with Express, and stored data in MongoDB for efficient data management.",
    features:
      "Food Stall enables users to seamlessly access the stall's menu, along with operational hours and precise location details. Users can also provide valuable feedback through reviews. On the admin side, a specialized calculator streamlines calculations based on available food items. Admins can also manage reviews, including reading and deleting them, for optimal control and customer engagement.",
    link: "https://github.com/Pradeep-Prady/FoodStall",
    challenges:
      " Creating a seamless food stall calculator posed a significant challenge, requiring intricate logic to ensure accurate calculations. Additionally, implementing a user-friendly system to read and manage reviews while maintaining an intuitive interface for hiding actions from the homepage demanded thoughtful design and implementation considerations.",
    lessons:
      "This project provided valuable insights into the development of admin panel functionalities, enhancing my skills in creating effective user interfaces. I refined my understanding of user experience design while implementing features that require a balance between functionality and aesthetics.",
    pic: food,
    images: [
      {
        id: 1,
        url: food1,
      },
      {
        id: 2,
        url: food2,
      },
      {
        id: 3,
        url: food3,
      },
      {
        id: 4,
        url: food4,
      },
    ],
  },
  {
    id: 3,
    title: "Travel Notes",
    description:
      "Travel Notes is a website dedicated to curating and sharing the finest travel destinations. Users can contribute by sharing their experiences and images from places they have visited, creating a valuable resource for fellow travelers to explore. The platform fosters a community-driven approach to help others discover new and exciting travel spots based on authentic and personal recommendations.",
    role: "I single-handedly conceptualized, designed, and developed every aspect of this project, showcasing my proficiency across the entire development lifecycle.",
    technologies:
      "Leveraged React.js for the user interface, implemented server-side logic using Node.js with Express, and stored data in MongoDB for efficient data management.",
    features:
      "Travel Notes is designed to help travelers connect and share. Users can explore travel stories from others, leave comments, and easily create an account to share their own experiences. It's a welcoming space to discover new places and get inspired for future adventures.",
    link: "https://github.com/Pradeep-Prady/FoodStall",
    challenges:
      "Crafting an intuitive user interface posed a primary challenge, demanding careful design to ensure user-friendly navigation. Additionally, establishing seamless backend connectivity, especially within the context of my MERN stack learning, presented a learning curve, making the project more intricate. Overcoming these hurdles required a balance of creativity and technical skills, ultimately contributing to a valuable learning experience.",
    lessons:
      "Through this project, I realized the need to enhance my UI and UX skills. It's crucial to create designs that are not only visually appealing but also user-friendly. I'm determined to improve my abilities in making interfaces that users find engaging and easy to navigate.",
    pic: travel1,
    images: [
      {
        id: 1,
        url: travel1,
      },
      {
        id: 2,
        url: travel2,
      },
      {
        id: 3,
        url: travel3,
      },
      {
        id: 4,
        url: travel4,
      },
      {
        id: 5,
        url: travel5,
      },
      {
        id: 6,
        url: travel6,
      },
      {
        id: 7,
        url: travel7,
      },
    ],
  },
  {
    id: 4,
    title: "Music Player",
    description:
      "The Music Player project involves creating an aesthetically pleasing user interface for music playback using the Spotify API. The aim is to enhance the music listening experience by seamlessly integrating with Spotify's extensive library and delivering a visually captivating interface. ",
    role: "I single-handedly conceptualized, designed, and developed every aspect of this project, showcasing my proficiency across the entire development lifecycle.",
    technologies:
      "The Music Player project harnesses the power of React.js and leverages the Spotify API to create a seamless and visually captivating music playback experience.",
    features:
      "The Music Player app boasts an attractive and user-friendly UI, prioritizing clear navigation. Users can effortlessly browse and play music, experiencing a visually appealing interface that enhances their music listening journey.",
    link: "https://github.com/Pradeep-Prady/FoodStall",
    challenges:
      "Connecting with the Spotify API posed challenges that needed careful solutions for smooth operation. Also, ensuring a responsive UI brought its own set of difficulties, requiring smart design choices for consistent user experiences across devices.",
    lessons:
      "This project taught me API integration skills, handling challenges, and enhancing my ability to create dynamic applications",
    pic: music,
    images: [
      {
        id: 1,
        url: music,
      },
      {
        id: 2,
        url: music1,
      },
      {
        id: 3,
        url: music2,
      },
    ],
  },
];

export default projects;

// When showcasing your portfolio projects, it's important to provide enough information to help viewers understand the scope, skills, and impact of each project. Here are the key details you should include for each portfolio project:

// 1. **Project Title**: Clearly indicate the project's name to grab the viewer's attention.

// 2. **Project Description**:
//    - Provide a brief overview of the project's purpose and goals.
//    - Mention any challenges or problems you aimed to solve.

// 3. **Role and Contribution**:
//    - Describe your role in the project (e.g., sole developer, team member, etc.).
//    - Explain your specific contributions, whether it's coding, design, or other aspects.

// 4. **Technologies Used**:
//    - List the programming languages, frameworks, libraries, and tools you employed.

// 5. **Features and Functionality**:
//    - Highlight the key features and functionalities of the project.
//    - Describe how users interact with the project and what it accomplishes.

// 6. **Screenshots or Visuals**:
//    - Include images or screenshots that showcase the project's user interface or design.
//    - If applicable, include images of different sections or pages.

// 7. **Code Samples (Optional)**:
//    - If allowed by the project's license, share a snippet of code that illustrates a unique or complex aspect of the project.

// 8. **Project Link (if applicable)**:
//    - If the project is live or hosted on a platform like GitHub, provide a link where viewers can interact with it.

// 9. **Project Duration**:
//    - Mention the timeframe it took to complete the project, from start to finish.

// 10. **Challenges and Solutions**:
//     - Describe any challenges you encountered during the project and how you addressed them.

// 11. **Lessons Learned**:
//     - Share any valuable insights or lessons you gained from working on the project.

// 12. **Impact or Results**:
//     - If possible, mention any positive outcomes, user feedback, or metrics that demonstrate the project's success.

// Remember that the purpose of showcasing your portfolio projects is to demonstrate your skills, problem-solving abilities, and the value you bring as a developer. Providing comprehensive yet concise information will help viewers assess your expertise and the quality of your work.
