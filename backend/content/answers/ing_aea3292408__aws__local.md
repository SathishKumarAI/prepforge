---
qid: ing_aea3292408__aws__local
question: 'Explain: Latency, cost, caching — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 440
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:00:31-05:00'
sources: []
---

**Situation (S)** – While architecting a real‑time RAG (Retrieval‑Augmented Generation) service for an e‑commerce FAQ bot, my team faced a 400 ms latency target and $0.05 per query cost while handling 5k QPS.

**Task (T)** – I had to design a cache‑driven retrieval layer that keeps the LLM prompt concise without exceeding budget or violating SLAs.

**Action (A)**  
1. **Data‑Driven Caching**: Built an in‑memory Redis cluster (AWS ElastiCache) with LFU eviction, keyed by query fingerprint. Warmed it using historical logs, achieving 85 % cache hit rate for top‑10 queries (≈30 % of traffic).  
2. **Latency Optimization**: Offloaded the embedding step to a pre‑built SageMaker endpoint and used Amazon Kendra for semantic search—latency <120 ms per call.  
3. **Cost Control**: Leveraged Spot Instances for batch re‑indexing and scheduled cache invalidation during off‑peak hours, cutting compute spend by 25 %.  
4. **Scalability & Availability**: Deployed across two AZs with cross‑region read replicas; auto‑scaling policies react to QPS spikes (+20 % buffer).  

**Result (R)** – Latency dropped from 650 ms to 350 ms, cost per query fell to $0.03, and the bot’s NPS rose by 12 points.  
*Leadership Principles*: **Customer Obsession** (delivered fast, low‑cost answers), **Ownership** (took full responsibility for end‑to‑end performance).  

**Bar‑raiser takeaway** – Showed deep dive into cache hit ratios, quantified impact on latency/cost, and learned that early monitoring of eviction patterns prevents sudden performance regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
