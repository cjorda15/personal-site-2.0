import React from 'react'

const Projects = () => {
  return(
    <section id="projects" className="projects">
     <h6 className="projects-title">Projects</h6>
     <div className="projects-container">
      <div className="project-content">
        <div className="project-top-section">
          <div className="project-img-holder">
            <img src="img_folder/codeSport.png"/>
            <img className="project-additional-img" src="img_folder/behindCode.png"/>
          </div>
          <h6>Code Sport</h6>
          <div className="project-link-container">
            <a target="_blank" href="https://sleepy-anchorage-74386.herokuapp.com">live site</a>
            <a target="_blank" href="https://github.com/cjorda15/CodeSport">github</a>
          </div>
        </div>
        <div className="project-middle-section">
          <p>Essentially trying to make coding a game or sport. Users can log in and attempt to answer a series of random questions that must be completed in javascript syntax in realtime with other challenged users. First one to get all coding questions wins! Users can create their own questions that can be used by the community for later use. (not quite finished, lots of things I want to expand on and improve here, but can do what I explained so far)</p>
        </div>
        <div className="project-bottom-section">
          <p>First attempt with websockets on this level. This consisted of knex.js, mongo, react/redux, websocket.io, postgress, and more. Worked on for a little less than a two week period</p>
        </div>
      </div>
      <div className="project-content">
        <div className="project-top-section">
          <div className="project-img-holder">
          <img src="img_folder/news.png"/>
          <img className="project-additional-img" src="img_folder/behindNews.png"/>
          </div>
          <h6>New News</h6>
          <div className="project-link-container">
            <a target="_blank" href="https://obscure-headland-42499.herokuapp.com/">live site</a>
            <a target="_blank" href="https://github.com/cjorda15/NewNews">github</a>
          </div>
        </div>
        <div className="project-middle-section">
          <p>An API that fetches the most popular articles from scores of the most popular news sources. Articles can be saved to be seen later, linked to where article is found, and voted on as leaning towards being conservative or liberal that will later be used in searches on the basis of its liberal to conservative values.</p>
        </div>
        <div className="project-bottom-section">
          <p>This project consisted of react/redux, react-router, enzyme/jest for our testing, express/node for our server, and knex.js/postgress for the backend. Worked on for a little over a week</p>
        </div>
      </div>
      <div className="project-content">
        <div className="project-top-section">
          <div className="project-img-holder">
            <img src="img_folder/movie.png"/>
            <img className="project-additional-img" src="img_folder/behindMovie.png"/>
          </div>
          <h6>Movie Tracker</h6>
          <div className="project-link-container">
            <a target="_blank" href="https://jenn-peavler-movie-tracker.herokuapp.com">live site</a>
            <a target="_blank" href="https://github.com/cjorda15/MovieTime">github</a>
          </div>
        </div>
        <div className="project-middle-section">
          <p>This project involved listing the most recent movies out in theaters with the ability to save favorites for later use and well as see fuller details on movies.</p>
        </div>
        <div className="project-bottom-section">
          <p>This project is working off the The Movie DB API. It uses a React/Redux front end with react-router
          and an Express/node working with  knex.js/Posgresql as our backend. Worked on for four days</p>
        </div>
      </div>
      <div className="project-content">
        <div className="project-top-section">
          <div className="project-img-holder">
            <img className="project-additional-img" src="img_folder/behindWeathrly.png"/>
            <img src="img_folder/weathrly.png"/>
          </div>
          <h6>Weatherly</h6>
          <div className="project-link-container">
            <a target="_blank" href="https://stark-hamlet-69045.herokuapp.com">live site</a>
            <a target="_blank" href="https://github.com/cjorda15/weathrly">github</a>
          </div>
        </div>
        <div className="project-middle-section">
          <p>Weathrly was the first app I built in React.js as well as my first encounter with handling asynchronous fetch calls. It utilizes Weather Underground’s API to render on demand weather forecasts to a stylish and accessible user interface. In addition to using React JS, Enzyme was used to thoroughly test our application.</p>
        </div>
        <div className="project-bottom-section">
          <p>This project involved react, pngack, and further testing with mocha and enzyme over a period of four days.
          </p>
        </div>
      </div>
      <div className="project-content">
        <div className="project-top-section">
          <img src="img_folder/static.png"/>
          <h6>Static Comp Challenge</h6>
          <div className="project-link-container">
            <a target="_blank" href="https://cjorda15.github.io/cj-comp-challenge-3/">live site</a>
            <a target="_blank" href="https://github.com/cjorda15/cj-comp-challenge-3">github</a>
          </div>
        </div>
        <div className="project-middle-section">
          <p>Just one of my first css challenges with the use of flex-box and other nice to know features of CSS3</p>
        </div>
        <div className="project-bottom-section">
          <p>Simply using HTML5 and CSS</p>
        </div>
      </div>
      <div className="project-content">
        <div className="project-top-section">
          <img src="img_folder/space2.png"/>
          <h6>SPACE BREAKOUT</h6>
          <div className="project-link-container">
            <a href="https://evening-harbor-90728.herokuapp.com">live site</a> <a href="https://github.com/cjorda15/space-invaders-">github</a>
          </div>
        </div>
        <div className="project-middle-section">
          <p>Having fun with making Breakout: Space Version. First attempt at using the Canvas element for a game</p>
        </div>
        <div className="project-bottom-section">
          <p>This project had us more involved with testing and the canvas element over a period of four days.
          </p>
        </div>
      </div>
      <div className="project-content">
        <div className="project-top-section">
          <img src="img_folder/oldSite.png"/>
          <h6>old personal site</h6>
          <div className="project-link-container">
            <a target="_blank" href="https://peaceful-fjord-71465.herokuapp.com">live site</a>
            <a target="_blank" href="https://github.com/cjorda15/cj-comp-challenge-3">github</a>
          </div>
        </div>
        <div className="project-middle-section">
          <p>My last personal site hosted on heroku with express and pngack setup and I guess needless react</p>
        </div>
        <div className="project-bottom-section">
        <p> other projects can be found at </p>
          <a target="_blank" href="https://github.com/cjorda15"><img id="git-img" src="https://assets-cdn.github.com/images/modules/open_graph/github-mark.png"/></a>
        </div>

      </div>

     </div>
     <div id="resume" className='resume-container'>
       <p>Resume</p>
       <div className="resume-links">
         <a href="chris_jordan_resume">download zip file here</a>
         <p id="project-or">or</p>
         <a href="https://github.com/cjorda15/portfolio/blob/master/Christopher%20R.%20Jordan%20Resume%202.pdf"> view it from github</a>
       </div>
     </div>
    </section>
  )
}

export default Projects
