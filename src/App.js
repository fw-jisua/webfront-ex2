import git from './sns1.PNG'
import twit from './sns2.PNG'
import logo from './logo.PNG'
import './App.css';

function App() {
  return (
   <div className="whole">
     <div className="left-side">
        <div className="side-container">
          <div className="navi">
            <div className="menu">
              <a href="#">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </a>
            </div>
          </div>
          <div className="social">
            <div className="sns">
              <a href="#"><img src={git} alt="github"></img></a><br></br>
              <a href="#"><img src={twit} alt="twitter"></img></a>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <header>
          <div className="title">
            <table className="ti">
              <tr>
                <td><img src={logo} alt="logo"></img></td>
                <td className="text1">&nbsp;spring</td>
                <td className="text2">initializr</td>
              </tr>
            </table>
          </div> 
        </header>
        <hr size="1px" width="1500px" color="#DEDEDE"></hr><br></br>
        <form>
          <div className="form1">
            <div className="left">
              <div className="field1">
                <div className="field1-1">
                  <label className=" label1">&nbsp;Project</label>
                    <div className="radio">
                      <div className="group-radio">                    
                        <input type="radio" name="radio1"></input>
                        <label className="label2">&nbsp;Maven Project</label>&nbsp;&nbsp;
                        <input type="radio" name="radio1"></input>
                        <label className="label2">&nbsp;Gradle Project</label>                    
                      </div>
                    </div>
                </div>
                <div className="field1-1">
                  <label className=" label1">&nbsp;Language</label>
                    <div className="radio">
                      <div className="group-radio">                    
                        <input type="radio" name="radio1"></input>
                        <label className="label2">&nbsp;Java</label>&nbsp;&nbsp;&nbsp;
                        <input type="radio" name="radio1"></input>
                        <label className="label2">&nbsp;Kotlin</label>&nbsp;&nbsp;&nbsp;
                        <input type="radio" name="radio1"></input>
                        <label className="label2">&nbsp;Groovy</label>                    
                      </div>
                    </div>
                </div>
              </div>
              <div className="field2">
                <div className="field2-1">
                  <label className=" label1">&nbsp;Spring Boot</label>
                    <div className="radio2">
                      <div className="group-radio">                    
                        <input type="radio" name="radio1"></input>
                        <label className="label2">&nbsp;2.5.0 (SNAPSHOT)</label>&nbsp;&nbsp;&nbsp;
                        <input type="radio" name="radio1"></input>
                        <label className="label2">&nbsp;2.5.0 (M2)</label>&nbsp;&nbsp;&nbsp;
                        <input type="radio" name="radio1"></input>
                        <label className="label2">&nbsp;2.4.4 (SNAPSHOT)</label>&nbsp;&nbsp;&nbsp;
                        <input type="radio" name="radio1"></input>
                        <label className="label2">&nbsp;2.4.3</label><br></br>
                        <input type="radio" name="radio1"></input>
                        <label className="label2">&nbsp;2.3.10 (SNAPSHOT)</label>&nbsp;&nbsp;&nbsp;
                        <input type="radio" name="radio1"></input>
                        <label className="label2">&nbsp;2.3.9 (M2)</label>                  
                      </div>
                    </div>
                </div>
              </div>
              <div className="field3">
                <div className="field3-1">
                  <label className=" label1">&nbsp;Project Metadata</label>
                </div>
                <div className="field3-2">
                  <label className=" label3">Group</label>&nbsp;&nbsp;&nbsp;
                  <input type="text" name="text1"></input>
                </div>
                <div className="field3-3">
                  <label className=" label3">Atrifact</label>&nbsp;&nbsp;&nbsp;
                  <input type="text" name="text1"></input>
                </div>
                <div className="field3-4">
                  <label className=" label3">Name</label>&nbsp;&nbsp;&nbsp;
                  <input type="text" name="text1"></input>
                </div>
                <div className="field3-5">
                  <label className=" label3">Description</label>&nbsp;&nbsp;&nbsp;
                  <input type="text" name="text1"></input>
                </div>
                <div className="field3-6">
                  <label className=" label3">Package name</label>&nbsp;&nbsp;&nbsp;
                  <input type="text" name="text1"></input>
                </div>
                <div className="field3-7">
                  <div className="f3-label">
                    <label className=" label3">&nbsp;&nbsp;&nbsp;&nbsp;Packaging</label>
                  </div>
                  <div className="radio3">
                    <div className="group-radio2">
                      <input type="radio" name="radio1"></input>
                      < label className="label2">&nbsp;Jar</label>&nbsp;&nbsp;&nbsp;
                      <input type="radio" name="radio1"></input>
                      < label className="label2">&nbsp;war</label>&nbsp;&nbsp;&nbsp;
                    </div>
                  </div>
                </div>
                <div className="field3-7">
                  <div className="f3-label1">
                    <label className=" label3">Java</label>
                  </div>
                  <div className="radio4">
                    <div className="group-radio2">
                      <input type="radio" name="radio1"></input>
                      < label className="label2">&nbsp;15</label>&nbsp;&nbsp;&nbsp;
                      <input type="radio" name="radio1"></input>
                      < label className="label2">&nbsp;11</label>&nbsp;&nbsp;&nbsp;
                      <input type="radio" name="radio1"></input>
                      < label className="label2">&nbsp;8</label>&nbsp;&nbsp;&nbsp;
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="field4">
                <div className="field4-1">
                  <label className=" label1">&nbsp;Dependencies</label>
                </div>
                <div className="field4-2">
                  <div className="btn1">
                   <button className="btn1-1" type="button">
                    <span className="btn-sp">
                      <sapn className="btn-sp-1">
                        ADD&nbsp;
                        <span>DEPENDENCIES</span>
                        ...
                      </sapn>
                      <span>CTRL + B</span>
                    </span>
                   </button>
                  </div>
                </div>
              </div>
              <hr size="1px" width="750px" color="#DEDEDE"></hr><br></br>
              <div className="field4">
               <label className=" label4">&nbsp;No dependency selected</label>
              </div>
            </div>
          </div>
        </form>
        <div className="bottom">
          <div className="btn2">
            <div className="btn2-1">
              <div className="btn2in">
                <button className="btn2-1-1" type="button">
                  <span className="btn-sp">
                    <sapn className="btn-sp-1">
                      GENERATE&nbsp;
                    </sapn>
                    <span>CTRL + enter</span>
                  </span>
                </button>
              </div>
            </div>
            <div className="btn2-2">
              <div className="btn2in">
                <button className="btn2-1-2" type="button">
                  <span className="btn-sp">
                     <sapn className="btn-sp-1">
                      EXPLORE&nbsp;
                    </sapn>
                    <span>CTRL + SPACE</span>
                  </span>
                </button>
              </div>
            </div>
            <div className="btn2-3">
              <div className="btn3in">
                <button className="btn2-1-3" type="button">
                  <span className="btn-sp">
                     <sapn className="btn-sp-1">
                      SHARE...&nbsp;
                    </sapn>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>      
      </div>
      <div className="right-side">
        <div className="rs1">
          <div className="switch">
            <a href="#">
              <span className="sp1"></span>
            </a>
            <a href="#">
              <span className="sp2"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
