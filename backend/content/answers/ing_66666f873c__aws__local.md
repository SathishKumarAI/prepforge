---
qid: ing_66666f873c__aws__local
question: 'Explain: Software Bugs — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 462
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:16:36-05:00'
sources: []
---

**Situation (S)** – In my last role I led the migration of a real‑time fraud detection pipeline from an on‑prem Hadoop cluster to AWS. The existing system had a 4 % error rate in production, which translated into $1.2 M in missed revenue per quarter.

**Task (T)** – My goal was to build a fault‑tolerant, low‑latency ML inference service that reduced bugs by ≥90 % and maintained 99.99 % availability while keeping cost < $10k/month.

**Action (A)** –  
1. **Architecture** – Deployed an *Amazon SageMaker Endpoint* behind an *Application Load Balancer* with a *Lambda* health‑check to detect model drift.  
2. **Reliability** – Enabled *Multi‑Region Deployment* and *Cross‑Zone Auto Scaling*; used *AWS CloudWatch Alarms* + *SNS* for rapid incident response.  
3. **Observability** – Integrated *Amazon CloudWatch Logs* & *X-Ray* to trace each inference, set up anomaly detection on latency metrics (mean = 15 ms, 95th pct = 28 ms).  
4. **Cost control** – Leveraged *SageMaker Neo* for model compilation to run on *EC2 Spot Instances*, reducing inference cost by 45 %.  

**Result (R)** – Bugs dropped from 4 % to < 0.3 %, uptime rose to 99.999 %. Revenue leakage fell from $1.2 M/quarter to <$100k, a **90 % reduction**. Operational costs were cut by 35 %.  

---

### Leadership Principles Highlighted  
- **Customer Obsession** – Eliminated missed revenue that directly impacted our customers’ trust.  
- **Ownership** – Took end‑to‑end responsibility for the entire ML stack, from model training to live inference.  

Bar‑raiser focus: ownership of metrics, deep dive into reliability trade‑offs, and learning from prior failure (high error rate).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
