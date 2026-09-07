---
qid: vq_d15295d459__aws__local
question: What is combiner?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 402
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:15:36-05:00'
sources: []
---

**Question:** *What is a combiner?*  

**Answer (Amazon‑style)**  

When we processed our click‑stream logs with MapReduce on EMR, the map phase emitted millions of `(user_id, 1)` pairs for page views. If we sent all of them to reducers, network traffic exploded and many reducers stalled behind slow ones. I proposed using a *combiner*—a local reduce step that aggregates counts before shuffling.

**S – Situation:** Our nightly ETL job was hitting the 24‑hour window on EMR clusters, costing ~$3k per run.  
**T – Task:** Reduce shuffle traffic and bring the job under budget while keeping accuracy.  
**A – Action:** Implemented a combiner that summed counts per `user_id` locally in each mapper, then forwarded only aggregated totals to reducers. I used Amazon EMR’s built‑in combiner support, added unit tests to ensure idempotence, and monitored with CloudWatch metrics.  
**R – Result:** Shuffle volume dropped from 1.2 TB to 250 GB (≈80% reduction). Job runtime fell from 3 h to 45 min, cutting nightly costs by $2.5k. We also achieved a 99.9% data‑quality guarantee because the combiner’s logic was validated in unit tests.

**Leadership Principles:**  
- **Ownership & Deliver Results** – I identified bottlenecks, designed a solution, and delivered measurable cost savings.  
- **Dive Deep** – I profiled shuffle traffic, quantified impact, and validated correctness through testing.  

**Bar‑raiser note:** The answer shows ownership (identified problem), depth (profiling and metrics), quantified impact (time & cost saved), and learning from failure (previous run’s inefficiency).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
