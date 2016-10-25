import React, { Component } from 'react';
import logo from './logo.svg';

import Hello from './components/Hello'
import Counter from './components/Counter'
import TodoApp from './components/Todo/TodoApp'
import Provider from './components/Provider'



class App extends Component {

  render() {
    return (
        <div className="App">
           {/* <TodoApp />
          {/* เอา store จาก app ส่งไป counter */}
          {/* ถ้าใช้ context ก็เอา store ที่ parse เป็น props ออกไปเลย */}
          {/* <Counter />  */}
          <div id="app">
            <header id="header">
              <div className="container">
                <div className="logo fl">
                  <a href="">Deeep</a>
                </div>
                <ul className="lsn fr p-0 m-0 main-nav">
                  <li className="nav-item-like"><a href="#" className="fr"><i className="like-count p-2 px-8 mr-8">10</i>Like</a></li>
                </ul>
              </div>
            </header>


            {/* <!-- container --> */}

            <div id="main" className="container clearfix">

                {/* <!-- Shot --> */}
                <div className="col-4 px-12">
                  <div className="shot-preview">
                    <a href="#">
                      <div className="teaser">
                        <img src="https://d13yacurqjgara.cloudfront.net/users/311820/screenshots/2998193/cover_1x.png" />
                      </div>
                    </a>
                    <div className="info px-12">
                      <p className="title">Fly Emirates Book App</p>
                      <a href="#" className="like-btn"><i className="fa fa-heart" aria-hidden="true"></i></a>
                    </div>

                  </div>
                </div>
                {/* <!-- End -->

                <!-- Shot --> */}
                <div className="col-4 px-12">
                  <div className="shot-preview">
                    <a href="#">
                      <div className="teaser">
                        <img src="https://d13yacurqjgara.cloudfront.net/users/1047452/screenshots/2998328/nonstop.png"/>
                      </div>
                    </a>
                    <div className="info px-12">
                      <p className="title">Nonstop - Fitness app</p>
                      <a href="#" className="like-btn liked"><i className="fa fa-heart" aria-hidden="true"></i></a>
                    </div>

                  </div>
                </div>
                {/* <!-- End Shot -->

                <!-- Shot --> */}
                <div className="col-4 px-12">
                  <div className="shot-preview">
                    <a href="#">
                      <div className="teaser">
                        <img src="https://d13yacurqjgara.cloudfront.net/users/758684/screenshots/2998200/thumbnil.jpg"/>
                      </div>
                    </a>
                    <div className="info px-12">
                      <p className="title">DEX Creative Landing Page Design III</p>
                      <a href="#" className="like-btn"><i className="fa fa-heart" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Shot -->

                <!-- Shot --> */}
                <div className="col-4 px-12">
                  <div className="shot-preview">
                    <a href="#">
                      <div className="teaser">
                        <img src="https://d13yacurqjgara.cloudfront.net/users/614348/screenshots/2998102/wave_1_1x.jpg"/>
                      </div>
                    </a>
                    <div className="info px-12">
                      <p className="title">Wave</p>
                      <a href="#" className="like-btn"><i className="fa fa-heart" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Shot -->

                <!-- Shot --> */}
                <div className="col-4 px-12">
                  <div className="shot-preview">
                    <a href="#">
                      <div className="teaser">
                        <img src="https://d13yacurqjgara.cloudfront.net/users/784847/screenshots/2998217/persona_app_1x.png"/>
                      </div>
                    </a>
                    <div className="info px-12">
                      <p className="title">Persona App</p>
                      <a href="#" className="like-btn"><i className="fa fa-heart" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Shot -->

                <!-- Shot --> */}
                <div className="col-4 px-12">
                  <div className="shot-preview">
                    <a href="#">
                      <div className="teaser">
                        <img src="https://d13yacurqjgara.cloudfront.net/users/34991/screenshots/2998099/dribbble_bear2_1x.png"/>
                      </div>
                    </a>
                    <div className="info px-12">
                      <p className="title">Bear</p>
                      <a href="#" className="like-btn"><i className="fa fa-heart" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Shot -->

                <!-- Shot --> */}
                <div className="col-4 px-12">
                  <div className="shot-preview">
                    <a href="#">
                      <div className="teaser">
                        <img src="https://d13yacurqjgara.cloudfront.net/users/129991/screenshots/2998320/gta_location_illustration_1x.png"/>
                      </div>
                    </a>
                    <div className="info px-12">
                      <p className="title">Illustration for Lo...</p>
                      <a href="#" className="like-btn"><i className="fa fa-heart" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Shot -->

                <!-- Shot --> */}
                <div className="col-4 px-12">
                  <div className="shot-preview">
                    <a href="#">
                      <div className="teaser">
                        <img src="https://d13yacurqjgara.cloudfront.net/users/311820/screenshots/2999102/cover_1x.png"/>
                      </div>
                    </a>
                    <div className="info px-12">
                      <p className="title">Collage Task App</p>
                      <a href="#" className="like-btn"><i className="fa fa-heart" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Shot -->

                <!-- Shot --> */}
                <div className="col-4 px-12">
                  <div className="shot-preview">
                    <a href="#">
                      <div className="teaser">
                        <img src="https://d13yacurqjgara.cloudfront.net/users/81997/screenshots/2998180/facebook_voice_post-800_1x.png"/>
                      </div>
                    </a>
                    <div className="info px-12">
                      <p className="title">Facebook Voice Post</p>
                      <a href="#" className="like-btn"><i className="fa fa-heart" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Shot --> */}

            </div>
            {/* <!-- End Container --> */}
          </div>
        </div>
    );
  }
}

export default App;
