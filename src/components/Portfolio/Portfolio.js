import Project from "./Project/Project";
import './Portfolio.css';

const works = [
    {
        src: "./resume-builder-screenshot.png",
        title: "Resume Builder",
        text: "This full-stack React/GraphQL app allows users to continuously add to and remove from their downloadable, formatted resume.",
        alt: "Resume Builder Screenshot",
        url: "https://secure-tundra-34525-b3ddf11b8e0b.herokuapp.com/",
        repo: "https://github.com/randirose/resume-builder-randi"
    },
    {
        src: "./dashboard.png",
        title: "Asset Manager",
        text: "Manages the tech equipment for Portland Public Schools using MySQL and Sequelize, as well as Bootstrap for our CSS framework.",
        alt: "Asset Manager Screenshot",
        url: "https://group-proj-2-edc9addaf351.herokuapp.com/",
        repo: "https://github.com/randirose/group-proj-2"
    },
    {
        src: "./screenshot-blank.png",
        title: "Note Taker",
        text: "Keep track of all your notes using a custom-built API and routing via Express.js. View (GET) Add (POST), Edit (PUT) and Delete (DELETE) your notes.",
        alt: "Note Taker Screenshot",
        url: "https://note-taker-randi-aa7af1574c68.herokuapp.com/",
        repo: "https://github.com/randirose/note-taker-randi"
    },
    {
        src: "./screenshot-blogpost-comments.png",
        title: "Tech Blog",
        text: "This MVC app includes robust front and back-end functionalities, including a database using MySQL/Sequelize and the Handlebars view engine.",
        alt: "Tech Blog Screenshot",
        url: "https://shrouded-stream-17541-93e4f0367693.herokuapp.com/",
        repo: "https://github.com/randirose/tech-blog-mvc-randi"
    },
    {
        src: "./screenshot_scheduler.png",
        title: "Work Day Scheduler",
        text: "This app uses Day.js, Bootstrap, and complex JavaScript to deliver an effecient workday calendar, color-coded by time-of-day.",
        alt: "Work Day Scheduler Screenshot",
        url: "https://randirose.github.io/week-5-challenge",
        repo: "https://github.com/randirose/week-5-challenge"
    },
    {
        src: "./weather-dash-screenshot.png",
        title: "Weather Dashboard",
        text: "This app uses the Open Weather API to fetch the weather data for any city in the world, as well asnlocal storage to save/render previously searched cities.",
        alt: "Weather Dashboard Screenshot",
        url: "https://randirose.github.io/module-6-weather-dashboard/",
        repo: "https://github.com/randirose/module-6-weather-dashboard"
    }

]

export default function Portfolio(props) {
    return (
        <div className="portfolio">
            <h1 className="portfolio-header mt-300">Check out my work below:</h1>
        <Project works={works} />
        </div>
    );
  }