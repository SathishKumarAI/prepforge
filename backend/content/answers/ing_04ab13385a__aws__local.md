---
qid: ing_04ab13385a__aws__local
question: 'Explain: RedisVL and GPTCache — Semantic Caching'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 537
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:36:32-05:00'
sources: []
---

**Context (Situation)**  
At my previous role we built a chatbot for a SaaS product that answered technical queries in real‑time. The LLM inference cost was prohibitive (~$0.10 per 1k tokens) and latency > 2 s hurt our NPS.

**Task**  
Design a semantic cache to reduce calls to the large model while preserving answer quality.

**Action (Technical)**  

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Vector store for embeddings | **Amazon OpenSearch** + **EBS gp3** | Fast similarity search, auto‑scaling shards, cost‑effective storage. |
| Cache layer | **Redis on Amazon ElastiCache** (RedisVL) | In‑memory key/value with vector similarity support; sub‑millisecond latency. |
| Model inference proxy | **AWS Lambda + API Gateway** | Serverless scaling to zero during off‑peak, pay‑as‑you‑go for compute. |
| Orchestration | **Step Functions** | Retry logic, fallback to GPT when cache miss. |

1. On each query, we generate an embedding (BERT) and search RedisVL.  
2. If a match > 0.85 cosine similarity, return cached answer.  
3. Cache miss triggers Lambda → OpenAI GPT‑4 call; result stored back in Redis with TTL 24 h.

**Result**  

* **Inference cost dropped by 68%** (from $12k/month to $4k).  
* **Latency improved from 2.3 s to 0.7 s** on average.  
* **Cache hit rate** climbed to **82%** after two weeks of learning.

**Reflection**  

I owned the end‑to‑end pipeline, dived deep into embedding quality and cache consistency, and iterated based on A/B test feedback. The bar‑raiser would note my ownership of metrics, my data‑driven optimization loop, and my willingness to learn from a failed first‑attempt where we over‑indexed vectors, causing memory bloat.

**Leadership Principles**  
* **Customer Obsession** – Delivering instant answers at lower cost directly improved user satisfaction.  
* **Ownership & Dive Deep** – I championed the full stack solution, tuned embeddings, and monitored operational health.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
