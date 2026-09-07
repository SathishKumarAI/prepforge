---
qid: ing_630559b718__aws__local
question: 'Explain: Platform Documentation & Learning Hubs — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 522
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:08:55-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the launch of a new AI evaluation framework that needed to be adopted by data scientists, ML ops, and product managers across three regions. The challenge was two‑fold: (1) provide comprehensive documentation so every team could build custom evals, and (2) create an interactive learning hub where users could experiment with Langwatch and Langfuse without provisioning their own infrastructure.

**Action – Design & Implementation**  
I architected a **serverless docs portal** on Amazon S3 + CloudFront, coupled with AWS Amplify for user‑auth and a GraphQL API (AppSync) that served dynamic “example‑code” snippets. For the learning hub I deployed **Langwatch** as a Docker‑based microservice in ECS Fargate behind an Application Load Balancer, exposing an API gateway that streamed real‑time evaluation metrics to the front end via WebSocket (API Gateway + Lambda). Langfuse’s event store was mapped to Amazon Kinesis Data Streams for auditability and replay. All services were tagged with cost‑allocation tags; we leveraged Spot Instances for non‑critical batch jobs, cutting compute spend by 35 %.

**Result**  
Within two months the portal saw **12k unique users** and a **45 % reduction in onboarding tickets**. The learning hub’s usage grew to **3,200 eval runs per day**, enabling rapid iteration on new models. The architecture achieved 99.9 % availability (ALB health checks + multi‑AZ ECS) while staying under the quarterly budget of $18k.

---

### Leadership Principles Highlighted
- **Customer Obsession** – built documentation that directly answered pain points.
- **Ownership & Dive Deep** – I took end‑to‑end ownership, from data modeling to cost optimization.  
- **Bias for Action** – deployed a minimal viable learning hub in weeks instead of months.

---

### Bar‑raiser Takeaway
A bar‑raiser would look for my ownership of the entire solution, the depth of my technical choices (serverless, Kinesis, Spot pricing), and the clear, metric‑driven impact on user adoption. I also reflected on a failed early prototype that didn’t scale; learning from that forced me to adopt multi‑AZ ECS, which ultimately delivered the required resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
