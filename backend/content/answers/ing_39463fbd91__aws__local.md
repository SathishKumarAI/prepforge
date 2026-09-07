---
qid: ing_39463fbd91__aws__local
question: 'Explain: Maintain a single API — Introduction to Apollo Federation - Apollo
  GraphQL Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 497
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:34:36-05:00'
sources: []
---

**Situation & Task (S)**  
In my last role I was tasked to expose a growing set of micro‑services as one GraphQL endpoint so that front‑end teams could iterate faster without worrying about service boundaries. The goal was to keep the API surface stable while allowing each team to evolve independently.

**Action (A)**  
I introduced **Apollo Federation** and built a *Gateway* that stitched together three existing services: user, inventory, and pricing. Each micro‑service hosted its own schema via **AWS AppSync** (for caching & offline support) and exposed an SDL over **HTTP/REST** on ECS Fargate. The Gateway ran on **EKS**, using the open‑source `apollo-gateway` image. I added a **Lambda authorizer** to enforce fine‑grained IAM policies, and enabled **AppSync's Data Source Caching** (TTL 300 s) to reduce downstream calls.

Key decisions:
- **Scalability:** EKS autoscaling + AppSync’s managed GraphQL layer handled bursty traffic; Lambda authorizers were stateless.
- **Availability:** All services deployed in two AZs, with ECS service discovery and Route 53 health checks. Gateway had a 99.95 % SLA by default.
- **Cost:** Switching from per‑query REST to single GraphQL reduced API calls by ~70 %, cutting CloudWatch logs and Lambda invocations, saving ~$12k/month.

**Result (R)**  
Within two weeks of rollout the front‑end team reported a 40 % reduction in feature delivery time. API churn dropped from 5 schema changes per month to 1, improving developer velocity and reducing support tickets by 60 %. The design also enabled us to roll out a new *recommendation* service without touching existing clients.

**Leadership Principles Highlighted**  
- **Customer Obsession & Deliver Results:** Faster, more reliable API directly improved user experience.  
- **Ownership & Dive Deep:** I owned the end‑to‑end architecture, dissecting each component’s performance and cost implications.

This showcases how a federated GraphQL gateway can unify services while keeping the system scalable, available, and cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
