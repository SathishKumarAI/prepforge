---
qid: ing_b6371eba6d__aws__local
question: 'Explain: Conservative Flagging Strategy — Compliance Automation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 485
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:16:07-05:00'
sources: []
---

**Situation** – In my last role I led the compliance team for a fintech platform that processes $2 B in monthly transactions. The regulator demanded 99.9% accuracy in detecting suspicious activity while keeping false‑positive rates below 0.5%.  

**Task** – Design an automated flagging pipeline that is *conservative* (high recall) yet efficient, so we could scale to millions of events per day without inflating operational costs.

**Action** –  
1. **Data‑driven model selection**: Trained a Gradient‑Boosted Decision Tree on labeled fraud logs; tuned the decision threshold to achieve 99% recall, accepting a 3% false positive rate.  
2. **Conservative flagging logic**: Added an *audit‑score* layer that re‑flags any transaction above a configurable risk score (e.g., >0.8) for manual review. This “conservative” rule guarantees we never miss high‑risk cases, even if it inflates the queue by 15%.  
3. **AWS architecture**:  
   * **Amazon Kinesis Data Streams** ingest ~10 M events/sec.  
   * **Lambda** runs the model inference; results are stored in **DynamoDB** for low‑latency lookup.  
   * A **Step Functions** orchestrator routes flagged items to an **SQS queue** that feeds a **Fargate** microservice for audit scoring and manual triage UI.  
4. **Cost & scalability**: Using Lambda + DynamoDB keeps CAPEX near $0; the system auto‑scales with traffic spikes, keeping latency <200 ms.

**Result** – After 6 months we hit a 99.7% recall, false positives dropped to 0.42%, and the manual review queue shrank by 25%. Operational cost fell from $15k/month to $9k/month.  

*Leadership Principles*: **Customer Obsession** (protect users from fraud), **Ownership** (I owned the end‑to‑end pipeline), **Dive Deep** (tuned thresholds with real metrics), and **Bias for Action** (deployed in 3 sprints).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
