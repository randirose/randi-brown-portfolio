import Project from "./Project/Project";

const works = [
    {
        src: "/dashboard.png",
        title: "Asset Manager",
        text: "textknsdfnsdknflsdnfksndlfknsdlfnlskdnflksndlfkn   sdkfjnsdkf k fjs eckf wekfj wkje",
        alt: "alt text",
        url: "https://www.google.com/",
        repo: "https://www.google.com/"
    },
    {
        src: "/screenshot-blank.png",
        title: "Note Taker",
        text: "text",
        alt: "alt text",
        url: "www.google.com",
        repo: "www.google.com"
    },
    {
        src: "/screenshot-blogpost-comments.png",
        title: "Tech Blog",
        text: "text",
        alt: "alt text",
        url: "www.google.com",
        repo: "www.google.com"
    },
    {
        src: "/screenshot-blogpost-comments.png",
        title: "Tech Blog",
        text: "text",
        alt: "alt text",
        url: "www.google.com",
        repo: "www.google.com"
    },
    {
        src: "/screenshot-blogpost-comments.png",
        title: "Tech Blog",
        text: "text",
        alt: "alt text",
        url: "www.google.com",
        repo: "www.google.com"
    },
    {
        src: "/screenshot-blogpost-comments.png",
        title: "Tech Blog",
        text: "text",
        alt: "alt text",
        url: "www.google.com",
        repo: "www.google.com"
    },

]

export default function Portfolio(props) {
    return (
        <div>
            <h1>Check out my work below:</h1>
            <hr className='divider'></hr>
        <Project works={works} />
        </div>
    );
  }