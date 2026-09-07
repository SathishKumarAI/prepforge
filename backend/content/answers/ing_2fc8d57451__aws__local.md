---
qid: ing_2fc8d57451__aws__local
question: 'Explain: HTTP Request — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 765
total_tokens: 996
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:13:24-05:00'
sources: []
---

**Situation (S)**  
I was tasked to replace a legacy REST API that served product catalog data for a SaaS startup. The existing endpoint returned 1 MB of JSON per request, hit 10 k RPS, and cost ~$3k/month on EC2.  

**Task (T)**  
Design a new GraphQL layer that lets clients fetch only the fields they need, reduces payloads by ~70%, and scales to 50 k RPS with zero downtime.

**Action (A)**  
1. **Architecture** – Built a stateless Lambda authorizer + AppSync API backed by a Supabase Postgres instance.  
2. **Data‑model** – Mapped the catalog schema to GraphQL types, added pagination & caching directives.  
3. **Performance** – Leveraged AppSync’s built‑in data source resolvers with `@aws_iam` auth, set `maximumBatchSize: 1000`, and used DynamoDB as a cache layer for hot queries.  
4. **Cost control** – Employed Lambda provisioned concurrency (10 k vCPUs) and reserved capacity on AppSync; monitored with CloudWatch to auto‑scale.  
5. **Security & ownership** – Implemented fine‑grained IAM roles, logged every mutation via CloudTrail, and ran a full penetration test before rollout.

**Result (R)**  
- Payload size dropped from 1 MB → 300 KB (70% reduction).  
- Throughput increased to 50 k RPS with <0.5 s latency.  
- Monthly cost fell from $3k to ~$800, a 73% savings.  
- Customer satisfaction (Net Promoter Score) rose from 45 to 68 in three months.

---

### Leadership Principles

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Ownership** | Took full responsibility for the migration plan, risk assessment, and post‑launch monitoring. |
| **Dive Deep** | Analyzed query logs, identified hot spots, tuned AppSync resolvers, and benchmarked Lambda memory usage to optimize performance. |
| **Customer Obsession** | Designed a flexible GraphQL API that lets front‑end teams fetch only needed data, improving UX for end users. |
| **Bias for Action** | Deployed the new stack in two sprints, leveraging serverless to avoid provisioning delays. |

### What a Bar‑Raiser Looks For

- **Ownership**: Clear ownership of design, implementation, and post‑deployment monitoring.  
- **Depth (Dive Deep)**: Quantitative analysis of performance bottlenecks and iterative optimization.  
- **Impact**: Concrete metrics on cost savings, latency, and customer satisfaction.  
- **Learning from Failure**: Mentioned the penetration test that uncovered an IAM misconfiguration; we patched it before launch, turning a potential failure into a learning loop.

---

#### AWS Services Used

| Service | Purpose |
|---------|---------|
| **AppSync** | GraphQL API gateway with built‑in caching and query complexity analysis. |
| **Lambda** | Stateless request handlers for custom business logic and auth. |
| **Supabase/Postgres** | Primary data store; Supabase provides an open‑source Firebase‑like layer on Postgres. |
| **DynamoDB** | Caching hot queries to reduce latency. |
| **CloudWatch & X-Ray** | Monitoring, tracing, and cost analytics. |

This solution showcases how I blend AWS services with solid architectural decisions to deliver measurable business value while embodying Amazon’s Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
