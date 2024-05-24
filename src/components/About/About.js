import React from "react";
import './About.css';

const About = () => {
    return (
        <section id="education">
            <h2 className="heading">Education</h2>

            <div className="timeline-items">

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2021</div>
                    <div className="timeline-content">
                        <h3>Faculdade</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus nibh non interdum blandit. Vestibulum volutpat nunc in dolor ultrices imperdiet</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2021</div>
                    <div className="timeline-content">
                        <h3>Faculdade</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus nibh non interdum blandit. Vestibulum volutpat nunc in dolor ultrices imperdiet</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2022</div>
                    <div className="timeline-content">
                        <h3>Curso</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus nibh non interdum blandit. Vestibulum volutpat nunc in dolor ultrices imperdiet</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2023</div>
                    <div className="timeline-content">
                        <h3>Estágio</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus nibh non interdum blandit. Vestibulum volutpat nunc in dolor ultrices imperdiet</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2024</div>
                    <div className="timeline-content">
                        <h3>Trabalho</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus nibh non interdum blandit. Vestibulum volutpat nunc in dolor ultrices imperdiet</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;