---
qid: ing_b7feab26c2__aws__local
question: 'Explain: Latency numbers — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 460
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:20:12-05:00'
sources: []
---

**Situation (S)**  
At my previous role I was asked to redesign the Pastebin‑style service that served internal code snippets. The original monolith returned a 200 ms latency for 95% of requests, but our new product required sub‑50 ms response times to satisfy real‑time analytics.

**Task (T)**  
My goal was to cut average latency by ≥ 70 % while keeping the cost below the current $1.2M/year budget and ensuring 99.9 % availability.

**Action (A)**  
I applied *Ownership* and *Dive Deep*. I profiled the service, identified that the database layer (RDS) was the bottleneck.  
- **Architecture**: Split read/write traffic using Aurora Serverless for transactional writes and DynamoDB Global Tables for low‑latency reads.  
- **Caching**: Added ElastiCache‑Redis to cache popular snippets; TTL of 5 min reduced DB hits by 65%.  
- **Compute**: Migrated API layer to AWS Lambda (with provisioned concurrency) behind ALB, enabling instant scaling and eliminating cold starts.  
- **Observability**: Implemented CloudWatch metrics + X-Ray tracing; set up automated alarms for latency > 30 ms.

*Bias for Action* drove me to prototype in two weeks and roll out a blue/green deployment with minimal downtime.

**Result (R)**  
Post‑migration, the 95th percentile latency dropped from **200 ms → 38 ms** (81% reduction). The service now supports 5× traffic growth at only **$0.9M/year**, a 25% cost saving. Availability hit 99.97%, surpassing SLA targets.

**Learning**  
I learned that aggressive caching and serverless compute can drastically cut latency, but you must balance cache staleness against freshness needs—hence the 5‑minute TTL. This experience reinforced *Customer Obsession* (delivering faster feedback) and *Deliver Results* (measurable performance gains).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
