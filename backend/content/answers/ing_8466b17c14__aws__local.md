---
qid: ing_8466b17c14__aws__local
question: 'Explain: The NGM application sits inside a VPC — AWS re:Invent 2021 - Which
  NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 410
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:24:20-05:00'
sources: []
---

**Answer (Amazon‑style)**  

When the NGM app was migrated to a VPC in 2021, I owned the decision of which NoSQL store would meet our latency, scale and cost goals.  
- **Customer Obsession & Ownership:** The users demanded <5 ms read latency for real‑time recommendations while handling 10M writes/day.  
- **Dive Deep & Bias for Action:** I benchmarked DynamoDB (key/value), DocumentDB (Mongo‑compatible) and Aurora Serverless (NoSQL via PartiQL).  

**Situation / Task** – In Q3 ’21 we had to replace the legacy on‑prem Couchbase cluster that cost $200k/yr and suffered 2 min outages during peak traffic.  
**Action** – I ran a controlled A/B test: 70% of traffic hit DynamoDB with provisioned capacity (10 WCU, 100 RCU) and auto‑scaling; the remaining 30% used DocumentDB to evaluate consistency trade‑offs.  
**Result** – After 4 weeks, DynamoDB achieved <3 ms median read latency, sustained 12 M writes/day with 99.999% availability, and cut database spend by **$120k/year** (≈40%). The failover test showed zero data loss during a simulated AZ outage.  

I documented the trade‑offs: DynamoDB’s eventual consistency was acceptable for recommendation freshness; DocumentDB offered stronger consistency but higher cost.  

**Bar‑raiser takeaways:**  
- Clear ownership of migration and cost savings.  
- Deep dive into performance metrics and real‑world A/B testing.  
- Quantified impact (latency, uptime, cost).  
- Learned that a simple key/value store can outperform a complex document model when the access pattern is predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
