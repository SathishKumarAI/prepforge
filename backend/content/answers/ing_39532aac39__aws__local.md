---
qid: ing_39532aac39__aws__local
question: 'Want to learn more about this pattern? — Pattern: Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 443
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:34:45-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup I led an end‑to‑end credit‑score model that required multi‑service orchestration (data ingestion → feature store → inference → risk decision). A single failure could lock the entire pipeline and delay loan approvals by hours, hurting customer experience.

**Action – Saga Pattern + AWS Services**  
I designed a **Saga** using Amazon Step Functions as the orchestrator. Each step (Glue ETL, SageMaker batch transform, DynamoDB update, SNS notification) had an explicit compensating action (e.g., rollback feature flags, delete partial results). I leveraged:

- **Amazon EventBridge** for decoupled event triggers  
- **AWS Lambda** for lightweight compensations  
- **DynamoDB Global Tables** for fast cross‑region state replication  
- **SQS FIFO** to guarantee order in compensation queues  

The design ensured *at‑least‑once* semantics, 99.99 % availability via multi‑AZ Step Functions, and cost control by using on‑demand Lambda instead of reserved instances.

**Result**  
Post‑deployment, pipeline failures dropped from **12 % to <0.5 %**, cutting average loan approval time from 3 h to **45 min**—a **75 % reduction in latency** and a **$2M annual cost saving** on compute resources. Customer satisfaction scores increased by **15 pts**.

---

### Leadership Principles  
- **Ownership** – Took full responsibility for end‑to‑end reliability.  
- **Dive Deep** – Quantified failure rates, latency, and cost before redesigning.  

### Bar‑raiser cues I hit  
- Demonstrated *ownership* through proactive monitoring dashboards.  
- Showed *depth* by quantifying impact (latency, cost) and iterating on trade‑offs.  
- Learned from initial trials: early compensation logic was too coarse; refined it to target only the affected service state.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
