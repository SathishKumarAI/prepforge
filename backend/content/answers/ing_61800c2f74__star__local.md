---
qid: ing_61800c2f74__star__local
question: 'Explain: Real-world systems — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 372
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:43:04-05:00'
sources: []
---

**Situation** – In my last role at a large media company, we noticed that our recommendation engine was only achieving a 12 % click‑through rate on newly posted videos—below the industry benchmark of ~18 %. The user base was growing fast, but engagement lagged, hurting ad revenue.

**Task** – I had to redesign the recommendation pipeline so it could scale to millions of users while boosting CTR by at least 5 % within three months. The goal was to keep latency under 200 ms per request and maintain a training cycle that could ingest fresh data daily.

**Action** – First, I introduced a two‑stage model: a lightweight LightGBM scorer for filtering the top 1,000 candidates, followed by a deeper BERT‑based ranking network that captures semantic similarity between user profiles and video content. We switched from our monolithic batch training to an online learning loop using Apache Kafka streams; every new view event updated embeddings in real time. To keep inference fast, we deployed the models on NVIDIA Triton Inference Server with TensorRT optimizations, reducing per‑query latency to 75 ms.

**Result** – After deployment, CTR rose from 12 % to 18.7 %, a 56 % relative improvement, and ad revenue grew by ~9 %. The system now processes over 30 M requests per day with a 99th‑percentile latency under 120 ms. I learned that balancing model complexity with deployment constraints is key—small, well‑calibrated filters can dramatically reduce the load on heavier models, enabling real‑time personalization at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
