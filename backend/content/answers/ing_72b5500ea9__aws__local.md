---
qid: ing_72b5500ea9__aws__local
question: 'Explain: Key Requirements — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 441
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:44:55-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* I led a cross‑functional team at a fintech startup to launch an AI credit‑scoring model that had to meet strict regulatory safety and governance standards.  
*Task:* Build a pipeline that guarantees model transparency, bias mitigation, and auditability while staying within the $200k budget.  
*Action:*  
1. **Data Governance Layer** – Implemented AWS Glue for cataloging, Athena for query‑based lineage, and Lake Formation to enforce fine‑grained IAM policies.  
2. **Model Safety Engine** – Deployed SageMaker Pipelines with a custom “Bias & Fairness” step (using Evidently) that scores disparate impact; any model violating the 5% threshold automatically rolls back to the last approved checkpoint.  
3. **Audit Trail** – Leveraged CloudTrail + Amazon GuardDuty logs, stored in S3 with Glacier Deep Archive for 7‑year retention, and visualized via QuickSight dashboards for regulators.  
4. **Automated Governance Alerts** – Configured EventBridge rules that trigger Lambda to send Slack/Email alerts when drift >2% or new data sources are ingested.

*Result:* The model achieved a 12% higher predictive accuracy than the legacy rule‑based system while maintaining 99.9% compliance audit score. Regulatory review passed on first attempt, and we reduced manual audit effort by **70%** (from 40 hours/month to 12).  

**Key AWS services used:** Glue, Lake Formation, Athena, SageMaker Pipelines, Evidently, CloudTrail, GuardDuty, EventBridge, Lambda, S3 Glacier.  
**Scalability/Availability:** All services are region‑wide with multi‑AZ replication; cost < $5k/month (≈$0.15 per inference).  

**Bar‑raiser takeaways:** Ownership of the full safety stack, deep dive into bias metrics, quantifiable impact on compliance and ops cost, and learning loop that turned every audit feedback into a pipeline improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
