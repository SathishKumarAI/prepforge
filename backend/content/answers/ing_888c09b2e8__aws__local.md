---
qid: ing_888c09b2e8__aws__local
question: 'Explain: Why BM25 Still Matters — Contextual Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 415
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:33:08-05:00'
sources: []
---

**Why BM25 Still Matters in Contextual Retrieval**

**Situation:** While building a multilingual search platform for an e‑commerce marketplace, we noticed that our neural re‑ranking model (BERT‑based) improved click‑through rate (CTR) by only 3 % over the baseline. The latency hit was 200 ms per query, exceeding the 120 ms SLAs for mobile users.

**Task:** Deliver a low‑latency, high‑accuracy retrieval layer that scales to 10M queries/day while staying within a $5K/month budget.

**Action:**  
- **Implemented BM25 in Amazon OpenSearch Service** as the first‑stage ranker.  
- Tuned `b` and `k1` per language using a small validation set (∼2 % of traffic).  
- Combined with a lightweight fine‑tuned RoBERTa re‑ranker in SageMaker, running only on the top 20 BM25 hits.  
- Deployed the pipeline behind an API Gateway + Lambda@Edge to cache popular queries and reduce compute cost.

**Result:**  
- Latency dropped from 200 ms to **<70 ms** (95th percentile).  
- CTR increased by **7 %**, surpassing the neural model’s gain.  
- Cost reduced to **$2.8K/month**—a 44 % savings.  

**Learnings:** BM25 provides a deterministic, fast baseline that “anchors” retrieval; contextual models add nuance where it matters most. The key is owning the trade‑off between depth and speed.

> *Amazon Leadership Principles:* **Customer Obsession** (maximizing CTR) & **Dive Deep** (profiling latency & cost).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
