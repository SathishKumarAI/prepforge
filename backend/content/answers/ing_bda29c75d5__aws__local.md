---
qid: ing_bda29c75d5__aws__local
question: 'Explain: Hash-Based Sharding — Top 4 Data Sharding Algorithms Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 448
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:32:10-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation & Task** – I was asked to design a highly available, low‑latency data layer for a global e‑commerce catalog that needed to scale from millions to billions of SKUs while keeping read throughput > 200 k req/s.  
> **Action** – I evaluated four sharding schemes:  
> 1️⃣ **Hash‑Based Sharding (HBS)** – distributes rows uniformly by hashing the key; simple, no hotspots, but requires rebalancing on node churn.  
> 2️⃣ **Range Sharding** – partitions by key range; fast lookups for sequential queries but suffers from hot spots when traffic skews to a range.  
> 3️⃣ **Directory‑Based (Consistent Hashing)** – uses virtual nodes to smooth rebalancing, great for dynamic scaling.  
> 4️⃣ **Hybrid (Hash + Range)** – hash to bucket, then range within bucket; balances uniformity with locality for prefix queries.  
> I selected **consistent‑hashing HBS** combined with an Amazon DynamoDB Global Table per region and a Lambda‑based rebalancer. It delivered < 5 ms latency, 99.999% availability, and cost savings of 30 % over range sharding because we avoided hot‑spot throttling.  
> **Result** – The catalog served 300 k req/s with 0.2 % error rate; a 4× traffic spike during Black Friday was absorbed without manual intervention.  
> **Learnings** – Ownership: I wrote the rebalancer script and maintained its SLA. Dive Deep: I profiled hash collisions and tuned the bucket count to keep variance < 2%. Bar‑raiser focus: clear ownership, quantified impact (latency & cost), and iterative learning from the first deployment.  

> **Leadership Principles** – *Customer Obsession* (fast, reliable catalog), *Ownership* (end‑to‑end shard management).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
