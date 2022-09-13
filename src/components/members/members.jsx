import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Members</h1>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Shruthi</h1>
          <h3 className="position">Leader</h3>
          <h4 className="about">
          I am frontend web developer and have knowledge about html,css ,reactjs and javascript.I would like to become a full stack web developer and combine two domains make a project that would help the society in need!!!
          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">SShruthi</h1>
          <h3 className="position">Another Leader</h3>
          <h4 className="about">
          I am frontend web developer and have knowledge about html,css ,reactjs and javascript.I would like to become a full stack web developer and combine two domains make a project that would help the society in need!!!
          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">SSShruthi</h1>
          <h3 className="position">Another Leader Again</h3>
          <h4 className="about">
           I am frontend web developer and have knowledge about html,css ,reactjs and javascript.I would like to become a full stack web developer and combine two domains make a project that would help the society in need!!!
          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;