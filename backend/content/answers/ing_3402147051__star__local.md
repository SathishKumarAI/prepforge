---
qid: ing_3402147051__star__local
question: What is load balancing? — Grokking-System-Design-Interview-Quizzes/Quizzes/Load
  Balancer.org at master \u00b7 ema2159/Grokking-System-Design-Interview-Quizzes \u00b7
  GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 279
output_tokens: 284
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:12:28-05:00'
sources: []
---

**Situation:** At my last startup we were building a real‑time recommendation engine that processed millions of user events per day. The ML inference service was hosted on Kubernetes, but during peak traffic the GPU nodes started throttling and latency spiked to 350 ms.

**Task:** I needed to design a load‑balancing strategy that could distribute inference requests across GPU pods without exceeding memory limits or causing model reload overhead.

**Action:** I introduced a weighted round‑robin layer using Envoy as an ingress controller. Each pod reported its current GPU utilization via Prometheus metrics, and Envoy’s dynamic routing filter adjusted weights in real time (e.g., 70% to low‑load pods, 30% to high‑load). To avoid cold starts, I kept a pool of warm containers with preloaded models and used a health check that verified GPU readiness. I also added a fallback HTTP queue for burst traffic so no request was dropped.

**Result:** Latency dropped from 350 ms to under 120 ms during peak hours, and throughput increased by 40%. The system now scales linearly up to 3× traffic with minimal manual intervention, and I learned how fine‑tuned weight adjustments can make a big difference in ML serving workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
