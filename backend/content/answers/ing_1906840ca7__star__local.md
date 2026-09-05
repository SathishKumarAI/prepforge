---
qid: ing_1906840ca7__star__local
question: 'Explain: Chat App — Top 20 Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 373
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:19:12-05:00'
sources: []
---

**Situation** – In the summer of 2023 I joined a startup building an AI‑powered messaging platform that had just launched its beta. Users were asking for a “quick help” pane that surfaced the most relevant support questions; however, our static FAQ list was outdated and only 12% of users found what they needed in under two clicks.

**Task** – My goal was to design a machine learning system that would automatically surface the top 20 most frequently asked questions per user segment, updated every hour, while keeping latency below 200 ms so the UI felt instant.

**Action** – I built an end‑to‑end pipeline in Python with FastAPI. First, I collected query logs (≈500k messages/day) and labeled them via a small annotation set. Using spaCy’s transformer encoder I generated dense embeddings for each message. Then I trained a LightGBM ranker on the cosine similarity between user queries and FAQ embeddings, adding features like time of day and device type. The model was packaged with ONNX and served in Docker containers behind an Nginx reverse proxy; we used Redis to cache the top 20 results per session. Continuous evaluation via A/B testing drove monthly retraining.

**Result** – Within two weeks of rollout, click‑through on the help pane jumped from 12% to 34%, and support tickets dropped by 18%. The system also reduced server load by caching frequent queries, cutting compute costs by 22 %. I learned that lightweight rankers combined with embedding‑based similarity can deliver production‑grade relevance without heavy GPU clusters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
