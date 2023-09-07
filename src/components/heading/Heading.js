import stevePic from "./../../assets/steve.png";
import "./Heading.css";

export const Heading = () => {
  return (
    <>
      <div className="app-heading">
        <div className="app-heading-circle">
          <img className="app-logo" src={stevePic} alt="Good job Steve" />
        </div>
        <h1 className="app-heading-text">Chuckle Checklist</h1>
      </div>
      <h2>Add Joke</h2>
    </>
  );
};
