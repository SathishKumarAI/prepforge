---
qid: ing_4763b40888__star__local
question: 'Explain: Summary — Vertical vs Horizontal Scaling | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 356
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:51:37-05:00'
sources: []
---

**Situation:**  
At my last startup, we built a real‑time recommendation engine that served millions of users per day. After the launch, latency spiked from 120 ms to over 600 ms during peak traffic (10 k requests/sec), and our SLA for 99.5% availability was at risk.

**Task:**  
I had to reduce average response time below 200 ms while keeping cost under a 30% budget increase, and maintain the same throughput for both inference and model training pipelines.

**Action:**  
First, I profiled the inference stack with *PyTorch Serve* and discovered that GPU memory was saturated on each node. To address this, I implemented **vertical scaling**: upgraded from single‑GPU instances to multi‑GPU (4× NVIDIA A100) nodes, which cut per‑request compute time by 45%. Next, for the training pipeline, I partitioned the data across shards and deployed a **horizontal scaling** strategy using Kubernetes autoscaling on CPU workers; this allowed us to scale out up to 12 replicas during nightly batch jobs without overprovisioning. I also introduced a model cache layer with Redis to avoid redundant loads.

**Result:**  
Average latency dropped to 150 ms (a 75% improvement), and overall throughput increased by 120%. The cost impact was only +22%, staying within budget, and the system now meets our SLA with headroom for future growth. I learned that a hybrid scaling approach—vertical for compute‑heavy inference, horizontal for stateless training jobs—yields the best balance of performance and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
