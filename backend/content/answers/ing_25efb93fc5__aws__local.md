---
qid: ing_25efb93fc5__aws__local
question: What is an IT disaster recovery plan? — What is Disaster Recovery? | Google
  Cloud
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 538
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:52:00-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent project I led the design of an ML inference pipeline for real‑time fraud detection. The client’s SLA required **99.999% availability** and data integrity in case of an outage. I created a *Disaster Recovery (DR) plan* that mapped the definition of DR to concrete, measurable actions.

| Step | What we did | AWS services | Why it mattered |
|------|-------------|--------------|-----------------|
| **1. Define recovery objectives** | Set RTO = 15 min, RPO = 5 min based on fraud‑loss projections ($10M/day). | – | Anchors all decisions in business impact. |
| **2. Replicate data** | Use *Amazon S3 Cross‑Region Replication* + *DynamoDB Global Tables* for near‑real‑time sync. | S3, DynamoDB | Guarantees data consistency across AZs with minimal latency. |
| **3. Duplicate compute** | Deploy identical SageMaker endpoints in a second region via *AWS CloudFormation StackSets*. | SageMaker, CloudFormation | Enables instant failover; cost is ~30% of primary due to spot‑instance use. |
| **4. Automated failover** | Configure Route 53 latency routing + health checks that trigger an *Auto Scaling* policy in the DR region. | Route 53, Auto Scaling | Eliminates manual intervention → Bias for Action. |
| **5. Test & validate** | Quarterly DR drills using *AWS Fault Injection Simulator* to simulate AZ loss and measure RTO/RPO. | FIS | Ensures plan works; learns failures early. |

**Result:** After 12 months, we hit a **0.0002% downtime** (≈ 7 min) during an unexpected AZ outage—down from the original 0.5% target—and recovered data within 4 minutes, keeping fraud losses below $1K instead of the projected $10M.

*Leadership Principles:*  
- **Ownership:** I owned end‑to‑end reliability and drove cross‑team alignment.  
- **Dive Deep:** Detailed metrics (RTO/RPO) guided every service choice.  
- **Deliver Results:** Quantified impact (downtime, cost savings) shows real business value.  

Bar‑raisers listen for clear ownership, data‑driven impact, depth of analysis, and evidence that we learned from failures to improve the plan continuously.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
