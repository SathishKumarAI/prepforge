---
qid: ing_6cf87a5549__star__local
question: 'Explain: Non-Functional Requirements — ChatGPT System Design - by Neo Kim
  and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 321
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:05:15-05:00'
sources: []
---

**Situation** – At my last role I was part of a startup building an AI‑powered customer support chatbot that needed to compete with OpenAI’s ChatGPT in terms of response speed and uptime. The product had to serve 50,000 concurrent users during peak hours while maintaining less than 200 ms latency per request.

**Task** – My job was to define the non‑functional requirements (NFRs) that would guide architecture decisions: scalability, reliability, security, cost, and maintainability.

**Action** – I mapped each NFR to measurable targets: 99.95% availability, horizontal scaling with autoscaling policies, data encryption at rest and in transit, compliance with GDPR, and a cost ceiling of $0.02 per inference. I then translated these into architectural choices—using Kubernetes for container orchestration, Redis caching for hot responses, a multi‑region deployment to reduce latency, and automated CI/CD pipelines that run load tests before every release.

**Result** – The system achieved 99.97% uptime over six months, kept average latency at 180 ms under full load, and stayed within the $0.018 per inference budget. I learned that clear, metric‑driven NFRs turn abstract concepts like “scalability” into actionable engineering checkpoints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
