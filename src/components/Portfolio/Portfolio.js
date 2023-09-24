import Project from "./Project/Project";
import './Portfolio.css';
// import assetMgr from "./dashboard.png";
// import noteTaker from "./screenshot-blank.png";
// import techBlog from "./screenshot-blogpost-comments.png";
// import scheduler from "./screenshot_scheduler.png";
// import travelPlanner from "./app_screenshot.png";
// import weatherDash from "./weather-dash-screenshot.png";

const works = [
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
        src: "./app_screenshot.png",
        title: "International Travel Planner",
        text: "This fully front-end web app uses JavaScript, JQUERY, and third-party API fetch calls to deliver the currency rate and current weather for a selected city.",
        alt: "International Travel Planner Screenshot",
        url: "https://efogerson1.github.io/Travel-Planner/",
        repo: "https://github.com/efogerson1/Travel-Planner"
    },
    {
        src: "./weather-dash-screenshot.png",
        title: "Weather Dashboard",
        text: "This app uses the Open Weather API to fetch the weather data for any city in the world, as well asnlocal storage to save/render previously searched cities.",
        alt: "Weather Dashboard Screenshot",
        url: "https://randirose.github.io/module-6-weather-dashboard/",
        repo: "https://github.com/randirose/module-6-weather-dashboard"
    },

]

export default function Portfolio(props) {
    return (
        <div>
            <h1 className="portfolio-header">Check out my work below:</h1>
        <Project works={works} />
        </div>
    );
  }