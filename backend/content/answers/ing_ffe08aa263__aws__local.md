---
qid: ing_ffe08aa263__aws__local
question: 'Explain: When to Use Code-Based Evals — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 435
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:56:23-05:00'
sources: []
---

**When to use code‑based evals?**

*Behavioral (STAR)*  
**Situation:** At my previous firm we launched a new recommendation engine that was underperforming on click‑through rate (CTR).  
**Task:** I had to decide whether to rely on off‑the‑shelf metrics or build custom, code‑based evaluations.  
**Action:** I owned the analysis: gathered raw logs, wrote Python scripts to compute *precision@k*, *recall@k*, and *mean reciprocal rank* across user segments. I also created a simulation pipeline in SageMaker to generate synthetic interactions for edge cases. This required deep dives into data quality, feature drift, and GPU cost curves.  
**Result:** The custom evals revealed that 27 % of the traffic was served by stale models; after retraining, CTR rose from **3.2 % → 5.8 %** (+81 %) in production within a week—doubling revenue for that product line.

*Technical/System*  
- **Requirements:** Real‑time scoring, low latency (<50 ms), high throughput (≥10k RPS).  
- **Design:** Deploy the model as a Lambda layer behind an API Gateway; use **AWS Batch** to run nightly code‑based eval jobs on Spot Instances. Store logs in S3, trigger Athena queries for aggregate metrics.  
- **Services & Trade‑offs:**  
  - *Lambda* gives instant scaling but limited runtime (15 min).  
  - *Batch* is cheaper for batch evals but introduces a delay; we mitigated that by caching results in DynamoDB.  
  - Using **SageMaker Processing** adds GPU acceleration but increases cost—only justified when model size >100M parameters.

**Bar‑raiser focus:** Ownership of data pipelines, deep dive into metric selection, quantified impact on business KPIs, and lessons learned from initial false positives that led to refining feature engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
