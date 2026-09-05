---
qid: ing_6a6bccb2a2__star__local
question: 'Explain: This is kind of the first time — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 331
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:00:19-05:00'
sources: []
---

**Situation:**  
When I joined Google’s Ads AI team, we were tasked with deploying a real‑time click‑through rate model that had to process 3 TB of log data per day and serve predictions with <10 ms latency. The existing batch pipeline was 12 hours slow and couldn’t keep up with the new A/B test traffic.

**Task:**  
I needed to redesign the inference stack so it could ingest streaming data, update model weights on‑the‑fly, and scale horizontally without breaking SLAs for 1.2 million concurrent users.

**Action:**  
First, I introduced TensorFlow Serving behind a Kubernetes autoscaler, using gRPC with protocol buffers to reduce serialization overhead. To handle the data velocity, I swapped our Hadoop batch jobs for Apache Beam pipelines that streamed into BigQuery and triggered model retraining via Vertex AI Pipelines. For cold‑start latency, I preloaded the top 10 k embeddings into an in‑memory Redis cache, sharded across pods. Finally, I added Prometheus alerts on queue depth and prediction error rates to catch drift early.

**Result:**  
Latency dropped from 250 ms to 7 ms, throughput increased by 4×, and model accuracy improved by 3.5% CTR lift in production tests. The lesson: hybrid batch‑stream architectures with micro‑service scaling are essential for ML at scale; always instrument end‑to‑end metrics to catch regressions before they hit users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
