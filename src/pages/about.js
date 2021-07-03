import React from "react"
import Markdown from "react-markdown"
import aboutText from "../pages.json"
import Layout from "../components/layout"
import html from "../images/html.png"
import css from "../images/css.png"
import javascript from "../images/javascript.png"
import react from "../images/react.png"
import java from "../images/java.png"
import c from "../images/c.png"
import spring from "../images/springboot.png"
import mysql from "../images/mysql.png"
import git from "../images/git.png"
import docker from "../images/docker.png"
import linux from "../images/linux.png"
import vim from "../images/vim.png"
import python from "../images/python.png"
import tensorflow from "../images/tensorflow.png"

const About = () => {
    return (
        <Layout>
            
            <div className="page-content">
                <Markdown children={aboutText[0].content} skipHtml={false} escapeHtml={false} />
            </div>
            <hr />
            <div className="skill-stack">
                <div className="skills-using">
                    <h3>Skill Stack</h3>
                    <div className="icon-shelf">
                        <img className="icon" src={html} alt={""}></img>
                        <img className="icon" src={css} alt={""}></img>
                        <img className="icon" src={javascript} alt={""}></img>
                        <img className="icon" src={react} alt={""}></img>
                    </div>
                    <div className="icon-shelf">
                        <img className="icon" src={java} alt={""}></img>
                        <img className="icon" src={c} alt={""}></img>
                        <img className="icon" src={spring} alt={""}></img>
                        <img className="icon" src={mysql} alt={""}></img>
                    </div>
                    <div className="icon-shelf">
                        <img className="icon" src={git} alt={""}></img>
                        <img className="icon" src={docker} alt={""}></img>
                        <img className="icon" src={linux} alt={""}></img>
                        <img className="icon" src={vim} alt={""}></img>
                    </div>
                </div>
                <div className="skills-learning">
                    <h4>Currently Learning</h4>
                    <div className="icon-shelf">
                        <img className="icon" src={tensorflow} alt={""}></img>
                        <img className="icon" src={python} alt={""}></img>
                    </div>
                </div>
            </div>



            <hr />
        </Layout>
    )
}

export default About