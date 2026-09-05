---
qid: ing_0fc34becdc__star__local
question: What kinds of distribution shift exist, and how would you monitor a deployed
  model - classical or LLM-based - for them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 349
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:59:52-05:00'
sources: []
---

**Situation** – In late 2023 I was leading the rollout of an AI‑driven recommendation engine for a subscription video platform that had just migrated its user base from on‑prem to cloud, causing a sudden spike in new device types and regional language mixes.

**Task** – My goal was to detect any distribution shift that could degrade recommendation relevance or violate compliance thresholds, and to set up an automated monitoring pipeline that would alert the ops team within minutes of drift.

**Action** – I first catalogued the main shift categories: *feature‑value* (e.g., new device categories), *covariate* (user demographics changing with geography), *label* (content popularity trends), and *concept* (changes in user intent after a major UI redesign). For each, I built feature‑distribution histograms using Spark SQL and calculated KL‑divergence against the training baseline. I added a drift score to our Grafana dashboards, triggering alerts when divergence exceeded 0.15 or when the model’s top‑k precision fell below 85 %. For LLMs, I ran periodic perplexity checks on a held‑out validation set of user queries and tracked token‑level embeddings with cosine similarity to detect semantic drift.

**Result** – Within two weeks of deployment we caught a 12 % drop in recommendation accuracy tied to a new mobile OS version. The alert allowed us to retrain the model on fresh data, raising precision back to 93 %. I also documented a repeatable drift‑monitoring framework that reduced incident response time from hours to minutes and became part of our ML Ops best practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
