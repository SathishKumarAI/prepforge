---
qid: ing_8c0744e565__star__local
question: 'Explain: Purpose-built architecture for continuous data'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 356
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:12:50-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, our fraud‑detection model was trained on daily batch snapshots of transaction logs. By the time the model hit production, the real‑time traffic had shifted and we were missing 18% of high‑risk events because new patterns weren’t reflected until the next batch cycle.

**Task:**  
I needed to redesign the pipeline so that incoming transactions could be scored in near real‑time while still benefiting from periodic re‑training on large historical datasets, all within a single, scalable architecture.

**Action:**  
I architected an event‑driven microservice using Kafka for ingestion, Spark Structured Streaming for feature enrichment, and TensorFlow Serving behind an HTTP/2 load balancer. The streaming job computed rolling statistics (mean, variance) over sliding windows of 5 minutes and updated the model’s state store in Redis, enabling instant inference. For re‑training I scheduled nightly jobs that pulled the same data from S3, retrained a gradient‑boosted tree ensemble with XGBoost, and swapped the checkpoint into the serving layer without downtime. I also added Prometheus alerts for latency spikes and drift detection.

**Result:**  
Inference latency dropped from 2 seconds to under 200 ms per transaction, reducing missed fraud events by 73%. The nightly re‑training kept precision at 92% while recall rose from 78% to 85%. I learned that purpose‑built streaming architectures can reconcile the speed of real‑time scoring with the robustness of batch training, and that monitoring drift is critical for maintaining model relevance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
