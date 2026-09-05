---
qid: ing_3a1d0ddb92__star__local
question: 'Explain: Case studies — Ai System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 351
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:24:48-05:00'
sources: []
---

**Situation** – At my last job I was asked to build an AI‑driven recommendation engine for a mid‑size e‑commerce platform that had just hit 2 M monthly active users. The existing system served static catalog pages and the conversion rate on product views was only 1.3 %.  

**Task** – Design a production‑grade model pipeline that could ingest millions of clickstream events per day, generate personalized recommendations in real time, and scale to handle peak traffic spikes without exceeding our $50K/month infrastructure budget.

**Action** – I chose a two‑stage architecture: first, an Apache Kafka stream ingested user interactions; second, a Spark Structured Streaming job computed latent factors with matrix factorization (ALS) and updated a Redis cache. For the real‑time inference layer I deployed a TensorFlow Serving cluster behind a Kubernetes ingress, using GPU nodes only for nightly batch re‑training. I also implemented A/B testing via feature flags in LaunchDarkly to roll out recommendations gradually and monitored latency with Prometheus + Grafana.

**Result** – After 3 months the recommendation engine lifted click‑through rate by 4.7 % (from 1.3 % to 6.0 %) and conversion rate by 2.1 %. Traffic spikes of up to 5× were handled with <200 ms latency, keeping infrastructure costs under budget. I learned the importance of separating batch training from real‑time inference and using observability early in the design process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
