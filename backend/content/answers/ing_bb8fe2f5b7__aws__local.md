---
qid: ing_bb8fe2f5b7__aws__local
question: 'Explain: A Canadian census application – adaptive capacity in action'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 615
total_tokens: 846
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:27:54-05:00'
sources: []
---

**Situation (S)**  
I led the migration of Canada’s national census data pipeline from an on‑prem batch system to a cloud‑native architecture while ensuring real‑time analytics for policy makers. The legacy solution couldn’t scale beyond 10 M records/day and had SLA gaps during peak registration periods.

**Task (T)**  
Build an *adaptive capacity* layer that automatically scales compute, storage, and ML inference resources in response to fluctuating census workloads—especially the surge of online registrations at the start of each cycle.

**Action (A)**  
1. **Architecture** – Deployed a *serverless* ingestion stack: API Gateway → Lambda (Python) → Kinesis Data Streams for buffering.  
2. **Adaptive scaling** – Leveraged **Kinesis Auto Scaling** and **SageMaker Processing Jobs** that trigger on stream back‑pressure, coupled with **AWS Step Functions** to orchestrate dynamic provisioning of EC2 Spot instances via **Auto Scaling Groups (ASG)** for heavy ML inference (population segmentation).  
3. **Cost control** – Integrated **Savings Plans** + **Spot Fleet**; added a Lambda *pre‑warm* routine that checks queue depth every 5 min and scales ASG up/down within ±10 % to avoid over‑provisioning.  
4. **Observability** – Used CloudWatch metrics & X-Ray traces to set SLA thresholds (≤200 ms inference latency) and auto‑alert on drift.

**Result (R)**  
- Reduced peak‑time processing time from 45 min to <5 min, meeting the 99th‑percentile SLA.  
- Cut infrastructure spend by **32 %** year‑over‑year while handling a 40 % increase in daily records.  
- Received “Customer Obsession” commendation for delivering timely insights that informed national resource allocation.

---

### Leadership Principles Highlighted
- **Ownership** – Took end‑to‑end responsibility from ingestion to inference, continuously iterating on cost and latency.  
- **Dive Deep** – Instrumented every component; used data to tune scaling thresholds and spot‑price elasticity.  

### Bar‑raiser Checklist
| Expectation | How I Showed It |
|-------------|-----------------|
| Quantified impact | 32 % cost savings, <5 min latency |
| Depth & trade‑offs | Chose serverless for low‑latency, Spot + ASG for bulk ML; balanced reliability vs. cost |
| Learning from failure | Initial over‑provisioning led to a 15 % waste spike; introduced dynamic scaling logic that corrected it within the next cycle |

*This solution exemplifies Amazon’s bias for action and invent & simplify while delivering measurable results.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
