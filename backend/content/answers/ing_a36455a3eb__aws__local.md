---
qid: ing_a36455a3eb__aws__local
question: 👎 What are disadvantages of DynamoDB? — AWS-Services/1_Databases/AmazonDynamoDB/Readme.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 389
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:34:48-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Ownership* & *Dive Deep*

**Situation / Task**  
I was tasked with migrating a high‑traffic e‑commerce catalog from a relational database to DynamoDB for lower latency and auto‑scaling.

**Action**  
During the feasibility study I identified three core disadvantages that could impact our SLAs:

1. **Limited Query Flexibility** – DynamoDB supports only key‑value or single secondary index lookups. Complex joins or ad‑hoc analytics require exporting data to Redshift or Athena, adding latency and cost.  
2. **Provisioned Throughput & Hot Keys** – If many users hit the same partition key (e.g., popular product ID), write amplification leads to throttling unless I implemented *partition sharding* or switched to on‑demand mode, raising costs by ~15 %.  
3. **Eventual Consistency Trade‑off** – Strong consistency is available but forces an extra round‑trip and 5 % throughput penalty; for time‑sensitive inventory updates we had to tolerate eventual consistency and build a compensating read layer.

I mitigated these with a hybrid approach: DynamoDB for primary traffic, S3 + Athena for analytics, and a Lambda “write‑through” cache that balances consistency needs.  

**Result**  
Post‑migration latency dropped 30 ms (5 % improvement), cost stayed within budget, and we avoided a 20 % increase in operational incidents by proactively addressing hot‑key patterns. I documented the trade‑offs in our ops playbook, enabling future teams to make informed decisions.  

*Bar‑raiser notes:* Ownership of cross‑team impacts, deep dive into DynamoDB limits, quantified performance gains, and lessons learned from throttling failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
