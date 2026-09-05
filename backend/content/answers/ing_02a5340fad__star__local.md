---
qid: ing_02a5340fad__star__local
question: 'Explain: Evaluation plan — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 334
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:33:44-05:00'
sources: []
---

**Situation** – At my previous role I was tasked with launching a semantic search feature for the company’s knowledge‑base portal. The existing keyword search returned ~35% relevance, and we needed to cut that down while keeping latency under 300 ms.

**Task** – Design an end‑to‑end evaluation plan: choose metrics, set up test data, benchmark models, and iterate until we hit a target of ≥80% precision@3 for top‑5 results, with no performance regressions.

**Action** – I first curated a gold standard by having domain experts label 2,000 query–document pairs. Then I built a modular pipeline: vectorizer (FAISS + Sentence‑BERT), retrieval, reranker (BoW + neural). For metrics I tracked MAP, precision@k, and latency per stage. I ran A/B tests against the baseline using Apache Bench to simulate 1,000 concurrent users. I also introduced an automated regression suite that re‑ran the benchmark after each model tweak. To handle trade‑offs, I experimented with dimensionality reduction (PCA) versus product quantization in FAISS to balance speed vs recall.

**Result** – The new semantic search achieved 83% precision@3 and reduced average latency from 320 ms to 280 ms. User satisfaction scores rose by 15%. I learned that a rigorous, data‑driven evaluation loop is crucial for balancing relevance and performance in production AI features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
