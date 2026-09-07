---
qid: ing_8f50d55281__aws__local
question: 'Explain: Q: Design a RAG system that serves 10,000 queries per second across
  500 tenants with a p99 latency of 2 seconds.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 656
total_tokens: 907
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:50:21-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the launch of a multi‑tenant Retrieval‑Augmented Generation (RAG) service for a SaaS platform that had to answer **10 k QPS** across **500 tenants** while keeping *p99 latency ≤ 2 s*. The goal was to deliver accurate, tenant‑isolated responses at scale.

**Action & Design**  
1. **Data Layer** – Indexed tenant corpora in **Amazon OpenSearch Service** (dedicated clusters per high‑volume tenant) with *sharding* tuned for 10 k QPS; used *warmers* to keep hot documents resident in memory, cutting retrieval time by ~35%.  
2. **Inference Layer** – Deployed a **GPU‑enabled SageMaker endpoint** behind an **Application Load Balancer (ALB)**. The ALB routes requests using *path‑based routing* (`/tenant/{id}`) to tenant‑specific endpoints, ensuring isolation and enabling per‑tenant scaling policies.  
3. **Orchestration** – A lightweight **AWS Lambda** layer normalizes queries, fetches top‑k results from OpenSearch, and streams them into the SageMaker endpoint using *prefetch queues* (SQS FIFO) to smooth bursts, keeping the p99 under 2 s even during a 30% traffic spike.  
4. **Observability & Auto‑Scaling** – CloudWatch metrics feed an *AWS Application Auto Scaling* policy that adds OpenSearch replicas and Lambda concurrency in response to 95th percentile latency thresholds.

**Result**  
Post‑deployment, we achieved **p99 = 1.8 s**, handled a 40% traffic surge without SLA breaches, and reduced cost by **22 %** versus the initial monolithic design (thanks to tenant‑segmented clusters).

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered sub‑2‑second latency for every tenant.  
- **Ownership** – Took end‑to‑end responsibility from data ingestion to inference scaling.

### Bar‑Raiser Checklist
| Expectation | How I Met It |
|-------------|--------------|
| Quantified impact | 1.8 s p99, 22 % cost savings |
| Dive deep | Tuned OpenSearch shard count, Lambda prefetch queue |
| Learning from failure | Early trials with a single cluster hit 2.5 s; pivoted to tenant‑segmented clusters |

**Technical Trade‑offs**  
- **Cost vs. Isolation:** Separate OpenSearch clusters increase baseline cost but prevent noisy‑neighbor effects and simplify compliance audits.  
- **Latency vs. Throughput:** Prefetch queues add a small latency overhead (~50 ms) but enable graceful scaling under bursty traffic.

This architecture balances **scalability, availability,** and **cost efficiency**, ensuring every tenant receives fast, reliable AI responses at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
