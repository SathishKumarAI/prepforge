---
qid: ing_f0c91c4051__star__local
question: 'Explain: Combining Vertical and Horizontal Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 367
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:29:38-05:00'
sources: []
---

**Situation:** At my previous company we were deploying a real‑time fraud detection model for credit card transactions. The batch pipeline ran on an on‑prem server (4 vCPU, 32 GB RAM) and was struggling to keep up with the 150k daily transactions; latency spiked from 200 ms to over 1 s during peak hours.

**Task:** I needed to reduce end‑to‑end inference time below 300 ms while maintaining accuracy, without blowing up infrastructure costs.

**Action:** First, I performed vertical scaling: upgraded the existing server to a high‑performance instance (12 vCPU, 128 GB RAM) and moved the model into a GPU‑enabled container. This cut single‑instance latency by ~40 %. Next, I introduced horizontal scaling by spinning up a Kubernetes cluster with autoscaling pods. Each pod ran the same GPU container but handled a subset of the traffic via a round‑robin load balancer. I added a lightweight feature‑store cache to avoid recomputing embeddings on every request, which further reduced CPU usage. Finally, I implemented a canary rollout and monitored throughput with Prometheus, adjusting replica counts in real time.

**Result:** The combined vertical + horizontal approach brought average latency down to 180 ms (a 55 % improvement) while keeping the accuracy at 99.2%. Cost increased by only 12 % due to efficient autoscaling. I learned that vertical scaling is great for heavy‑weight preprocessing, but horizontal scaling provides elasticity and fault tolerance—critical when dealing with unpredictable transaction spikes in ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
