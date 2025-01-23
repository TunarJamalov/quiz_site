const agileQuiz = [
  {
    Question:
      "Which of the following is the primary role of a Scrum Product Owner?",
    Answer: "Define and prioritize the product backlog",
    Distractor1: "Lead daily standup meetings",
    Distractor2: "writes test for the product",
    Distractor3: "Remove impediments for the team",
    Explanation:
      "The Product Owner is responsible for managing the product backlog and defining priorities.The Product Owner is the voice of the customer and stakeholders",
    Link: "https://www.freecodecamp.org/news/agile-software-development-handbook/"
  },
  {
    Question: "What is the main purpose of a Sprint in Scrum?",
    Answer: "Deliver a potentially shippable product increment",
    Distractor1: "Conduct team-building activities",
    Distractor2: "Create detailed project documentation",
    Distractor3: "Hold extended planning meetings",
    Explanation: "A Sprint is a time-boxed iteration where the Scrum Team works to complete a set of prioritized work items and deliver a potentially shippable product increment.",
    Link: "https://www.scrum.org/resources/what-is-a-sprint"
  },
  {
    Question: "What does the acronym INVEST stand for in user story creation?",
    Answer: "Independent, Negotiable, Valuable, Estimable, Small, Testable",
    Distractor1: "Integrated, Negotiable, Verified, Estimated, Structured, Tracked",
    Distractor2: "Innovative, New, Valuable, Efficient, Scalable, Timely",
    Distractor3: "Integrated, Negotiable, Validated, Estimated, Scalable, Timed",
    Explanation: "INVEST is a criteria for creating good quality user stories in Agile methodologies, ensuring stories are well-defined and manageable.",
    Link: "https://www.agilealliance.org/glossary/invest/"
  },
  {
    Question: "What is the primary goal of a Daily Standup meeting?",
    Answer: "Synchronize team activities and identify potential blockers",
    Distractor1: "Conduct detailed technical discussions",
    Distractor2: "Assign new tasks to team members",
    Distractor3: "Review project budget",
    Explanation: "Daily Standup is a short, time-boxed meeting where team members share what they did yesterday, what they plan to do today, and any obstacles they're facing.",
    Link: "https://www.atlassian.com/agile/scrum/standups"
  },
  {
    Question: "What is Kanban's primary focus?",
    Answer: "Visualize work, limit work in progress, and optimize workflow",
    Distractor1: "Maximize resource utilization",
    Distractor2: "Increase team size",
    Distractor3: "Reduce project documentation",
    Explanation: "Kanban is an Agile method that focuses on visualizing work, limiting work in progress, and continuously improving the workflow.",
    Link: "https://www.atlassian.com/agile/kanban"
  },
  {
    Question: "What is the purpose of a Sprint Retrospective?",
    Answer: "Reflect on the past sprint and identify improvements",
    Distractor1: "Plan the next sprint's work",
    Distractor2: "Assign performance ratings",
    Distractor3: "Conduct technical training",
    Explanation: "Sprint Retrospective is a meeting where the team reflects on their process, identifies what worked well, and determines improvements for the next sprint.",
    Link: "https://www.scrum.org/resources/what-is-a-sprint-retrospective"
  },
  {
    Question: "What is the primary principle behind the Agile Manifesto?",
    Answer: "Individuals and interactions over processes and tools",
    Distractor1: "Comprehensive documentation over working software",
    Distractor2: "Contract negotiation over customer collaboration",
    Distractor3: "Following a plan over responding to change",
    Explanation: "The first principle of the Agile Manifesto emphasizes the importance of people and communication over rigid processes and tools.",
    Link: "https://agilemanifesto.org/"
  },
  {
    Question: "What is the main benefit of timeboxing in Agile?",
    Answer: "Create a sense of urgency and maintain focus",
    Distractor1: "Reduce project costs",
    Distractor2: "Increase team size",
    Distractor3: "Eliminate all project risks",
    Explanation: "Timeboxing helps teams maintain focus, create a sense of urgency, and ensure regular delivery of work increments.",
    Link: "https://www.agilealliance.org/glossary/timeboxing/"
  },
  {
    Question: "What does velocity measure in Agile?",
    Answer: "Amount of work a team can complete in a sprint",
    Distractor1: "Team's running speed",
    Distractor2: "Project budget consumption",
    Distractor3: "Number of team members",
    Explanation: "Velocity is a metric that measures the amount of work a team can complete in a single sprint, helping in planning and estimating future work.",
    Link: "https://www.atlassian.com/agile/project-management/velocity"
  },
  {
    Question: "What is the primary role of a Scrum Master?",
    Answer: "Remove impediments and facilitate the Scrum process",
    Distractor1: "Write code for the project",
    Distractor2: "Manage project budget",
    Distractor3: "Assign tasks to team members",
    Explanation: "The Scrum Master serves the team by removing obstacles, facilitating meetings, and ensuring the Scrum process is followed.",
    Link: "https://www.scrum.org/resources/what-is-a-scrum-master"
  },
  {
    Question: "What is the purpose of a Product Backlog in Scrum?",
    Answer: "Prioritized list of features, requirements, and improvements",
    Distractor1: "Detailed project timeline",
    Distractor2: "Team performance evaluation document",
    Distractor3: "Technical specification document",
    Explanation: "The Product Backlog is a dynamic, prioritized list of everything that might be needed in the product, managed by the Product Owner.",
    Link: "https://www.scrum.org/resources/what-is-a-product-backlog"
  },
  {
    Question: "What is the primary goal of Continuous Integration?",
    Answer: "Integrate code changes frequently and automatically test",
    Distractor1: "Reduce team communication",
    Distractor2: "Increase project documentation",
    Distractor3: "Limit code deployments",
    Explanation: "Continuous Integration involves frequently merging code changes into a central repository and automatically testing to detect integration issues early.",
    Link: "https://www.atlassian.com/continuous-delivery/software-development/continuous-integration"
  },
  {
    Question: "What does the term 'Definition of Done' refer to in Agile?",
    Answer: "Shared understanding of what it means for a work item to be complete",
    Distractor1: "Final project delivery date",
    Distractor2: "Team performance evaluation criteria",
    Distractor3: "Project budget completion",
    Explanation: "Definition of Done is a shared agreement within the team about the criteria that must be met for a work item to be considered complete.",
    Link: "https://www.agilealliance.org/glossary/definition-of-done/"
  },
  {
    Question: "What is the primary purpose of Story Points in Agile estimation?",
    Answer: "Relative measure of effort and complexity for work items",
    Distractor1: "Exact time measurement",
    Distractor2: "Team performance rating",
    Distractor3: "Project budget allocation",
    Explanation: "Story Points provide a relative measure of the effort and complexity of a user story, helping teams estimate work more effectively.",
    Link: "https://www.atlassian.com/agile/project-management/estimation"
  },
  {
    Question: "What is the main principle of Extreme Programming (XP)?",
    Answer: "Continuous feedback and rapid adaptation",
    Distractor1: "Minimize team communication",
    Distractor2: "Maximize documentation",
    Distractor3: "Reduce code deployments",
    Explanation: "Extreme Programming emphasizes continuous feedback, rapid adaptation, and practices like pair programming and test-driven development.",
    Link: "https://www.agilealliance.org/glossary/xp/"
  },
  {
    Question: "What is the purpose of a Sprint Planning meeting?",
    Answer: "Determine work to be completed in the upcoming sprint",
    Distractor1: "Conduct performance reviews",
    Distractor2: "Create long-term project roadmap",
    Distractor3: "Assign individual performance goals",
    Explanation: "Sprint Planning is a collaborative meeting where the team selects and plans the work they will complete during the upcoming sprint.",
    Link: "https://www.scrum.org/resources/what-is-sprint-planning"
  },
  {
    Question: "What does Lean Software Development focus on?",
    Answer: "Eliminating waste and maximizing value",
    Distractor1: "Increasing team size",
    Distractor2: "Maximizing documentation",
    Distractor3: "Reducing code deployments",
    Explanation: "Lean Software Development aims to eliminate waste, optimize processes, and focus on delivering maximum value to the customer.",
    Link: "https://www.agilealliance.org/glossary/lean/"
  },
  {
    Question: "What is the primary goal of Test-Driven Development (TDD)?",
    Answer: "Write tests before writing the actual code",
    Distractor1: "Reduce team communication",
    Distractor2: "Minimize code documentation",
    Distractor3: "Limit code deployments",
    Explanation: "In Test-Driven Development, developers write tests before writing the actual code, ensuring that code meets specified requirements.",
    Link: "https://www.agilealliance.org/glossary/tdd/"
  },
  {
    Question: "What is the main purpose of a Sprint Review?",
    Answer: "Demonstrate completed work to stakeholders and gather feedback",
    Distractor1: "Assign performance ratings",
    Distractor2: "Create detailed project documentation",
    Distractor3: "Conduct team-building activities",
    Explanation: "Sprint Review is a meeting where the team demonstrates the work completed during the sprint to stakeholders and gathers feedback.",
    Link: "https://www.scrum.org/resources/what-is-a-sprint-review"
  },
  {
    Question: "What is the primary focus of Pair Programming?",
    Answer: "Two developers working together on the same code",
    Distractor1: "Reduce team communication",
    Distractor2: "Minimize code documentation",
    Distractor3: "Limit code deployments",
    Explanation: "Pair Programming involves two developers working together at one workstation, with one writing code and the other reviewing in real-time.",
    Link: "https://www.agilealliance.org/glossary/pair-programming/"
  },
  {
    Question: "What is the main principle of Adaptive Software Development?",
    Answer: "Continuous adaptation to changing requirements",
    Distractor1: "Minimize team communication",
    Distractor2: "Maximize documentation",
    Distractor3: "Reduce code deployments",
    Explanation: "Adaptive Software Development emphasizes continuous learning, collaboration, and the ability to quickly adapt to changing project requirements.",
    Link: "https://www.agilealliance.org/glossary/adaptive-development/"
  }
];

export default agileQuiz;
