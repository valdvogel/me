import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Us</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        Software Engineer, Writer and Entrepreneur of digital
                        products
                      </p>
                      <br />
                      <p>
                        + 15 years of experience always working with the
                        development of applications of all scales and multiple
                        languages for different companies. University professor
                        since the age of 27 at one of the largest private
                        institutions in Brazil teaching subjects focused on
                        software development. Author of the book Software
                        Component Specification Method: A proposal for building
                        software components and Co-founder of a brazilian
                        startup to share car accessories.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Architecture</h3>
                    <p>
                      Facilitating planning, tracking and scheduling software
                      deliverables
                    </p>
                    <p>
                      Locating and directing resolutions for critical issues
                      related to hardware and software interface
                    </p>
                    <p>
                      Assessing software and system issues to find solutions to
                      them as per requirements
                    </p>
                    <p>
                      Developing working relationships with marketing and
                      product managers, and software engineers and others
                    </p>
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-settings" />
                  </span>
                  <div className="desc">
                    <h3>Software Engineering</h3>
                    <p>
                      Updating current software systems, making improvement
                      suggestions, collaborating with analysts and designers,
                      testing applications, writing training manuals, and making
                      sure projects are completed in time and within budget
                    </p>
                    <p>
                      Great programming skills, creativity, attention to
                      details, time management, and teamwork
                    </p>
                    <p>
                      Developing a wide range of functional enhancements and
                      performance improvements to dozens of existing modules
                    </p>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-diamond" />
                  </span>
                  <div className="desc">
                    <h3>Leadership and Development Process</h3>
                    <p>
                      Championing the transition from conventional Waterfall to
                      Agile/SCRUM methodology, achieving early delivery
                    </p>
                    <p>
                      Software development expertise, leadership, project
                      management experience, problem solving orientation, and
                      creativity
                    </p>
                    <p>
                      Recruiting and coordinating software developers,
                      allocating resources, assigning tasks, discussing
                      requirements with clients, and making sure projects are
                      completed in time and within budget
                    </p>
                  </div>
                </div>
              </div>
              {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
