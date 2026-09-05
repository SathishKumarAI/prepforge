---
qid: ing_d937f95932__star__local
question: 'Explain: Scaling Depends on the Layer — Vertical vs Horizontal Scaling
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 382
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:43:05-05:00'
sources: []
---

**Situation:**  
At a fintech startup I was leading the redesign of our fraud‑detection pipeline that processed ~10 M transactions per day. The existing model was running on a single GPU server and lagged behind real‑time requirements by about 2 seconds, causing missed alerts.

**Task:**  
I needed to reduce inference latency below 500 ms while keeping cost under the $5k/month budget, and ensure we could handle a projected 3× traffic spike in Q4 without re‑engineering the model.

**Action:**  
First I profiled the pipeline with NVIDIA Nsight to identify bottlenecks: data loading (30 %), feature engineering (25 %) and GPU kernel execution (45 %). For vertical scaling, I upgraded the server to a dual‑CPU + 2×A100 setup, which cut GPU time by ~35 %. To address data ingestion, I switched from local CSV reads to an Apache Kafka stream feeding into a Ray cluster for parallel feature extraction—this horizontally scaled that layer and reduced load time by 70 %. Finally, I containerized the entire stack with Docker, deployed on Kubernetes with autoscaling pods based on CPU usage, allowing us to spin up additional inference nodes during traffic spikes.

**Result:**  
Inference latency dropped from 2.1 s to 0.42 s (80 % reduction). The hybrid scaling strategy kept monthly spend at $4.3k and gave us a 3× headroom for traffic growth. I learned that vertical upgrades accelerate compute‑heavy layers, while horizontal distribution is essential for data‑intensive preprocessing—balancing both yields cost‑effective, low‑latency ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
