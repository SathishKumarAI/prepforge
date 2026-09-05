---
qid: ing_90a465f332__star__local
question: 'Explain: What is TPS, what is QPS, and what is the difference? _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 401
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:22:03-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, we were launching a real‑time fraud detection service that needed to handle millions of transaction checks per day. The ops team was confused about the performance dashboards and kept asking why “TPS” was higher than “QPS.”

**Task:**  
I had to clarify what TPS (transactions per second) and QPS (queries per second) meant, how they differ in a machine‑learning inference context, and show them how to monitor each correctly.

**Action:**  
First I explained that **TPS** counts every completed transaction—each request that passes through the entire pipeline, including pre‑processing, model inference, post‑processing, and persistence. **QPS**, on the other hand, counts every incoming query regardless of outcome; it measures how many requests hit the front‑end service per second. I mapped this onto our stack: we used NGINX for ingress (measuring QPS), a FastAPI microservice with TensorFlow serving (TPS). I added Prometheus metrics to expose both counters and created Grafana dashboards that plotted TPS vs. QPS over time, highlighting latency spikes when QPS exceeded TPS due to back‑pressure.

**Result:**  
Within two weeks the ops team could see real‑time differences—QPS spiked during market open while TPS lagged because model queueing slowed inference. This led us to add a second inference node and implement request throttling, boosting TPS from 4,200 to 6,500 per second (≈55% increase) while keeping QPS stable at ~7,000. I learned that clear metric definitions are essential for scaling ML services and that visualizing both helps diagnose bottlenecks early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
