import { PropsWithChildren } from "react";
import "./DefaultLayout.css";

const DefaultLayout = (props: PropsWithChildren) => {
  return (
    <div>
      <header className="default-header">
        <a href="/"><img className="logo" src="./qnadq.png" alt="" /></a>
        <div className="btn-container">
          <button className="btn btn-contact">CONTACT</button>
          <button className="btn btn-about">ABOUT</button>
          <button className="btn btn-services">SERVICES</button>
          <button className="btn btn-projects">PROJECTS</button>
          <button className="btn btn-career">CAREER</button>
          <button className="btn btn-join-us">JOIN US</button>
        </div>
      </header>
      {props.children}
    </div>
  );
};

export default DefaultLayout;
