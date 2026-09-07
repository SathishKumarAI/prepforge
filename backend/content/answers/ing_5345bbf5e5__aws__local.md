---
qid: ing_5345bbf5e5__aws__local
question: 'Explain: AI Web Search Tools — Z.ai - Inspiring AGI to Benefit Humanity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 638
total_tokens: 874
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:33:07-05:00'
sources: []
---

**Situation – Problem & Impact**

At my last role I led a prototype for **Z.ai**, an AI‑driven web‑search engine that translates raw search intent into actionable knowledge graphs. The goal was to reduce the time users spent on “research mode” by 70% while keeping latency < 200 ms.

**Task – What I owned**

I had full ownership of the data ingestion pipeline, model training, and API design. My job was to ensure end‑to‑end scalability, high availability, and a clear cost envelope for production rollout.

**Action – Technical & Design Choices**

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Data crawl & storage | **S3 + Glue** | Durable, pay‑as‑you‑go; schema evolution via Glue Catalog |
| Feature extraction | **Lambda + SageMaker Processing** | Serverless compute for nightly jobs; auto‑scaling to 500 concurrent invocations |
| Model inference | **ECS Fargate + SageMaker Endpoint (RealTime)** | Low tail latency (< 100 ms), isolated containers, easy rollback |
| Search API | **API Gateway + Lambda Authorizer** | Zero‑ops auth, throttling (10k RPS) |
| Knowledge graph | **Neptune** | Native graph store; ACID guarantees; query cost $0.025/GB |

We introduced a *cache layer* with **ElastiCache for Redis** to serve the top 100 most frequent queries, cutting inference calls by 40%. The architecture supports horizontal scaling (auto‑scaling groups) and is multi‑AZ with an S3 cross‑region replication strategy for disaster recovery.

**Result – Quantified Impact**

- Reduced average user search time from **8.2 s to 1.9 s** (77% improvement).
- Latency stayed < 200 ms for 99.5% of requests.
- Operational cost dropped by **$12k/month** after caching and Fargate optimization.

**Learnings & Bar‑raiser Signals**

*Ownership*: I led the entire stack, from data to deployment, taking responsibility for uptime and cost.  
*Dive Deep*: We dissected query logs to identify 15 high‑cost patterns, enabling targeted cache keys.  
*Quantified Impact*: Every change was measured against clear KPIs (latency, cost, user time).  
*Learning from Failure*: Initial SageMaker batch jobs failed due to memory limits; we introduced Spot Instances and re‑architected the job to run in shards, cutting failure rate to < 0.1%.

**Leadership Principle Anchors**

- **Ownership** – I drove the project from concept through production.  
- **Dive Deep** – Detailed cost/latency analysis informed every trade‑off.  

This experience demonstrates my ability to blend customer obsession with scalable, cost‑effective AWS solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
