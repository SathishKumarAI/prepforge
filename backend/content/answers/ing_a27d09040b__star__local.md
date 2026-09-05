---
qid: ing_a27d09040b__star__local
question: 'Explain: Embeddings and similarity — Ml And Dl Foundations'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 316
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:57:33-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a product recommendation engine for an e‑commerce platform that had over 3 million SKUs and 500,000 active users. The existing rule‑based system was slow and failed to surface cross‑category items.

**Task** – My goal was to replace the legacy logic with a vector‑based similarity model so we could compute item relevance in real time while keeping latency under 50 ms per request.

**Action** – I started by generating dense embeddings for each product using a pre‑trained BERT encoder fine‑tuned on our catalog descriptions and user click logs. Each embedding was a 768‑dimensional float vector stored in an HNSW index (faiss). For similarity, I used cosine distance because it normalizes the vectors, making relevance independent of magnitude. During inference, the system retrieves the top‑k nearest neighbors for a given query item, then applies a lightweight weighted score that blends embedding similarity with business signals (price, stock level). I also implemented periodic re‑embedding to capture new product launches.

**Result** – After deployment, recommendation click‑through rate rose from 1.2 % to 3.8 % (a 216 % lift), and average cart size increased by 12 %. The latency stayed below the target threshold, proving that embeddings + similarity can scale for millions of items while delivering measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
