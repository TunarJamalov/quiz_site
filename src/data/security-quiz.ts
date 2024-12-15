const securityQuiz = [
  {
    Question:
      "What is server side request forgery (SSRF)?",
    Answer: "A technique to manipulate the server into making requests on behalf of the server.",
    Distractor1: "The client tricks the web browser into making server requests",
    Distractor2: "Malicious actors forging information to leak sensitive data",
    Distractor3: "A type of DDoS attack",
    Explanation:
      "SSRF is a security vulnerability that permits malicious actors to make the server send unintended requests to itself.",
    Link: "https://www.freecodecamp.org/news/defending-against-ssrf-attacks/"
  }
];
export default securityQuiz;
