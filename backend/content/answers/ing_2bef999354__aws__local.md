---
qid: ing_2bef999354__aws__local
question: 'Explain: Latency Budget — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 413
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:04:33-05:00'
sources: []
---

**Context & Goal (S)**  
While launching a recommendation engine for an e‑commerce platform, I was tasked with keeping the end‑to‑end query latency under 200 ms for a *hybrid* search that combined vector similarity (AI) and keyword filtering.

**Action (T)**  
I broke the problem into two sub‑systems:  
1. **Vector scoring** – deployed a SageMaker endpoint behind an API Gateway, using a pre‑trained Sentence‑BERT model in a 2 vCPU, 8 GB instance. I added a *Cache Layer* (ElastiCache Redis) to store the top‑10 vectors per user session, cutting inference calls by ~70%.  
2. **Keyword filtering** – used Amazon OpenSearch for full‑text search; I tuned the index with *percolator queries* and disabled unnecessary fields to keep document size < 1 KB.

I added a *Latency Budget Manager* Lambda that measured each component’s time, logged it in CloudWatch, and throttled or rerouted traffic if any part exceeded its share (80 ms for vector, 60 ms for OpenSearch).

**Result (R)**  
After rollout:  
- Average query latency dropped from **350 ms → 145 ms** (27% faster).  
- Error rate fell to < 0.02%.  
- Cost per request decreased by **15 %** due to fewer SageMaker invocations.

**Learning & Leadership Principles**  
*Customer Obsession*: We measured real user latency and iterated until it met expectations.  
*Ownership & Dive Deep*: I owned the entire pipeline, dug into CloudWatch metrics, identified bottlenecks, and engineered a cross‑service solution that balanced speed, cost, and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
