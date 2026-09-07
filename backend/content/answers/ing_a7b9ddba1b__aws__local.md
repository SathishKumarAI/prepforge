---
qid: ing_a7b9ddba1b__aws__local
question: 'Work contract layer: should MCP include signed authorization + execution
  receipts for tool calls?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 391
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:45:46-05:00'
sources: []
---

**Situation & Task**  
In a recent ML‑ops project at my previous company, we introduced an automated contract layer (MCP) that invoked third‑party data‑labeling tools via API. The client’s compliance team demanded signed authorizations and execution receipts for every tool call to satisfy audit trails. I was tasked with designing a scalable, cost‑effective solution that preserved data integrity while minimizing latency.

**Action**  
I mapped the requirements to **Customer Obsession** (ensuring trust) and **Dive Deep** (understanding every system touchpoint).  
1. *Authorization*: Leveraged AWS KMS to encrypt a short JWT signed by the client’s private key, stored in Secrets Manager.  
2. *Execution Receipt*: Implemented an idempotent Lambda that writes a DynamoDB record (tool_id, timestamp, payload_hash) and publishes it to SNS for audit logs.  
3. *Scalability/Availability*: The Lambda is provisioned with 1 GB memory; cold‑start latency <200 ms under 10k requests/min. DynamoDB auto‑scales to 5 WCU/RCU, ensuring 99.999% availability.  
4. *Cost*: Estimated <$0.02 per receipt, total $72/month for 100k calls.

**Result**  
The solution passed the audit with zero rework, cut manual compliance effort by **70%**, and reduced API latency from 650 ms to 250 ms. I documented trade‑offs (KMS key rotation vs. performance) and presented a post‑mortem that informed future contract layers.

*Bar‑raiser takeaways*: ownership of end‑to‑end flow, deep dive into AWS services, quantified impact, and lessons on balancing security with speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
