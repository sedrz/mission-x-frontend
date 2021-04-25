import React from "react";
import "./sidebarcheckbox.css";
class sidebarcheckbox extends React.Component {
  state = {
    Colornames: {
      Free: false,
      Premium: false,
      Animation: false,
      Game: false,
      Chatbot: false,
      AugmentedReality: false,
      14: false,
      56: false,
      78: false,
      913: false,
      ComputerScience: false,
      Maths: false,
      Science: false,
      Language: false,
      Art: false,
      Music: false,
    },
  };
  
  

  render() {
    return (
      <div className="SideBar">
       
   
       <div className="H4"><h4>SUBSCRIPTION</h4></div>
        <div><hr className="hr"/></div>
        <div><input type="checkbox" name="Free" onChange={this.chkclick} />Free</div>
        <div><input type="checkbox" name="Premium" onChange={this.chkclick} />Premium</div>
         <br />
         <br/>
        <h4>ACTIVITY TYPE</h4>
       <div> <hr className="hr" /></div>
       <div><input type="checkbox" name="Animation" onChange={this.chkclick} />Animation</div>
       <div><input type="checkbox" name="Game" onChange={this.chkclick}/>Game</div>
       <div><input type="checkbox" name="Chatbot" onChange={this.chkclick}/>Chatbot</div>
       <div><input type="checkbox" name="Augmented Reality" onChange={this.chkclick}/>Augmented Reality</div>
         <br />
         <br/>
        <h4>YEAR LEVEL</h4>
       <div> <hr className="hr" /></div>
        <div><input type="checkbox" name="1-4" onChange={this.chkclick} />1-4</div>
        <div><input type="checkbox" name="5-6" onChange={this.chkclick} />5-6</div>
        <div><input type="checkbox" name="7-8" onChange={this.chkclick} />7-8</div>
        <div><input type="checkbox" name="9-13" onChange={this.chkclick} />9-13</div> 
        <br />
        <br />
        <h4>SUBJECT MATTER</h4>
       <div> <hr className="hr"/></div>
        <div><input type="checkbox" name="Computer Science" onChange={this.chkclick} />Computer Science</div>
        <div><input type="checkbox" name="Maths" onChange={this.chkclick} />Maths</div>
         <div><input type="checkbox" name="Science" onChange={this.chkclick} />Science<div></div>
        <input type="checkbox" name="Language" OnChange={this.chkclick} />Language</div>
        <div><input type="checkbox" name="Art" OnChange={this.chkclick} />Art</div>
        <div><input type="checkbox" name="Music" OnChange={this.chkclick} />Music</div>
      </div>
    );
  }
}
export default sidebarcheckbox;