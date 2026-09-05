---
qid: ing_a87f80983b__star__local
question: 'Explain: Fusion Method Comparison — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 327
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:10:04-05:00'
sources: []
---

**Situation:**  
When I joined the e‑commerce analytics team, our recommendation engine was struggling to surface niche products in a catalog of over 2 million SKUs. Search latency hit 1.8 s on peak traffic, and click‑through rates for newly added items were down by 35%.

**Task:**  
I had to design a hybrid search pipeline that blended vector similarity with traditional keyword scoring, reduce latency to under 800 ms, and lift relevance metrics (NDCG@10) by at least 15% within two weeks.

**Action:**  
First, I implemented an approximate nearest neighbor index using Faiss on GPU for dense embeddings, then wrapped it in a Flask microservice. Next, I built a query‑time fusion layer that weighted BM25 scores against cosine similarity with a dynamic coefficient learned via a small neural network trained on click logs. To keep latency low, I pre‑computed top‑k vector candidates and cached them per user segment. Finally, I set up an A/B test harness in Optimizely to compare the hybrid engine against our baseline.

**Result:**  
Within 10 days of rollout, average search latency dropped to 650 ms, and NDCG@10 improved from 0.42 to 0.49—a 17% lift. Revenue per session for niche categories rose by 22%. I learned that balancing sparse keyword signals with dense semantic vectors can dramatically improve relevance while staying within strict performance budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
