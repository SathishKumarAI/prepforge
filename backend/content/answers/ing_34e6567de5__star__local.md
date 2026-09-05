---
qid: ing_34e6567de5__star__local
question: 'Explain: High Availability Patterns — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 357
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:14:05-05:00'
sources: []
---

**Situation:** At my previous company we launched a new AI-powered recommendation API that had to serve millions of requests per day with sub‑50 ms latency. The SLA demanded 99.95% uptime, but our single‑region deployment kept dipping during peak traffic and maintenance windows.

**Task:** I needed to redesign the architecture to achieve true high availability while keeping cost under control and preserving real‑time inference performance.

**Action:** First, I introduced a multi‑region active‑active pattern using AWS Global Accelerator to route traffic globally with health checks. Each region ran an identical Kubernetes cluster hosting the model container; we used cross‑region read replicas for the metadata store (PostgreSQL) and replicated the embedding cache via Redis Cluster with automatic failover. For stateful inference, I implemented a stateless microservice that pulled models from S3 on demand and cached them locally using MLflow’s model registry. We added an automated Canary deployment pipeline in ArgoCD so new model versions could roll out to 5% of traffic before full exposure. Finally, we set up CloudWatch alerts with automatic Lambda recovery scripts that would spin up a replacement pod if health checks failed.

**Result:** Uptime rose from 99.85% to 99.998%, and latency remained below 45 ms even during regional outages. The cost increased by only 12% due to the dual‑region setup, but we saved an estimated $200k per year in avoided downtime penalties. I learned that combining active‑active routing with lightweight stateful services and automated rollback is key for AI workloads where latency and availability are both critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
