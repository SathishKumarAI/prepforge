---
qid: ing_b80282130b__aws__local
question: How to add component in Angular app? — FrontEnd---JavaScript-TypeScript-React-Angular/AngularJs/Angular8.md
  at main \u00b7 Anshul619/FrontEnd---JavaScript-TypeScript-React-Angular \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 279
output_tokens: 437
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:20:12-05:00'
sources: []
---

**Situation (S)**  
I was tasked to add a reusable “UserProfile” component to an existing Angular 12 application that served ~120k daily users on AWS Amplify. The feature had to load within 200 ms and be deployable without downtime.

**Task (T)**  
Implement the component, integrate it into the router, ensure proper state management with NgRx, and set up automated deployment through CodePipeline while keeping cost < $5/month.

**Action (A)**  
1. Created a lazy‑loaded module (`user-profile.module.ts`) to avoid bundle bloat.  
2. Used **Angular CLI** to scaffold the component (`ng generate component user-profile`).  
3. Added **NgRx selectors/effects** for fetching profile data from a GraphQL API hosted on **AppSync** (cost‑effective, sub‑100 ms latency).  
4. Updated routing (`app-routing.module.ts`) with `loadChildren` to enable code splitting.  
5. Configured **CodeBuild** to run unit tests and linting, then deployed the built artifacts to an **S3 static website bucket** behind **CloudFront** (edge caching reduces latency by ~30 %).  
6. Enabled **AWS Amplify’s branch‑based CI/CD** for blue/green deployments; rollback was possible in < 2 min.

**Result (R)**  
- Component load time dropped from 450 ms to 180 ms, improving the **user engagement score by 12%** (GA metrics).  
- Deployment time reduced from 15 min to under 5 min.  
- Monthly cost stayed at $3.20, below the $5 target.

**Learnings**  
Ownership of end‑to‑end delivery and diving deep into performance bottlenecks yielded measurable impact—exactly what Amazon expects in a bar‑raiser interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
