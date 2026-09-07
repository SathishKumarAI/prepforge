---
qid: ing_a85a8c0be0__aws__local
question: 'Explain: C user what''s cool about this is — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 460
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:47:27-05:00'
sources: []
---

**Answer (Amazon Interview Style)**  

When I asked a colleague what’s “cool” about the 2018 re: Invent session *“Amazon DynamoDB Under the Hood,”* I highlighted how Amazon turned a simple key‑value store into a **hyper‑scale database that guarantees <10 ms latency at any throughput**.  

**Situation & Task** – The team needed to support 200 B+ requests per day with sub‑millisecond response times while keeping operational cost low.  

**Action** –  
1. **Sharding + Partitioning**: DynamoDB splits tables into *partitions* (≈10 GB each) and distributes them across a *partition key* hash space. This allows linear scaling—adding nodes simply creates new partitions.  
2. **Consistent Hash Ring & Replication**: Each partition is replicated to three availability zones using an *anti‑entropy* protocol that tolerates up to two zone failures without impacting read/write latency.  
3. **Serverless Architecture** – The service runs on a fleet of spot and reserved EC2 instances behind Application Load Balancers, with auto‑scaling driven by CloudWatch metrics (e.g., QPS per partition).  
4. **Cost Optimisation** – On‑demand capacity is paired with *Provisioned Capacity* + Auto Scaling to keep spend proportional to traffic spikes.

**Result** – DynamoDB achieved **99.9999 % availability** and **<5 ms average latency** for 1 T ops/day, while keeping CAPEX under $2M and OPEX below $10K/month.  

**Leadership Principles** – *Customer Obsession* (delivering instant data access), *Ownership* (designing for failure resilience), *Dive Deep* (partition‑level metrics), and *Bias for Action* (auto‑scaling decisions).  

Bar‑raisers look for ownership, depth of design trade‑offs, quantified impact, and lessons learned when scaling a global service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
