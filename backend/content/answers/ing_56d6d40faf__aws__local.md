---
qid: ing_56d6d40faf__aws__local
question: What Happens to Old Log Files? — What Is Log Rotation and How Does It Work?
  | Mezmo
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 449
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:42:26-05:00'
sources: []
---

**Situation / Task**  
In my last role at a SaaS company we had ~50 GB of daily application logs stored in an on‑prem Linux fleet. The storage cost ballooned to $2k/month and queries against old data became slower, hurting our 99.9% uptime SLA.

**Action**  
I championed a fully managed log rotation strategy using **Amazon CloudWatch Logs**, **S3 Lifecycle Policies**, and **AWS Lambda**:

1. **Ingest & buffer** – Stream logs to CloudWatch with `awslogs` agent (high‑throughput, fault‑tolerant).  
2. **Archive** – A daily Lambda parses CloudWatch events, copies the last 30 days of logs to an S3 “archive” bucket in JSON lines format.  
3. **Lifecycle** – Set S3 rules:  
   * 0–30 days → STANDARD‑IA (10× cheaper, <1 ms retrieval).  
   * 31–365 days → GLACIER‑DEEP (≤$0.004/GB/month, 12‑hour retrieval).  
4. **Retention** – After 365 days, a second Lambda deletes the objects automatically.

**Result**  
- Storage cost dropped from $2k to <$300/month (85% savings).  
- Query latency for recent logs improved by 70% (from 1.5 s to 0.45 s).  
- SLA impact: zero incidents related to log‑related outages in the following 12 months.

**Reflection**  
I owned the end‑to‑end pipeline, dived deep into CloudWatch metrics to tune retention windows, and iterated on the Lambda logic after a failure that left orphaned objects—learning that idempotent cleanup is essential. This approach aligns with **Customer Obsession** (fast data access) and **Ownership** (full lifecycle management).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
