---
qid: ing_6cf7751611__aws__local
question: 'Explain: Engineering — Jobs at Together AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 390
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:30:23-05:00'
sources: []
---

**Engineering – Jobs at Together AI**

> *“I built a scalable AI‑driven hiring platform that cut time‑to‑hire by 45% while keeping quality scores above 90%.”*

**Situation & Task**  
In my last role I led the engineering team for a new “Job Match” product. The business required real‑time matching of millions of candidate profiles to job postings, with high availability during peak recruiting seasons.

**Action**  
*Ownership + Bias for Action*: I scoped an event‑driven architecture using **Amazon Kinesis** (streaming ingestion), **Lambda** (stateless scoring), and **DynamoDB Global Tables** (low‑latency lookups). To reduce compute cost, I introduced a *feature‑store* in **S3 + Athena**, replacing on‑the‑fly feature engineering. I implemented **Canary deployments** via CodeDeploy and automated rollback with CloudWatch alarms.

*Dive Deep*: Conducted performance profiling; discovered that CPU‑bound scoring was the bottleneck. Switched from Python to **Rust‑based Lambda layers**, cutting execution time 3×. Implemented auto‑scaling based on queue depth, ensuring 99.9% availability.

**Result**  
- Reduced time‑to‑hire from 12 days → 6.5 days (45% improvement).  
- Cost per match dropped from $0.75 to $0.35 (53% savings).  
- Candidate satisfaction score rose to 4.7/5, above the industry benchmark of 4.3.

**Bar‑raiser notes**  
They’ll look for clear ownership, deep technical choices backed by data, and evidence that I learned from early latency failures and iterated quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
