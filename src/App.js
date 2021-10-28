import React, { useState,useEffect } from 'react'
import './App.css';
import BadgeAvatars from './BadgeAvatars';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import CircularIntegration from './CircularIntegration';
import Carousel from './Carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ContactUs from './ContactUs';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ProgressBar from "@ramonak/react-progress-bar";

import Penguin from './Penguin'
import axios from "axios";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Metropolis from './Metropolis'
import Header from './Header'







var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};



function App() {
  const [count, setCount] = useState([false])
  
  useEffect(() => {
    axios.get('https://api.countapi.xyz/update/vijay-pops/youtubes/?amount=1 ')
      .then(res => {
        // console.log(res)
        setCount(res.data)
      })
      .catch(err => {
      console.log(err);
      })
     
  },[ ])


  document.title = "Portfolio"

  return (
    <div className="App">
      <div>

        <section>
       
          <div className='header__names'>
           
          
          <a href='#about'>ABOUT</a>
          <a href='#bottom'>COFFEE WITH ME</a>
            <a href='#skills'>SKILLS</a>
           
           
          
         
         
          </div>
          <div className='plane'>
            <div className='gif'>
              <img src='gif.gif' />
             
            </div>
            
          </div>
          <div className='wel'>
            <Penguin/>
            {/* <img src='bird.gif' /> */}
            

            </div>
          <div className='avatar'>
        <div className='avatar__text'>
          <p>  Vijay Kumar  </p>
         
          </div>
         
          <div  className='avatar__adjust'>
          <BadgeAvatars style={{fontSize: 70}} />
            </div>
          </div>
          <h2 id='typer'>Im a
  <span
     class="txt-rotate"
     data-period="2000"
     data-rotate='["  Full Stack Web Developer. ", "  Python developer. " ]'></span>
          </h2>
          
          <div className='touch'>
        <p><a href='#bottom'>COFFEE WITH ME </a></p>
        </div>
          

        <div className='Wave Wave1'></div>
        <div className='Wave Wave3'></div>
        <div className='Wave Wave4'></div>
        <div className='Wave Wave2'></div>

        </section>
        <div className='header__image'>
       
          <div className='images__text'>
      <img className='imagess'
            src='vij.jpg' />
          <div className='text'>
          <a name='about'></a>
    
     <p  > <h1>About me</h1><br></br>Hi I am Vijay Kumar, a 23 year old Full Stack Web Developer, living in Hyderabad, India. I am a Computer Science Engineer, 
Have a look at my skills or just connect with me on LinkedIn. I am always excited to do business with like minded people, lets discuss over coffee..</p>

      </div>
    
        
          </div>
         
        </div>
        <div className='iconsider__header'>
      <div className='icon__side'>
      <a  href="https://www.facebook.com/profile.php?id=100007466137988" target='_blank'><FacebookIcon style={{ fontSize: 30 }}  color='primary'
        /></a>
         <a  href="https://www.instagram.com/vijay_5_/"target='_blank'><InstagramIcon style={{ fontSize: 30 }}  color='secondary'
        /></a>
         <a href="https://twitter.com/vijay_5_"target='_blank'><TwitterIcon  style={{ fontSize: 30 }}  color='primary'
        /></a>
         <a  href="https://www.linkedin.com/in/vijay-kumar-8b19a7136"target='_blank'><LinkedInIcon style={{ fontSize: 30 }}  color='primary'
        /></a>
        </div>
        </div>
        
        <div className='move__right'>
      <div class="wrapper">
  <div class="widget">
    <div class="widgetImage animation">
      <img src="lap.jpeg" alt="Skills" />
    </div>
            <div class="widgetContent animation">
            <a name='skills'></a>
      <h2 class="widgetTitle">Skills</h2>
              <h2 class="widgetSubTitle">
                <ul>
                  <li>Java Script <ProgressBar completed={60} /></li>
                  <li>React.js <ProgressBar completed={70} /> </li>
                  <li>Python  <ProgressBar completed={70} /></li>
                  <li>Django  <ProgressBar completed={60} /></li>
                    <li>MySQL  <ProgressBar completed={80} /></li>
                    <li>HTML   <ProgressBar completed={80} /></li>
                    <li>CSS    <ProgressBar completed={80} /></li>

                </ul>
      </h2>
     
    </div>
  </div>
  
  <div class="widget">
    <div class="widgetImage animation">
      <img src="gls.jpeg" alt="Intrests" />
    </div>
    <div class="widgetContent animation">
      <h2 class="widgetTitle">Interests</h2>
              <h2 class="widgetSubTitle">
                <ul>
                  <li>Web Designing</li>
                  <li>Sports</li>
                  <li>Gaming</li>
                  <li>Travelling</li>
                </ul>
      </h2>
     
    </div>
  </div>
</div>
    
      </div>
      <div className='tick'>   <CircularIntegration/></div>

      <div className='carousel__my'>
      <Carousel/>
        </div>

        <div className="metro">
        <Metropolis/>
        </div>
       
        
        <div className='footer'>
     
          <div className='footer__text'>
            <span className='emoji'><h3>Coffee with me </h3><p>< EmojiFoodBeverageIcon/></p></span>
       
       <p>I am always excited to work on some awesome projects, message me and let's discuss over coffee.</p>
  <span className='emoji'> <h3>Write a message for me </h3><p>< MailOutlineIcon/></p></span>
       <ContactUs />
            <p>Made with ❤️ in India </p>
            
            <h1>Page Visits <br></br><span className='count'><span className='eye'><VisibilityIcon/></span> {count.value}</span> </h1>
       <div className='icons'>
         <h3>Follow me on</h3>
     <a  href="https://www.facebook.com/profile.php?id=100007466137988"target='_blank'><FacebookIcon style={{ fontSize: 30 }} 
     /></a>
      <a  href="https://www.instagram.com/vijay_5_/"target='_blank'><InstagramIcon style={{ fontSize: 30 }} 
     /></a>
      <a href="https://twitter.com/vijay_5_"target='_blank'><TwitterIcon n style={{ fontSize: 30 }} 
     /></a>
      <a  href="https://www.linkedin.com/in/vijay-kumar-8b19a7136"target='_blank'><LinkedInIcon style={{ fontSize: 30 }} 
     /></a>
   
     
              <a name='bottom'></a>
              
             
       
         
   
   </div>

     </div>
   </div>

  
      </div>
      <div className='video'>
        <Header/>
      </div>

     
     
      
     </div>
  );
}

export default App;
