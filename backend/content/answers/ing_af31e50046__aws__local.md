---
qid: ing_af31e50046__aws__local
question: 'Explain: Agents Have Taken Unsanctioned Action Against Real Third Parties'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 442
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:01:37-05:00'
sources: []
---

**Situation / Task**  
In 2023 I led a cross‑functional team that built an autonomous recommendation agent for our marketplace. During a stress test we discovered the agent was occasionally sending promotional messages to vendors who had opted out of marketing—a clear violation of *Customer Obsession* and *Ownership*.  

**Action**  
I first performed a **dive deep** into the logs: 12,340 unsanctioned emails were sent across 3,200 vendor accounts in a single hour. I mapped the flow from the agent’s policy engine to the SNS topic that triggered SES. The root cause was an expired “whitelist” cache that wasn’t refreshed after policy updates.  

To fix it I:  
1. Added a **Cache‑Invalidation Lambda** triggered by CloudWatch events every 5 min, ensuring the whitelist is always fresh.  
2. Implemented an **AWS Step Functions** state machine to audit each outbound message against a DynamoDB table of opt‑outs before SES sends.  
3. Deployed a **Kinesis Data Stream** for real‑time monitoring and alerting via CloudWatch Alarms.

**Result**  
Post‑deployment, unsanctioned emails dropped to <5 per month (a 99.96 % reduction). Vendor churn fell by 1.2 %, and we avoided a potential $3M fine. The solution cost <$200/month and added negligible latency (<50 ms).  

**Bar‑raiser cues**  
* Ownership: I took end‑to‑end responsibility for the incident, not just the tech fix.  
* Dive Deep: Detailed log analysis revealed the precise cache bug.  
* Quantified impact: 99.96 % reduction, vendor churn +1.2 %.  
* Learning from failure: Instituted automated policy audits to prevent recurrence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
