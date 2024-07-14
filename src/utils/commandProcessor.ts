// src/utils/commandProcessor.ts

interface ResumeData {
    about: string;
    experience: string[];
    education: string[];
    skills: string[];
    projects: string[];
    contact: string;
  }
  
  const resumeData: ResumeData = {
    about: "AI-focused Senior Software Engineer specializing in LLM integration. My mission: transforming complex AI concepts into practical, high-impact software products. Proficient in Typescript, Python, and Golang.",
    experience: [
      "🚀 AI Engineer | AI Synapse, USA (Dec 2023 - Present)",
      "👨‍💻 Senior Software Engineer | Indek, Dubai (Feb 2023 - Dec 2023)",
      "🏗️ Special Project Manager (Engineering) | Just Appraised, USA (March 2022 - Feb 2023)",
      "💻 Software Engineer | Adveria, USA (April 2018 - Sep 2021)",
      "📊 Marketing Intern | Preacher9, Islamabad (2016 - 2017)"
    ],
    education: [
      "🎓 BS International Relations | Bahria University, Islamabad (2012-2016)"
    ],
    skills: [
      "TypeScript", "React", "Next.js", "Redux",
      "Python", "FastAPI", "Langchain", "Azure Functions",
      "AWS", "Jest", "Postman", "TailwindCSS",
      "System Design", "OOP", "Functional Programming", "DevOps",
      "CI/CD Pipelines", "Serverless", "Data Architecture", "Unit Testing",
      "Data Structures", "Data Analysis", "ETL Pipelines", "UX-design"
    ],
    projects: [
      "🤖 Implemented AI-driven application using Azure and OpenAI",
      "⚡ Optimized LLM performance through prompt engineering",
      "🧠 Built ML architecture using Langchain and Vector DBs",
      "🔗 Developed API parsers for data extraction and integration"
    ],
    contact: "📞 (+92)3369009019 | 📧 danishafzalkhan@gmail.com | 🔗 linkedin.com/in/danishafzalkhan"
  };
  
  export const processCommand = (command: string): string => {
    const lowerCommand = command.toLowerCase().trim();
  
    switch (lowerCommand) {
      case 'help':
        return `Available commands:

📝 help       - Get all help commands
👤 about      - Display a brief introduction
💼 experience - List work experience
🎓 education  - Show educational background
🛠️ skills     - Display technical skills
🏗️ projects   - Showcase notable projects
📞 contact    - Show contact information
🧹 clear      - Clear the terminal screen
`;
  
      case 'about':
        return `👤 About Me:\n\n${resumeData.about}`;
  
      case 'experience':
        return `💼 Work Experience:\n\n${resumeData.experience.join('\n\n')}`;
  
      case 'education':
        return `🎓 Education:\n\n${resumeData.education.join('\n')}`;
  
      case 'skills':
        return `🛠️ Skills:\n\n${resumeData.skills.join(', ')}`;
  
      case 'projects':
        return `🏗️ Notable Projects:\n\n${resumeData.projects.join('\n\n')}`;
  
      case 'contact':
        return `📞 Contact Information:\n\n${resumeData.contact}`;
  
      case 'clear':
        return 'CLEAR_TERMINAL';
  
      default:
        return `❗ Command not recognized: ${command}.\n📘 Type 'help' for a list of available commands.`;
    }
  };