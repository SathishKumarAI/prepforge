---
qid: ing_8bb1686526__aws__local
question: 'Explain: Study map — Frontend Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 388
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:42:01-05:00'
sources: []
---

**Study Map – Frontend Engineer**

*Situation:* In my last role I led the redesign of a learning‑management “study map” that visualized course progress for thousands of students. The existing page was slow (5 s load time) and lacked accessibility, causing 18% of users to abandon the feature.

*Task:* My goal was to rebuild the component in React/TypeScript, reduce latency by 80%, improve WCAG AA compliance, and enable real‑time updates without full page reloads.

*Action:*  
1. **Ownership & Dive Deep** – I wrote a data‑driven performance audit (Chrome DevTools + Lighthouse) and identified heavy SVG rendering as the bottleneck.  
2. **Design** – Switched to Canvas for the graph, implemented incremental data fetching via GraphQL subscriptions, and introduced memoization with React.memo.  
3. **AWS Services** – Deployed a serverless API on **API Gateway + Lambda (Node.js)**; cached responses in **ElastiCache Redis** to keep latency < 50 ms.  
4. **Bias for Action** – Ran A/B tests with 10k users, iterating over two sprints.

*Result:* Load time dropped from 5 s to 0.8 s (84% improvement). Accessibility score rose from 68/100 to 95/100, and feature usage increased by 27%, translating to a $120K lift in course completion revenue per quarter.  

**Bar‑raiser check:** I took full ownership, dove deep into performance metrics, quantified the impact, and learned that early caching decisions can dramatically reduce infrastructure cost (Lambda invocations fell by 60%).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
