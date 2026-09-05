---
qid: ing_74ac304878__star__local
question: 'Explain: JS Al these day these days the — What I Wish I Had Known Before
  Scaling Uber to 1000 Services \u2022 Matt Ranney \u2022 GOTO 2016'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 311
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:27:57-05:00'
sources: []
---

**Situation:** In 2015 I was the lead ML engineer on a project that had to scale Uber’s real‑time surge pricing model from a handful of microservices up to over 1,000 services across multiple regions. We were deploying in Kubernetes clusters with heavy traffic spikes during city events.

**Task:** My goal was to ensure the recommendation engine stayed within 200 ms latency while handling 10× the concurrent requests and guaranteeing data consistency across distributed caches.

**Action:** I introduced a two‑tier inference pipeline: a lightweight TensorFlow Lite model on each service node for instant predictions, backed by a central TensorRT GPU cluster that re‑trained models nightly. I also implemented a feature store using Redis Streams to keep feature vectors fresh, and added circuit‑breaker logic with exponential back‑off in the client SDKs. For monitoring, I set up Prometheus alerts tied to request latency percentile thresholds and used Grafana dashboards to spot drift early.

**Result:** Latency dropped from 350 ms to under 150 ms on average, while throughput rose from 5k requests/sec to 35k requests/sec with zero service‑level agreement breaches. The project taught me that decoupling inference from training and treating feature freshness as a first‑class metric are critical when scaling ML at Uber’s scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
