---
qid: ing_cd0cbabc03__aws__local
question: 'Explain: Q64: Design a semantic cache that actually works in production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 501
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:04:26-05:00'
sources: []
---

**Situation & Task**  
In my previous role I led a project to add a semantic cache for an enterprise search service that served 4 M users/day. The cache had to reduce LLM inference latency from ~2 s to <200 ms while keeping cost below $50k/month.

**Action (Design)**  

| Component | AWS Service | Why |
|-----------|-------------|-----|
| **Vector store** | **DynamoDB with PartiQL + GSI on cosine‑score** | Low‑latency reads, auto‑scaling, 99.99% availability |
| **Cache layer** | **Amazon ElastiCache‑Redis (clustered)** | In‑memory lookup for top‑10 vectors per query; supports `MGET` and pipelining |
| **Ingestion pipeline** | **Lambda + Kinesis Data Streams** | Real‑time embedding generation via SageMaker endpoint, writes to DynamoDB & Redis in one atomic batch |
| **Fallback & consistency** | **S3 for raw embeddings + CloudWatch Events** | Durable store; triggers reconciliation job on cache miss |

*Scalability*: DynamoDB handles >10k QPS with provisioned capacity auto‑scaling. Redis cluster shards 32 GB each, supporting millions of key/value pairs.  
*Cost*: DynamoDB ~ $12k/month, ElastiCache ~ $8k, Lambda/Kinesis ~$2k → total < $25k.  

**Result**  
Cache hit rate rose to **92%**, cutting average inference latency from 2.1 s to **0.18 s** and reducing SageMaker usage by **64%**, saving **$35k/year**.

**Learnings & Bar‑raiser cues**  
*Ownership*: I drove end‑to‑end delivery, coordinating with ML, infra, and security teams.  
*Dive Deep*: Benchmarked cosine similarity on 1M vectors to select GSI strategy.  
*Quantified Impact*: Reported latency & cost savings in executive dashboards.  
*Failure Response*: After an initial cache staleness incident, I added a TTL + background sync job, turning the failure into a design improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
