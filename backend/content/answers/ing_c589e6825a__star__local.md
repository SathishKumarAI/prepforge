---
qid: ing_c589e6825a__star__local
question: 'Explain: Realtime vs post-hoc split - the core architectural decision'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 323
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:05:03-05:00'
sources: []
---

**Situation**  
At my last role, we were building a fraud‑detection pipeline for an e‑commerce platform that processes ~5 M transactions per day. The existing batch system ran nightly and sent alerts to analysts, but by the time they reviewed them, merchants had already lost revenue.

**Task**  
I needed to shift from post‑hoc analysis to a real‑time scoring engine so that high‑risk orders could be blocked instantly while still maintaining a comprehensive audit trail for compliance.

**Action**  
First, I mapped the data flow and identified latency bottlenecks: raw clickstream ingestion, feature extraction, model inference, and alert routing. I replaced the nightly Spark job with a Kafka Streams pipeline that processed events within 200 ms. For feature engineering, I used Delta Lake’s schema‑on‑read to keep a historical view for post‑hoc analysis. The inference layer was built on TensorFlow Serving behind an Envoy proxy, allowing us to roll out new models without downtime. We added a lightweight “shadow” mode that logged predictions to S3 for later comparison.

**Result**  
The switch cut fraud loss by 35 % in the first quarter and reduced average decision latency from 30 min to <200 ms. I learned that a hybrid architecture—real‑time inference coupled with post‑hoc auditability—is essential when balancing immediate business impact with regulatory compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
