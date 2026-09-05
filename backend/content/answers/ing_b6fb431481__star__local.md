---
qid: ing_b6fb431481__star__local
question: 'Explain: User Categories — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 332
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:37:09-05:00'
sources: []
---

**Situation** – At my last company I was part of a data‑science team tasked with improving the relevance of content feeds on our new social‑network platform that combined Facebook‑style newsfeeds with Instagram‑style photo streams.

**Task** – We needed to segment users into actionable categories (e.g., “heavy visual consumer”, “news‑driven”, “broad network”) so we could personalize recommendation pipelines and ad targeting, while keeping latency below 200 ms per request.

**Action** – I built a lightweight clustering pipeline using Apache Flink for real‑time feature extraction: post interaction counts, media type ratios, and temporal activity windows. Features were fed into a mini‑batch k‑means model (k=8) with PCA reduction to keep dimensionality low. We added an “exploratory” flag by computing a Shannon entropy over content tags per user. The clusters were then mapped to downstream models: a collaborative filtering engine for visual users and a topic‑modeling pipeline for news users. I also set up A/B testing via Optimizely to iterate on cluster definitions.

**Result** – After two weeks of rollout, click‑through rates increased by 18 % and ad revenue grew 12 %. The model’s inference time stayed under 150 ms, meeting our SLA. I learned that combining streaming feature engineering with lightweight clustering can deliver fine‑grained personalization at scale without sacrificing latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
