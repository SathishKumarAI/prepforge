---
qid: ing_2914005bb2__aws__local
question: 'Explain: Close the loop between telemetry and action.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 465
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:58:37-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a fraud‑detection ML pipeline for a global payments platform that processed ~200 M transactions/day. The system generated alerts but the response team had no automated feedback loop, so false positives cost us ~$2 M/month in manual triage.

**Action**  
I built a *closed‑loop telemetry‑action* framework:

1. **Telemetry ingestion** – VPC Flow Logs + application metrics streamed to Amazon Kinesis Data Streams (shard 4 for 200 M events).  
2. **Feature store & model serving** – Amazon SageMaker Feature Store stored real‑time features; models were hosted on SageMaker endpoints with Multi‑Model Endpoints (99.9 % latency SLA).  
3. **Feedback capture** – Action logs from the triage UI were pushed back into Kinesis and aggregated in AWS Glue, creating a *label table* that fed nightly retraining jobs.  
4. **Auto‑scaling & cost control** – Lambda auto‑scaled based on stream depth; endpoint capacity was throttled to $0.10/hour per instance, keeping monthly inference spend <$15 k.  

**Result**  
After 3 months:  
- False‑positive rate dropped from 12% → 4% (≈$1.6 M saved/month).  
- Mean time to resolve alerts cut by 65%.  
- Model accuracy improved from 0.82 F1 to 0.91 F1 due to continuous retraining.

**Reflection & Learnings**  
I owned the end‑to‑end pipeline, diving deep into stream latency and model drift diagnostics (AWS CloudWatch metrics). I learned that *bias for action* means iterating quickly on telemetry; the bar‑raiser will notice my focus on measurable impact, architectural depth, and continuous learning from failures.  

**Leadership Principles Anchored**  
- **Ownership** – Took full responsibility for data flow, model life cycle, and cost optimization.  
- **Dive Deep** – Analyzed stream backpressure, endpoint latency, and retraining triggers to keep the loop healthy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
