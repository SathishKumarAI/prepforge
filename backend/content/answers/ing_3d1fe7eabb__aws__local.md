---
qid: ing_3d1fe7eabb__aws__local
question: 'Explain: Perplexity AI — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 444
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:43:55-05:00'
sources: []
---

**Situation & Task**  
I was interviewing for a senior ML role at **Perplexity.ai**, where the hiring team wanted to gauge my depth on large‑language‑model (LLM) fundamentals and how I would build production‑grade AI services.

**Action – Technical Design**  
1. *Requirements*: Real‑time, privacy‑preserving search over 5 TB of domain data with <50 ms latency.  
2. *Design*:  
   - **Pre‑compute embeddings** in SageMaker Pipelines → store in DynamoDB for instant lookup.  
   - **Query layer**: API Gateway + Lambda (Python) that calls a **Redis cluster** (ElastiCache) to cache top‑k results, falling back to an on‑demand **Bedrock LLM** for re‑ranking.  
   - **Observability**: CloudWatch metrics + OpenTelemetry for latency & error rates; SageMaker Ground Truth for continuous data quality checks.  

*Scalability*: Auto‑scaling Lambda + Redis shards keeps throughput >10k QPS with 99.9 % availability.  
*Cost*: 30 % lower than a monolithic GPU fleet by reusing cached embeddings and leveraging serverless compute.

**Result (Data‑driven)**  
Implemented the prototype in two sprints; latency dropped from 300 ms to **45 ms**, cost reduced by **$12k/month**, and user satisfaction scores increased by 27 %.  

**Reflection & Learning**  
I discovered that over‑engineering the LLM inference layer caused unnecessary delays. By *dive deep* into cold‑start patterns, I simplified the architecture, aligning with Amazon’s “Invent & Simplify” principle while maintaining ownership of performance and cost.

> **Bar‑raiser cue:** Demonstrated ownership (end‑to‑end delivery), depth (embedding pipeline, caching strategy), quantified impact (latency, cost, satisfaction), and learned from early failure (cold‑start latency).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
