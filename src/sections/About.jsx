import TitleHeader from '../components/TitleHeader.jsx'

const About = () => {
  return (
    <section id="about" className="section-padding flex-center">
      <div className="w-full md:px-20 px-5">
        <TitleHeader title="About Me" />
        <div className="mt-8 text-white-50 max-w-4xl mx-auto">
          <p>
            I am a Lead Software Engineer with expertise in backend architecture, cloud-native development, and automation. I have designed and implemented scalable microservices using gRPC and Kubernetes, optimizing performance and reliability. I have expertise in languages such as Python, JavaScript, Golang as well as frontend/backend development using frameworks like Django, Flask, FastAPI, NextJs, VanillaJs, and ReactJs along with proficiency in scrum tools like JIRA.
          </p>
          <p className="mt-4">
            At Globe(Philippines), I led design forges, presenting high-level architectures, message sequence diagrams, and business flows, securing key opportunities. I have hands-on experience in CI/CD automation with GitLab, ArgoCD, and JFrog, ensuring seamless deployments. My work in Google Cloud includes AlloyDB stress testing, database migrations, and Spanner integrations.
          </p>
          <p className="mt-4">
            I have successfully led large-scale data migrations from PostgreSQL to MongoDB and optimized query performance. At Picnic, I developed nested comment algorithms and pagination strategies for scalable social interactions. I refactored JavaScript frameworks for Google’s Harbor Bridge, improving modularity and UI performance. I have automated cloud operations with Python and Bash, reducing manual effort.
          </p>
          <p className="mt-4">
            My expertise in event-driven architectures includes Pub/Sub implementations for resilient, async processing. Passionate about solving complex problems, I strive to build scalable, efficient, and future-ready systems.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
