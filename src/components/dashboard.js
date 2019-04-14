import React, { Component } from 'react';
import '../styles/dashboard.css';
import HeaderComponent from './header';
import Button from 'react-bootstrap/Button';


class Dashboard extends Component {

  render() {
    return (
        <div className="Page">
            <HeaderComponent></HeaderComponent>
            <div className="Page-container">

                <div className="dash-container">
                    <h2 className="dash-header">Dashboard</h2>
                    <div className="Container">
                        <img src={require('../images/bob.png')} alt="bobross"/> 
                        <div>
                            <div className="name">Bob Ross</div>
                            <div className="n">Age: 77</div>
                            <div className="n">Gender: Male</div>
                        </div>
                        <div>
                            <div className="interests">Interests:</div>
                            <div className="second-container">
                                <div>
                                    <div className="int">1. Painting</div>
                                    <div className="int">2. Camping</div>
                                    <div className="int">3. Squirrels</div>
                                </div>
                                <div>
                                    <div className="int">4. Traveling</div>
                                    <div className="int">5. Television</div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="rel">
                            <div className="logging">Logs this week: 128</div>
                            <div className="find-btn-div"><Button className="find-btn" href="https://www.facebook.com/TheJoyofPaintingWithBobRoss/">Find them on Facebook!</Button></div>
                        </div>
                    </div>






                    <div className="Container">
                        <img src={require('../images/mark.png')} alt="mark"/> 
                        <div>
                            <div className="name">Mark Zuckerberg</div>
                            <div className="n">Age: 34</div>
                            <div className="n">Gender: Male</div>
                        </div>
                        <div>
                            <div className="interests">Interests:</div>
                            <div className="second-container">
                                <div>
                                    <div className="int">1. Programming</div>
                                    <div className="int">2. Reading</div>
                                    <div className="int">3. Snowboarding</div>
                                </div>
                                <div>
                                    <div className="int">4. Puppies</div>
                                    <div className="int">5. Hackathons</div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="rel">
                            <div className="logging">Logs this week: 5</div>
                            <div className="find-btn-div"><Button className="find-btn" href="https://www.facebook.com/zuck">Find them on Facebook!</Button></div>
                        </div>
                    </div>






                    <div className="Container">
                        <img src={require('../images/queen.png')} alt="queen"/> 
                        <div>
                            <div className="name">Elizabeth II</div>
                            <div className="n">Age: 92</div>
                            <div className="n">Gender: Female</div>
                        </div>
                        <div>
                            <div className="interests">Interests:</div>
                            <div className="second-container">
                                <div>
                                    <div className="int">1. England</div>
                                    <div className="int">2. Hats</div>
                                    <div className="int">3. Finance</div>
                                </div>
                                <div>
                                    <div className="int">4. Puppies</div>
                                    <div className="int">5. History</div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="rel">
                            <div className="logging">Logs this week: 938</div>
                            <div className="find-btn-div"><Button className="find-btn" href="https://www.facebook.com/HMRoyalQueen/">Find them on Facebook!</Button></div>
                        </div>
                    </div>




                    <div className="Container">
                        <img src={require('../images/buggs.png')} alt="bugs"/> 
                        <div>
                            <div className="name">Bugs Bunny</div>
                            <div className="n">Age: 72</div>
                            <div className="n">Gender: Male</div>
                        </div>
                        <div>
                            <div className="interests">Interests:</div>
                            <div className="second-container">
                                <div>
                                    <div className="int">1. Carrots</div>
                                    <div className="int">2. Basketball</div>
                                    <div className="int">3. Drama</div>
                                </div>
                                <div>
                                    <div className="int">4. Improv</div>
                                    <div className="int">5. Running</div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="rel">
                            <div className="logging">Logs this week: 2</div>
                            <div className="find-btn-div"><Button className="find-btn" href="https://www.facebook.com/bugs.bunny.click.here/">Find them on Facebook!</Button></div>
                        </div>
                    </div>




                    <div className="Container">
                        <img src={require('../images/elon.png')} alt="elon"/> 
                        <div>
                            <div className="name">Elon Musk</div>
                            <div className="n">Age: 47</div>
                            <div className="n">Gender: Male</div>
                        </div>
                        <div>
                            <div className="interests">Interests:</div>
                            <div className="second-container">
                                <div>
                                    <div className="int">1. Mars</div>
                                    <div className="int">2. Tesla</div>
                                    <div className="int">3. Flamethrowers</div>
                                </div>
                                <div>
                                    <div className="int">4. Digging</div>
                                    <div className="int">5. Hackathons</div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="rel">
                            <div className="logging">Logs this week: 54</div>
                            <div className="find-btn-div"><Button className="find-btn" href="https://www.facebook.com/TheElonmusk/">Find them on Facebook!</Button></div>
                        </div>
                    </div>






                    <div className="Container">
                        <img src={require('../images/jeff.jpg')} alt="jeff"/> 
                        <div>
                            <div className="name">Jeff Bezos</div>
                            <div className="n">Age: 55</div>
                            <div className="n">Gender: Male</div>
                        </div>
                        <div>
                            <div className="interests">Interests:</div>
                            <div className="second-container">
                                <div>
                                    <div className="int">1. Cardboard Boxes</div>
                                    <div className="int">2. Shipping</div>
                                    <div className="int">3. Online Shopping</div>
                                </div>
                                <div>
                                    <div className="int">4. Finance</div>
                                    <div className="int">5. Hackathons</div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="rel">
                            <div className="logging">Logs this week: 83</div>
                            <div className="find-btn-div"><Button className="find-btn" href="https://www.facebook.com/jeff.bezos">Find them on Facebook!</Button></div>
                        </div>
                    </div>






                    <div className="Container">
                        <img src={require('../images/nemo.png')} alt="nemo"/> 
                        <div>
                            <div className="name">Nemo</div>
                            <div className="n">Age: 16</div>
                            <div className="n">Gender: Male</div>
                        </div>
                        <div>
                            <div className="interests">Interests:</div>
                            <div className="second-container">
                                <div>
                                    <div className="int">1. Swimming</div>
                                    <div className="int">2. Scuba Divers</div>
                                    <div className="int">3. Boats</div>
                                </div>
                                <div>
                                    <div className="int">4. The Ocean</div>
                                    <div className="int">5. Anemone</div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="rel">
                            <div className="logging">Logs this week: 8</div>
                            <div className="find-btn-div"><Button className="find-btn" href="https://www.facebook.com/FindingNemoNemo/">Find them on Facebook!</Button></div>
                        </div>
                    </div>






                </div>
            </div>
        </div>
      
    );
  }
}

export default Dashboard;