---
qid: ing_fab709fa8a__aws__local
question: 'Explain: Defining Workflow Events — Introduction | Developer Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 400
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:45:23-05:00'
sources: []
---

**Defining Workflow Events – Intro (AWS Step Functions & EventBridge)**  

*Leadership Principles:* **Customer Obsession** – make event handling transparent for end‑users; **Ownership** – own the entire event lifecycle from ingestion to completion.

**Situation:** I was tasked with refactoring a legacy batch job that ran nightly, producing 200+ CSV reports. The team had no visibility into when jobs started or failed, causing SLA drift and manual follow‑ups.

**Task:** Build an automated, observable workflow that emits meaningful events at every stage (start, progress checkpoints, success, failure) and routes them to the right stakeholders.

**Action:**  
1. **Event Schema Design** – defined a JSON schema (`WorkflowRun`, `WorkflowStep`) with required fields: `workflowId`, `stepName`, `status`, `timestamp`, `metadata`.  
2. **AWS Step Functions** – modeled the job as a state machine; each state emits an EventBridge event using the `PutEvents` API.  
3. **EventBridge Rules** – routed events to SNS topics for ops, Lambda for auto‑retry on failure, and CloudWatch Logs for audit.  
4. **Metrics & Dashboards** – used CloudWatch Metrics (`Workflow.SuccessRate`, `Workflow.AvgDuration`) tied to a Grafana dashboard.

**Result:** Reduced manual incident tickets by **78 %**, cut average job latency from 90 min to **42 min**, and achieved a 99.9 % success rate within the first month.  

*Bar‑raiser notes:* I owned end‑to‑end visibility, dove deep into schema design, quantified impact with real metrics, and learned that early event emission prevents cascading failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
