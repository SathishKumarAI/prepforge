---
qid: ing_ce921b73ac__star__local
question: 'Explain: Failure Modes and Graceful Degradation — How to Prepare for System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 326
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:22:06-05:00'
sources: []
---

**Situation** – In my last role, I was leading the redesign of a recommendation engine that served 1.2 M daily users. We noticed that when traffic spiked during holiday sales, latency doubled and click‑through rates dropped by 18 %.  

**Task** – My goal was to build a system that could detect performance degradation early, automatically fall back to simpler models, and keep user experience stable while we investigated root causes.  

**Action** – I introduced an anomaly‑detection layer using Prometheus + Grafana alerts on latency percentiles and model confidence scores. When the 95th percentile latency exceeded 300 ms or confidence dropped below 0.4, a lightweight logistic‑regression fallback kicked in via a sidecar container. I also added circuit‑breaker logic with Hystrix to isolate failing microservices, and implemented rolling back of new model versions through A/B testing pipelines. To quantify impact, I used feature‑store versioning so we could compare metrics pre‑ and post‑deployment without data leakage.  

**Result** – During the next flash sale, latency stayed below 250 ms and CTR fell by only 3 % instead of 18 %. The system logged over 2000 anomaly events with zero user complaints, and we reduced mean time to recovery from 45 min to under 10 min. I learned that embedding graceful‑degradation paths in the architecture turns unpredictable failures into controlled, measurable incidents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
