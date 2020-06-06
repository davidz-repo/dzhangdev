import React from "react";

import Header from "../components/header";
import Layout from "../components/layout";
import Link from "../components/link";
import Section from "../components/section";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Header />
    <SEO title="David Zhang" />
    <Section id="about" title="About Me">
      <p>
        I'm a motivated full-stack engineer who has experience building and
        scaling web applications and services in various domains.
      </p>
      <p>
        I'm also passionate about open source contributions, working in high
        impact environments with frequent deployments, and helping growing
        development teams build great products.
      </p>
    </Section>
    <Section id="experience" title="Experience">
      <Link
        title="embedUR systems"
        link="https://embedur.com/"
        desc="Software Engineer, January 2020 - Present"
      />
      <Link
        title="EY"
        link="https://www.ey.com/"
        desc="Financial Services Risk Advisory Staff, August 2016 - Octomber 2017"
      />
    </Section>
    <Section id="projects" title="Projects">
      <Link
        title="QR Code Generator"
        link="http://45.79.54.153/"
        desc="A platform where everyone can create a QR code from anywhere for free"
      />
      <Link
        title="What's Cooking | Kaggle"
        link="https://github.com/dzhangdev/Cuisine-Classification"
        desc="Kaggle competition - classify crusine types based on given ingredients recipes"
      />
      <Link
        title="Mine Sweeper Solver"
        link="https://github.com/dzhangdev/Minesweeper-AI-Solver"
        desc="AI Class project - solving minesweeper using constrain satisfaction solver"
      />
      <Link
        title="Hashing Methods"
        link="https://github.com/dzhangdev/Hashing-Methods"
        desc="Implementation of 3 types of hashing methods - Chaining, Linear, Cuckoo"
      />
    </Section>
    <Section id="skills" title="Skills">
      <Link
        title="Languages & Frameworks"
        desc="Python, C/C++, Java, Bash, JavaScript (ES6+), Node.js, "
      />
      <Link 
        title="Databases" 
        desc="MongoDB, PostreSQL, MySQL" />
      <Link
        title="Other"
        desc="API design, Concurrency, Agile/Scrum, Version Control/Git, Makefile"
      />
    </Section>
  </Layout>
);

export default IndexPage;
