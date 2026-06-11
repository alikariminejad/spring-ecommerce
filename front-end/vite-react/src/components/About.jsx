function About() {
    const name = "Ali";
    const profession = "Full Stack Developer";
    return (
        <section id="about" className="about-section">
            <h2>About Me</h2>
            <p>Hello! I am {name}, a passionate {profession}. I love Software Engineering.</p>
        </section>
    );
}

export default About;