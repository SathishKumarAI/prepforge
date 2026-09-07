---
qid: ing_9f89fb9238__aws__local
question: 'Explain: Single Points of Failure — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 424
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:25:31-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team that built an ML inference pipeline for real‑time fraud detection, I noticed the model hosting layer was a single EC2 instance behind a classic ELB – a clear Single Point of Failure (SPOF). The risk was unacceptable: a 1 % downtime could cost us $200k in lost revenue and erode trust with our high‑value merchants.

**Action**  
I re‑architected the inference tier using **Amazon SageMaker Endpoint** with *multi‑model* deployment, autoscaling, and **AWS Lambda** for pre‑processing. I added a **Route 53 weighted routing policy** to split traffic between two endpoints in separate AZs, enabling graceful failover. For state persistence I moved from local disk to **Amazon S3 + DynamoDB**, eliminating data loss on instance termination. All changes were rolled out via blue/green deployment with CloudWatch alarms and automated rollback scripts.

I also introduced a **Chaos Monkey** script that randomly stopped one endpoint, ensuring the system stayed resilient under simulated failure conditions.

**Result**  
Post‑migration, our SLA improved from 99.2 % to 99.999 % (five nines). The cost impact was neutral; autoscaling reduced average EC2 spend by 12 %, while Lambda usage added only $0.03/month. Customer churn dropped 3 % in the first quarter, and we received a “Customer Obsession” award for reducing fraud‑related losses.

**Reflection (Bar‑raiser focus)**  
- **Ownership:** I owned the risk assessment, solution design, and end‑to‑end delivery.  
- **Dive Deep:** I quantified impact (SLA, cost) and validated with chaos testing.  
- **Learned from Failure:** The initial failure exposed hidden dependencies; the redesign eliminated them and added observability for future incidents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
