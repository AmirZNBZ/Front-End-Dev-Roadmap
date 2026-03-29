export const roadmapData = [
  {
    id: "html-css",
    title: "HTML & CSS",
    icon: "🎨",
    color: "from-orange-500 to-pink-500",
    description:
      "The foundation of every web page. HTML provides structure while CSS handles styling, layout, and visual presentation. Mastering these is essential before moving to JavaScript.",
    topics: [
      "HTML5 Semantics",
      "CSS Flexbox",
      "CSS Grid",
      "Responsive Design",
      "CSS Variables",
      "Animations",
    ],
    resources: [
      {
        type: "book",
        title: "HTML and CSS: Design and Build Websites",
        author: "Jon Duckett",
        url: "https://www.htmlandcssbook.com/",
      },
      {
        type: "book",
        title: "CSS Secrets",
        author: "Lea Verou",
        url: "https://www.oreilly.com/library/view/css-secrets/9781449372736/",
      },
      {
        type: "docs",
        title: "MDN Web Docs – HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { type: "docs", title: "MDN Web Docs – CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      {
        type: "course",
        title: "freeCodeCamp Responsive Web Design",
        url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
      },
      { type: "tool", title: "CSS Tricks", url: "https://css-tricks.com/" },
    ],
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: "⚡",
    color: "from-yellow-400 to-orange-500",
    description:
      "The programming language of the web. JavaScript enables interactivity, dynamic content, and complex application logic. Learn the core language deeply before frameworks.",
    topics: ["ES6+", "Async/Await", "Promises", "Closures", "Prototypes", "DOM Manipulation", "Event Loop"],
    resources: [
      {
        type: "book",
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        url: "https://github.com/getify/You-Dont-Know-JS",
      },
      {
        type: "book",
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        url: "https://eloquentjavascript.net/",
      },
      {
        type: "docs",
        title: "MDN Web Docs – JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        type: "course",
        title: "Frontend Masters JavaScript",
        url: "https://frontendmasters.com/learn/javascript/",
      },
      { type: "tool", title: "JavaScript.info", url: "https://javascript.info/" },
    ],
  },
  {
    id: "typescript",
    title: "TypeScript",
    icon: "🔷",
    color: "from-blue-500 to-cyan-500",
    description:
      "A typed superset of JavaScript that compiles to plain JavaScript. TypeScript adds static types, interfaces, and better tooling to help catch errors early and improve code quality.",
    topics: ["Types & Interfaces", "Generics", "Type Guards", "Utility Types", "Decorators", "tsconfig"],
    resources: [
      {
        type: "docs",
        title: "TypeScript Official Documentation",
        url: "https://www.typescriptlang.org/docs/",
      },
      {
        type: "book",
        title: "Programming TypeScript",
        author: "Boris Cherny",
        url: "https://www.oreilly.com/library/view/programming-typescript/9781492037644/",
      },
      {
        type: "course",
        title: "Frontend Masters TypeScript",
        url: "https://frontendmasters.com/learn/typescript/",
      },
      { type: "tool", title: "TypeScript Playground", url: "https://www.typescriptlang.org/play" },
    ],
  },
  {
    id: "react",
    title: "React",
    icon: "⚛️",
    color: "from-cyan-400 to-blue-500",
    description:
      "A JavaScript library for building user interfaces. React's component model, hooks, and virtual DOM make it the most popular choice for building modern front-end applications.",
    topics: ["Components", "Hooks", "Context", "Suspense", "Server Components", "Performance"],
    resources: [
      { type: "docs", title: "React Official Docs", url: "https://react.dev/" },
      { type: "course", title: "Frontend Masters React", url: "https://frontendmasters.com/learn/react/" },
      {
        type: "course",
        title: "freeCodeCamp React",
        url: "https://www.freecodecamp.org/learn/front-end-development-libraries/",
      },
      {
        type: "book",
        title: "Learning React",
        author: "Alex Banks & Eve Porcello",
        url: "https://www.oreilly.com/library/view/learning-react-2nd/9781492051718/",
      },
      { type: "tool", title: "React DevTools", url: "https://react.dev/learn/react-developer-tools" },
    ],
  },
  {
    id: "routing",
    title: "Routing",
    icon: "🗺️",
    color: "from-purple-500 to-pink-500",
    description:
      "Client-side routing enables navigation in single-page applications without full page reloads. React Router is the standard routing solution for React apps.",
    topics: ["BrowserRouter", "Route Params", "Nested Routes", "Protected Routes", "Lazy Routes"],
    resources: [
      { type: "docs", title: "React Router Documentation", url: "https://reactrouter.com/en/main" },
      {
        type: "course",
        title: "React Router Tutorial",
        url: "https://reactrouter.com/en/main/start/tutorial",
      },
      { type: "tool", title: "TanStack Router", url: "https://tanstack.com/router/latest" },
    ],
  },
  {
    id: "state-management",
    title: "State Management",
    icon: "🗃️",
    color: "from-green-500 to-teal-500",
    description:
      "Managing application state at scale is one of the biggest challenges in frontend development. Choose the right tool based on your complexity needs — from local state to global stores.",
    topics: ["Redux", "Zustand", "React Query", "Jotai", "Context API", "Server State vs Client State"],
    resources: [
      { type: "docs", title: "Redux Docs", url: "https://redux.js.org/" },
      {
        type: "docs",
        title: "Zustand Docs",
        url: "https://docs.pmnd.rs/zustand/getting-started/introduction",
      },
      { type: "docs", title: "TanStack Query Docs", url: "https://tanstack.com/query/latest" },
      {
        type: "course",
        title: "Frontend Masters State Management",
        url: "https://frontendmasters.com/courses/redux-fundamentals/",
      },
      {
        type: "tool",
        title: "Redux DevTools",
        url: "https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd",
      },
    ],
  },
  {
    id: "api",
    title: "API",
    icon: "🔌",
    color: "from-indigo-500 to-purple-500",
    description:
      "Understanding how to communicate with servers is critical. This covers REST, GraphQL, HTTP methods, and popular libraries for data fetching.",
    topics: ["REST API", "HTTP Methods", "fetch API", "axios", "GraphQL", "WebSockets"],
    resources: [
      { type: "tool", title: "Postman", url: "https://www.postman.com/" },
      { type: "docs", title: "GraphQL Docs", url: "https://graphql.org/learn/" },
      {
        type: "book",
        title: "Designing Web APIs",
        author: "Brenda Jin, Saurabh Sahni, Amir Shevat",
        url: "https://www.oreilly.com/library/view/designing-web-apis/9781492026914/",
      },
      {
        type: "docs",
        title: "MDN Fetch API",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
      },
      { type: "tool", title: "axios", url: "https://axios-http.com/docs/intro" },
    ],
  },
  {
    id: "authentication",
    title: "Authentication",
    icon: "🔐",
    color: "from-red-500 to-orange-500",
    description:
      "Securing web applications requires understanding authentication flows, token strategies, and session management. Learn the fundamentals before using any auth library.",
    topics: [
      "JWT",
      "Session-based Auth",
      "OAuth 2.0",
      "Refresh Tokens",
      "Access Tokens",
      "Cookies",
      "CSRF Protection",
    ],
    resources: [
      { type: "tool", title: "JWT.io", url: "https://jwt.io/" },
      { type: "docs", title: "Auth0 Blog", url: "https://auth0.com/blog/" },
      {
        type: "book",
        title: "Web Security for Developers",
        author: "Malcolm McDonald",
        url: "https://nostarch.com/websecurity",
      },
      { type: "docs", title: "OAuth 2.0 Docs", url: "https://oauth.net/2/" },
    ],
  },
  {
    id: "testing",
    title: "Testing",
    icon: "🧪",
    color: "from-emerald-500 to-green-600",
    description:
      "Testing ensures your code works as expected. A good testing strategy includes unit tests, integration tests, and end-to-end tests to give you confidence when shipping.",
    topics: ["Unit Testing", "Integration Testing", "E2E Testing", "Test-Driven Development", "Mocking"],
    resources: [
      { type: "tool", title: "Jest", url: "https://jestjs.io/" },
      {
        type: "tool",
        title: "React Testing Library",
        url: "https://testing-library.com/docs/react-testing-library/intro/",
      },
      { type: "tool", title: "Cypress", url: "https://www.cypress.io/" },
      {
        type: "course",
        title: "Frontend Masters Testing",
        url: "https://frontendmasters.com/courses/testing-practices-principles/",
      },
      { type: "docs", title: "Vitest Docs", url: "https://vitest.dev/" },
    ],
  },
  {
    id: "performance",
    title: "Performance",
    icon: "🚀",
    color: "from-sky-500 to-blue-600",
    description:
      "Frontend performance directly impacts user experience and business metrics. Learn to identify bottlenecks and apply optimization techniques for fast, smooth applications.",
    topics: [
      "Lazy Loading",
      "Code Splitting",
      "React.memo",
      "Virtualization",
      "Bundle Size",
      "Core Web Vitals",
      "Lighthouse",
    ],
    resources: [
      { type: "tool", title: "Google Lighthouse", url: "https://developers.google.com/web/tools/lighthouse" },
      { type: "tool", title: "WebPageTest", url: "https://www.webpagetest.org/" },
      { type: "docs", title: "Web Vitals", url: "https://web.dev/vitals/" },
      {
        type: "tool",
        title: "Bundle Analyzer",
        url: "https://www.npmjs.com/package/webpack-bundle-analyzer",
      },
    ],
  },
  {
    id: "monorepo",
    title: "Monorepo",
    icon: "📦",
    color: "from-violet-500 to-purple-600",
    description:
      "Monorepos allow multiple projects to live in a single repository, sharing code and tooling. Tools like Nx and Turborepo bring structure and caching to large-scale codebases.",
    topics: ["Workspaces", "Shared Libraries", "Build Caching", "Task Pipelines", "Code Sharing"],
    resources: [
      { type: "docs", title: "Nx Documentation", url: "https://nx.dev/docs" },
      { type: "docs", title: "Turborepo Documentation", url: "https://turbo.build/repo/docs" },
      { type: "tool", title: "pnpm Workspaces", url: "https://pnpm.io/workspaces" },
    ],
  },
  {
    id: "micro-frontend",
    title: "Micro Frontend",
    icon: "🧩",
    color: "from-pink-500 to-rose-500",
    description:
      "Micro frontends extend microservices principles to the frontend. Teams can independently develop, deploy, and scale parts of a large frontend application.",
    topics: [
      "Module Federation",
      "Single SPA",
      "Micro Frontend Architecture",
      "Shared Dependencies",
      "Cross-Team Collaboration",
    ],
    resources: [
      {
        type: "docs",
        title: "Webpack Module Federation",
        url: "https://webpack.js.org/concepts/module-federation/",
      },
      {
        type: "docs",
        title: "single-spa Docs",
        url: "https://single-spa.js.org/docs/getting-started-overview",
      },
      {
        type: "tool",
        title: "Module Federation Examples",
        url: "https://github.com/module-federation/module-federation-examples",
      },
    ],
  },
  {
    id: "cicd",
    title: "CI/CD",
    icon: "⚙️",
    color: "from-slate-500 to-gray-700",
    description:
      "Continuous Integration and Continuous Deployment automate the process of testing, building, and shipping code. A good CI/CD pipeline catches issues early and speeds up delivery.",
    topics: [
      "Build Pipelines",
      "Automated Testing",
      "Deployment Strategies",
      "Environment Management",
      "Rollbacks",
    ],
    resources: [
      { type: "tool", title: "GitHub Actions", url: "https://docs.github.com/en/actions" },
      { type: "tool", title: "GitLab CI", url: "https://docs.gitlab.com/ee/ci/" },
      { type: "tool", title: "Jenkins", url: "https://www.jenkins.io/doc/" },
      { type: "docs", title: "Vercel Deployments", url: "https://vercel.com/docs/deployments/overview" },
    ],
  },
  {
    id: "docker",
    title: "Docker",
    icon: "🐳",
    color: "from-blue-400 to-sky-600",
    description:
      "Docker enables you to package applications into containers, ensuring they run consistently across different environments. Essential for modern deployment workflows.",
    topics: ["Containers", "Images", "Dockerfile", "Docker Compose", "Volumes", "Networks"],
    resources: [
      { type: "docs", title: "Docker Documentation", url: "https://docs.docker.com/" },
      {
        type: "book",
        title: "Docker Deep Dive",
        author: "Nigel Poulton",
        url: "https://www.dockerdeepdive.com/",
      },
      { type: "tool", title: "Docker Hub", url: "https://hub.docker.com/" },
      { type: "course", title: "Docker for Developers", url: "https://www.youtube.com/watch?v=fqMOX6JJhGo" },
    ],
  },
  {
    id: "system-design",
    title: "Frontend System Design",
    icon: "🏗️",
    color: "from-amber-500 to-yellow-600",
    description:
      "Frontend system design covers architectural decisions, scalability, and patterns for building large-scale web applications. Critical for senior engineering roles.",
    topics: [
      "CDN",
      "Caching Strategies",
      "Load Balancing",
      "SSR",
      "CSR",
      "Rendering Patterns",
      "Micro Frontend Architecture",
    ],
    resources: [
      {
        type: "book",
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        url: "https://dataintensive.net/",
      },
      {
        type: "book",
        title: "System Design Interview",
        author: "Alex Xu",
        url: "https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF",
      },
      { type: "docs", title: "web.dev Architecture Guide", url: "https://web.dev/architecture/" },
      { type: "tool", title: "Excalidraw (Diagramming)", url: "https://excalidraw.com/" },
    ],
  },
];
