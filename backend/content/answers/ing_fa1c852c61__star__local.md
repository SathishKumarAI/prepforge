---
qid: ing_fa1c852c61__star__local
question: 'Explain: we might need the data in real — UBER System design | OLA system
  design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 306
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:48:38-05:00'
sources: []
---

**Situation:**  
While leading the migration of our ride‑hailing platform from batch‑to‑streaming analytics, we discovered that the surge prediction model was lagging by 10 minutes during peak hours, causing inaccurate driver incentives and customer wait times.

**Task:**  
I had to redesign the data pipeline so that real‑time trip telemetry (GPS, request timestamps, traffic feeds) fed directly into our ML inference layer within 2 seconds, without compromising throughput or cost.

**Action:**  
I architected a Kafka‑based ingestion system, partitioned by city zone, and set up Spark Structured Streaming jobs to aggregate ride counts every second. We added a Redis cache for low‑latency feature lookup and deployed the model as a TensorFlow Serving REST endpoint behind an NGINX load balancer. To keep costs in check, I implemented auto‑scaling on Kubernetes with spot instances and used a cost‑aware scheduler that throttled non‑critical streams during off‑peak.

**Result:**  
The end‑to‑end latency dropped from 10 min to 1.8 s, boosting surge accuracy by 35% and reducing average wait times from 5.4 min to 3.2 min. I learned that coupling distributed streaming with lightweight caching and autoscaling is key for production ML at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
