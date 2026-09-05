---
qid: ing_60b4cba3aa__star__local
question: 'Explain: Pattern 3: Hybrid Search (Dense + Sparse)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 339
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:41:35-05:00'
sources: []
---

**Situation:**  
At my last company we launched a product‑recommendation feature for an e‑commerce platform that served millions of users per day. Our initial search was pure sparse TF‑IDF; it handled keyword queries well but struggled with semantic matches, especially for niche categories where user intent varied.

**Task:**  
I was tasked to improve click‑through rates by 15 % and reduce the time to first relevant result from 1.2 s to under 0.8 s while keeping infrastructure cost low.

**Action:**  
I designed a hybrid search pipeline:  
- Built a dense embedding model (Sentence‑BERT fine‑tuned on product descriptions) and indexed vectors in Milvus.  
- Retained the existing sparse index in Elasticsearch for fast keyword filtering.  
- Implemented a two‑stage query: first run a lightweight sparse filter to narrow candidates, then re‑rank with cosine similarity from the dense vectors.  
- Used OpenSearch’s “knn” plugin for hybrid scoring and added a caching layer (Redis) for the top 10 % of frequent queries.  
- Monitored latency and accuracy via A/B tests, tuning batch sizes and index refresh intervals.

**Result:**  
The hybrid approach cut average query latency to 0.65 s and lifted click‑through rates by 18 %, surpassing our target. I learned that combining sparse and dense methods can balance speed, relevance, and cost when deployed thoughtfully.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
