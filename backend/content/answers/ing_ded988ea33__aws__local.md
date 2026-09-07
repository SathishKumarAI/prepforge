---
qid: ing_ded988ea33__aws__local
question: 'Explain: Alert Prioritization — Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 500
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:43:37-05:00'
sources: []
---

**Situation / Task**  
I was tasked to reduce the noise in our production alerting system for a global SaaS platform that generated ~10 k alerts per hour across 200 services. The goal: prioritize only actionable signals and cut false‑positive alerts by 70 % while maintaining SLA compliance.

**Action**  
1. **Ownership & Dive Deep** – I mapped the entire alert flow (CloudWatch → EventBridge → Lambda → SNS/SQS) and instrumented every step with custom metrics in CloudWatch and a DynamoDB “AlertMetadata” table.  
2. **Bias for Action / Invent & Simplify** – Built a serverless scoring engine:  
   * **AWS Lambda** (Python 3.11, ~200 ms per eval).  
   * **Amazon Athena** queries historical logs to compute context scores (trend, severity, past resolution time).  
   * **SNS topics** for high‑priority alerts; SQS for low‑priority batching.  
   * Alerts are re‑queued in a priority queue (SQS FIFO) and processed by Lambda, which writes back a “finalScore” into DynamoDB.  
3. **Scalability & Cost** – The design auto‑scales with Lambda concurrency limits set to 5 k requests/second; SQS guarantees at-least-once delivery. Costs stayed under $0.02 per alert processed, down from ~$0.08 previously.

**Result**  
- False positives dropped from **45 % → 12 %** (≈ 70 % reduction).  
- Mean time to acknowledge for critical alerts improved from **9 min → 2 min**.  
- Operational cost per alert fell by **75 %**, freeing $120k/yr in cloud spend.

**Bar‑raiser takeaways**  
* Demonstrated ownership: I led the full stack redesign.  
* Dive deep: used metrics to surface root causes and quantify impact.  
* Quantified results with real numbers.  
* Learned from initial Lambda timeout failures by adding exponential back‑off, illustrating continuous improvement.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
