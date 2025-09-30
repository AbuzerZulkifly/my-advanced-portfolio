import htmlcss from "@/assets/images/skills/htmlcss.png"
import javascript from "@/assets/images/skills/javascript.png"
import tailwind from "@/assets/images/skills/tailwind.png"
import react from "@/assets/images/skills/react.png"
import nodejs from "@/assets/images/skills/node.png"
import express from "@/assets/images/skills/express.png"
import mongodb from "@/assets/images/skills/mongo.png"
import mysql from "@/assets/images/skills/mysql.png"
import git from "@/assets/images/skills/git.png"
import postman from "@/assets/images/skills/postman.png"
import figma from "@/assets/images/skills/figma.png"

export const mySkillsData =[
  {
    id: 1,
    skill: "HTML & CSS",
    category: "frontend",
    image: `${htmlcss}`,
    info: "Html is the standard markup language for creating web pages and web applications. CSS is a stylesheet language used to  present a document creatively.",
  },
  {
    id: 2,
    skill: "JavaScript",
    category: "frontend",
    image: `${javascript}`,
    info: "JavaScript is a versatile programming language that enables interactive web pages and is an essential part of web applications.",
  },
  {
    id: 3,
    skill: "TailwindCss",
    category: "frontend",
    image: `${tailwind}`,
    info: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML.",
  },
  {
    id: 4,
    skill: "ReactJS",
    category: "frontend",
    image: `${react}`,
    info: "React is a popular JavaScript library for building user interfaces, particularly single-page applications, by creating reusable UI components.",
  },

  {
    id: 5,
    skill: "NodeJS",
    category: "backend",
    image: `${nodejs}`,
    info: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, allowing developers to run JavaScript on the server side to build scalable network applications.",
  },
  {
    id: 6,
    skill: "ExpressJS",
    category: "backend",
    image: `${express}`,
    info: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.",
  },
  {
    id: 7,
    skill: "MongoDB",
    category: "backend",
    image: `${mongodb}`,
    info: "MongoDB is a NoSQL database that uses a document-oriented data model, providing high performance, scalability, and flexibility for modern applications.",
  },
  {
    id: 8,
    skill: "MySQL",
    category: "backend",
    image: `${mysql}`,
    info: "MySQL is a widely used open-source relational database management system that uses structured query language (SQL) for managing and manipulating data.",
  },

  {
    id: 9,
    skill: "Git & GitHub",
    category: "tools",
    image: `${git}`,
    info: "Git is a distributed version control system for tracking changes in source code during software development. GitHub is a web-based platform that hosts Git repositories and provides collaboration features.",
  },
  {
    id: 10,
    skill: "Postman",
    category: "tools",
    image: `${postman}`,
    info: "Postman is a popular API development and testing tool that allows developers to create, test, and document APIs efficiently.", 
  },

  {
    id: 11,
    skill: "Figma",
    category: "tools",
    image: `${figma}`,
    info: "Figma is a cloud-based design and prototyping tool that enables collaborative interface design, allowing multiple users to work on the same project in real-time.",  
  },
]