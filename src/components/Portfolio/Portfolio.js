import Project from "./Project/Project";
import './Portfolio.css'

const works = [
    {
        src: "/dashboard.png",
        title: "Asset Manager",
        text: "textknsdfnsdknflsdnfksndlfknsdlfnlskdnflksndlfkn   sdkfjnsdkf k fjs eckf wekfj wkje",
        alt: "alt text",
        url: "https://group-proj-2-edc9addaf351.herokuapp.com/",
        repo: "https://github.com/randirose/group-proj-2"
    },
    {
        src: "/screenshot-blank.png",
        title: "Note Taker",
        text: "text",
        alt: "alt text",
        url: "https://note-taker-randi-aa7af1574c68.herokuapp.com/",
        repo: "https://github.com/randirose/note-taker-randi"
    },
    {
        src: "/screenshot-blogpost-comments.png",
        title: "Tech Blog",
        text: "text",
        alt: "alt text",
        url: "https://shrouded-stream-17541-93e4f0367693.herokuapp.com/",
        repo: "https://github.com/randirose/tech-blog-mvc-randi"
    },
    {
        src: "/screenshot_scheduler.png",
        title: "Work Day Scheduler",
        text: "text",
        alt: "alt text",
        url: "https://randirose.github.io/week-5-challenge",
        repo: "https://github.com/randirose/week-5-challenge"
    },
    {
        src: "/app_screenshot.png",
        title: "Internation Travel Planner",
        text: "text",
        alt: "alt text",
        url: "https://efogerson1.github.io/group-proj-1/",
        repo: "https://github.com/efogerson1/group-proj-1"
    },
    {
        src: "/weather-dash-screenshot.png",
        title: "Weather Dashboard",
        text: "text",
        alt: "alt text",
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