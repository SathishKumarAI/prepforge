---
qid: ing_03d4112598__star__local
question: 'Explain: Uncovering Kafka’s Hidden Infrastructure Costs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 352
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:36:13-05:00'
sources: []
---

**Situation** – In my last role as a ML platform engineer at a fintech startup, we were running a real‑time fraud detection pipeline on Confluent Cloud. The engineering team noticed that our monthly spend had spiked from $12k to $28k in just two weeks, yet the user‑reported latency and accuracy of the model stayed constant.

**Task** – I was tasked with identifying where the hidden costs were coming from so we could bring the bill back under budget without hurting inference throughput or data freshness.

**Action** – First, I enabled Confluent’s “Cost Analysis” feature to pull per‑topic metrics. The dashboard revealed that a handful of “shadow” topics—used for debugging and replaying historical data—were being replicated across three regions at 1 GB/s each, far exceeding the advertised 100 MB/s limit. I then wrote an automated script (Python + Kafka Admin API) to scan topic metadata every hour, flagging any that exceeded our replication threshold or had no active consumers. Once flagged, we either deleted obsolete topics or reconfigured them to use a lower‑tier storage class. We also added a retention policy of 30 days for all debug streams and moved the remaining historical data to an archival S3 bucket via Kafka Connect.

**Result** – The bill dropped from $28k back to $13k within a month, saving us 53% of our budget. Latency stayed under 50 ms, and model accuracy was unchanged. I learned that in managed streaming services, invisible topics can silently inflate costs, so regular metadata audits are essential for cost‑effective ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
