const devopsQuiz = [
  {
    Question: "What are Docker images built out of?",
    Answer: "Filesystem layers,",
    Distractor1: "Operating Systems",
    Distractor2: "Virtual Machines",
    Distractor3: "Containers",
    Explanation:
      "When you build a Docker image, each instruction in the Dockerfile contributes to a new layer. For example, if you have an instruction to install a software package, it creates a layer with the changes related to that installation.",
    Link: "https://www.freecodecamp.org/news/docker-devops-course/"
  }
];
export default devopsQuiz;
