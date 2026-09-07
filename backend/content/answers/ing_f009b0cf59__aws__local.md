---
qid: ing_f009b0cf59__aws__local
question: 'Explain: Canary Deployment — Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 452
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:19:59-05:00'
sources: []
---

**Canary Deployment for ML Models – an Amazon‑style answer**

**Situation / Task**  
At my previous role I launched a recommendation engine that served 4 M daily users. A regression in the new model could degrade CTR by >3 %. The goal: roll out the new version with zero impact on user experience.

**Action (Dive Deep + Bias for Action)**  
1. **Feature flag + traffic routing** – Use *AWS CodeDeploy* with a 5‑% canary slice, backed by *Amazon CloudFront* edge caching to keep latency <30 ms.  
2. **Observability stack** – Instrument model inference latency, error rate and CTR in *Amazon CloudWatch Metrics* and log to *Amazon Kinesis Data Firehose → S3 → Athena* for ad‑hoc analysis.  
3. **Automated rollback policy** – A Lambda checks the 5 % slice metrics every minute; if any metric exceeds a threshold (e.g., latency > 150 ms or CTR drop >1 %), it triggers *CodeDeploy rollback*.  
4. **Scaling & cost** – Deploy the canary on an *Amazon SageMaker Endpoint* with reserved capacity, scaling to 200 RUs for the slice; full rollout scales to 4000 RUs. Cost per hour ≈ $0.10 vs. $1.00 for full production, keeping spend <2 % of total.

**Result (Deliver Results)**  
Full roll‑out completed in 48 h with a **+0.8 % CTR lift** and no latency spikes. The canary prevented a potential 3 % revenue loss, saving ~$15k/month.  

**Bar‑raiser notes** – I demonstrated ownership by defining rollback thresholds, deep dive into metric correlations, quantified impact (CTR +0.8 %), and learned from a failed earlier rollout where we lacked automated rollback, leading to a 1 % drop that was corrected the next cycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
