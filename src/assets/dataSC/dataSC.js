
import {
    person1,
    person2,
    person3,
    person4,
  } from "./images";
  
  const course = {
    info: {
      title: "Javascript For Beginners",
      students: "208",
      last_Update: "2021/11/09",
      language: "english",
      stars_average: 4.6,
      reviews: "158",
      creator_name: "john doe",
    },
    details: {
      price_old: "Credits",
      price_new: "4",
      price_discount: "",
      course_img: "../images/1.png",
      features: [
        {
          icon: "fa fa-tv",
          title: "52 hours on-demand video",
        },
        { icon: "fas fa-file", title: "76 articles" },
        {
          icon: "fa fa-download",
          title: "696 downloadable resources",
        },
        { icon: "fas fa-infinity", title: "Full lifetime access" },
        { icon: "fa fa-mobile", title: "Access on mobile and TV" },
        { icon: "fas fa-tasks", title: "Assignments" },
        {
          icon: "fa fa-certificate",
          title: "Certificate of completion",
        },
      ],
    },
  
    rating: {
      stars: [
        { percent: "60%", star: 5 },
        { percent: "20%", star: 4 },
        { percent: "10%", star: 3 },
        { percent: "7%", star: 2 },
        { percent: "3%", star: 1 },
      ],
      stars_average: 4.6,
      reviews: "158",
    },
  
    chapters: [
      {
        id: 1,
        title: "Introduction",
        total_parts: "14",
        total_time: "1hr 3min",
        parts: [
          { sub_title: "Lorem ipsum", time: "08:12" },
          { sub_title: "dolor sit, amet ", time: "03:24" },
          { sub_title: "onsectetur adipiscing, elit fames.", time: "12:21" },
          { sub_title: "Nibh nulla etiam ", time: "09:33" },
          { sub_title: "non, mi metu", time: "10:15" },
          {
            sub_title: "Environment",
            time: "15:12",
          },
        ],
      },
      {
        id: 2,
        title: "Basics: ",
        total_parts: "39",
        total_time: "3hr 16min",
        parts: [
          { sub_title: "Lorem ipsum", time: "08:12" },
          { sub_title: "dolor sit, amet ", time: "03:24" },
          { sub_title: "onsectetur adipiscing, elit fames.", time: "12:21" },
          { sub_title: "Nibh nulla etiam ", time: "09:33" },
          { sub_title: "non, mi metu", time: "10:15" },
          {
            sub_title: "Environment",
            time: "15:12",
          },
        ],
      },
      {
        id: 3,
        title: "Efficient Development ",
        total_parts: "19",
        total_time: "1hr 15min",
        parts: [
          { sub_title: "Lorem ipsum", time: "08:12" },
          { sub_title: "dolor sit, amet ", time: "03:24" },
          { sub_title: "onsectetur adipiscing, elit fames.", time: "12:21" },
          { sub_title: "Nibh nulla etiam ", time: "09:33" },
          { sub_title: "non, mi metu", time: "10:15" },
          {
            sub_title: "Environment",
            time: "15:12",
          },
        ],
      },
      {
        id: 4,
        title: "Working with Control Structures",
        total_parts: "38",
        total_time: "3hr 52min",
        parts: [
          { sub_title: "Lorem ipsum", time: "08:12" },
          { sub_title: "dolor sit, amet ", time: "03:24" },
          { sub_title: "onsectetur adipiscing, elit fames.", time: "12:21" },
          { sub_title: "Nibh nulla etiam ", time: "09:33" },
          { sub_title: "non, mi metu", time: "10:15" },
          {
            sub_title: "Environment",
            time: "15:12",
          },
        ],
      },
      {
        id: 5,
        title: "Behind the Scenes of JavaScript",
        total_parts: "12",
        total_time: "1hr 34min",
        parts: [
          { sub_title: "Lorem ipsum", time: "08:12" },
          { sub_title: "dolor sit, amet ", time: "03:24" },
          { sub_title: "onsectetur adipiscing, elit fames.", time: "12:21" },
          { sub_title: "Nibh nulla etiam ", time: "09:33" },
          { sub_title: "non, mi metu", time: "10:15" },
          {
            sub_title: "Environment",
            time: "15:12",
          },
        ],
      },
    ],
  
    description: {
      course_desc:
        "JavaScript is THE most important programming language you need to learn as a web developer - and with this course, you make sure that you will not miss a single thing you have to know as a JavaScript developer!This is the most comprehensive and modern course you can find on JavaScript - it's based on all my JavaScript knowledge AND teaching experience. It's both a complete guide, starting with the core basics of the language, as well as an extensive reference of the JavaScript language and environment, ensuring that both newcomers as well as experienced JavaScript developers get a lot out of this course.",
      course_info: {
        question: "Who this course is for",
        answer: [
          "Beginner web development students who have no or only little JavaScript experience",
          "Also developers who know the basics about JavaScript and want to deepen their knowledge",
          "Advanced JavaScript developers who want to learn more about the nitty-gritty details and dive into advanced concepts",
          "Everyone interested in learning JavaScript and all about how it works",
        ],
      },
    },
    coments: [
      {
        user: "David M.",
        img: person1,
        time: "1 year ago",
        star: "5",
  
        title: "Really useful",
        text:
          "Beyond very pragmatic explanations about basic and advanced JavaScript concepts, the course is full of best practices to design/build apps in JavaScript without frameworks (huge focus on the DOM). This is not so easy to find as most of the courses focus on vanilla JS to build basic examples or frameworks to build more advanced apps. Really useful!",
      },
      {
        user: "Matsu C",
        img: person2,
        time: "2 days ago",
        star: "4",
        title: "Keep learning",
        text:
          "Bundling the courses and know how of successful instructors, Academind strives to deliver high quality online educationOnline Education, RealLife Success that's what Academind stands for. Learn topics like web development, data analyses and more in a fun and engaging way.Currently, you can find courses published by Maximilian Schwarzmüller and Manuel Lorenz, more instructors to come!",
      },
      {
        user: "Christopher A.",
        img: person3,
        time: "6 days ago",
        star: "5",
        title: "good course",
        text:
          "I have taken almost 2 months to complete this course. For the reason I started this course is because I wanna explore deeper in React. Max React Course is extremely amazing as well, and let me got an offer!What I really wanna emphasize it that this JS - Complete Course gives me the Confidence to say Give me network and JS, I can create any software!. Maybe a bit boast, but that is really how I feel whenever I learn from Max.I wanna say thank you Max, even though we never meet in real life, you are really my best mentor in my life time, and I appreciate a lot you spend so many time on create these fabulous courses! Hope that I can create something helpful to people like you do to world, in the future",
      },
      {
        user: "Ncha Takoh E.",
        img: person4,
        time: "just a moment ago",
        star: "4",
        title: "very useful",
        text:
          "it was nice course at least i got some understanding where i was in doubt, the instructor was good, that is why i was able to buy two of it course again react and nodejs",
      },
    ],
  
    creator: {
      creator_name: "john doe",
      creator_rating: "4.7",
      creator_courses: "12",
      creator_reviews: "1028",
      creator_skill: "web developer",
      creator_img: person2,
      creator_desc:
        "Hello, I am John doe and I am a web developer. I live and work in Los Angeles, CA. I spend most of my day, experimenting with HTML, CSS and Javascript (and it's endless list of frameworks).",
    },
  };


  export default course;