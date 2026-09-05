---
qid: ing_1f10315933__star__local
question: 'Q: How do you choose between a "Sequence of Chains" and a "Multi-Agent
  Graph"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 336
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:31:32-05:00'
sources: []
---

**Situation:**  
At my last startup we were building an automated data‑pipeline for a medical imaging platform. The pipeline had to ingest raw scans, run multiple preprocessing steps, then feed the results into several downstream ML models that each required different feature sets.

**Task:**  
I needed to decide whether to model the workflow as a linear “sequence of chains” (each chain feeding the next) or as a “multi‑agent graph” where independent agents could operate in parallel and share state.

**Action:**  
First, I profiled the data flow: each preprocessing step took ~1 s on average, but some models only needed a subset of the features. I built a lightweight DAG with Airflow to simulate both designs. For the sequence model, I measured that latency increased linearly—about 5 s per image. For the graph model, I allowed the feature‑extraction agent to spawn two parallel sub‑agents (one for texture analysis, one for intensity statistics). These agents pushed results into a shared Redis cache; downstream models pulled only what they needed. I also added retry logic and metrics via Prometheus.

**Result:**  
The multi‑agent graph cut overall latency from 5 s to 2.3 s per image (a 54% speedup) and reduced GPU idle time by ~30%. It also made the pipeline more resilient—if one sub‑agent failed, others could continue. I learned that when tasks are loosely coupled and can be parallelized, a graph approach yields significant performance gains over a rigid chain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
