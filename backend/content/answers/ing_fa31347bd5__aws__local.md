---
qid: ing_fa31347bd5__aws__local
question: 'Q: How do you design an HITL system that doesn''t "Fatigue" the human operator?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 451
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:44:02-05:00'
sources: []
---

**Situation & Task**  
I was asked to build a Human‑in‑the‑Loop (HITL) image‑classification platform for a medical imaging startup that had to meet **FDA 510(k)** compliance while keeping radiologists from experiencing cognitive fatigue during nightly shifts.

**Action – Design & AWS Services**  
1. **Adaptive Workload Scheduler** – I built a stateful scheduler on **Amazon DynamoDB + Step Functions** that tracks each operator’s current task load, error rate, and time‑on‑task.  
2. **Dynamic Confidence Thresholding** – Using **AWS SageMaker Endpoint** for the ML model, the system pulls the prediction confidence; if it falls below a per‑user threshold, the case is queued for review.  
3. **Micro‑break Engine** – A lightweight Lambda function checks the scheduler state and triggers an automated pop‑up (via **Amazon SNS + WebSocket API**) reminding the operator to take a 2‑minute break after every 15 cases or when their error rate rises above 5 %.  
4. **Explainability Dashboard** – Real‑time metrics are streamed into **Amazon CloudWatch Dashboards** and **QuickSight** so operators see how many low‑confidence cases they handled vs. total, reinforcing ownership.

**Result**  
- *Error Rate*: Reduced from 12 % to 3 % in the first month.  
- *Operator Fatigue*: Self‑reported fatigue scores dropped by 40 % (Likert scale).  
- *Throughput*: Maintained a 95 % of scheduled case completion rate with no overtime.

**Learnings & Bar‑Raiser Signals**  
I practiced **Ownership** by iterating the scheduler after each sprint based on real operator feedback. The **Dive Deep** principle guided my use of granular CloudWatch metrics to surface hidden bottlenecks (e.g., latency spikes in Lambda). Quantifying impact with clear KPIs and learning from a mis‑estimated confidence threshold early in production were key lessons that I shared during the retrospective, aligning with Amazon’s culture of continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
