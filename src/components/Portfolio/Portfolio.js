import Project from "./Project/Project";

const works = [
    {
        src: "/hero.jpg",
        title: "title",
        text: "text",
    },
    {
        src: "/hero.jpg",
        title: "title",
        text: "text",
    },
    {
        src: "/hero.jpg",
        title: "title",
        text: "text",
    },

]

export default function Portfolio(props) {
    return (
        <ul className="list-group">
        {props.works.map((index) => {
          return (
            <li className="list-group-item" key={index}>
            <Project props={works} />
          </li>
          );
        })}
      </ul>
    );
  }