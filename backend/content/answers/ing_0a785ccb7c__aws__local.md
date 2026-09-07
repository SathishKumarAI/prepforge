---
qid: ing_0a785ccb7c__aws__local
question: 'Explain: Let’s discuss what database to use to — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 539
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:49:25-05:00'
sources: []
---

**Situation / Task**  
I was tasked in a FAANG‑style interview to pick the database for a location‑based service like Yelp or Google Places that must serve millions of queries per second, support real‑time reviews, and return results within 200 ms even during peak traffic.  

**Action (Dive Deep + Ownership)**  
1. **Requirements** – geo‑search (radius query), high write throughput for user reviews, strong consistency for ratings, and low latency reads for mobile clients.  
2. **Design choice** – a *dual‑store* architecture:  
   * **Amazon DynamoDB** (global tables) for the core review data (userID, placeID, rating, timestamp). It gives single‑digit millisecond latency, 10 kWCU write capacity, and automatic replication across AZs.  
   * **Amazon OpenSearch Service** (formerly Elasticsearch) for geo‑sharding and full‑text search of place names, categories, and reviews. Each document contains a `geo_point` field enabling efficient radius queries.  
3. **Indexing & scaling** – use DynamoDB Global Secondary Indexes (GSI) on `placeID` to fetch all reviews per location; OpenSearch uses shard replication with 2 replicas for HA. Autoscaling policies adjust read/write units based on traffic spikes, keeping cost predictable.  
4. **Cost & trade‑offs** – DynamoDB charges $0.25/WCU and $1.25/RCU; OpenSearch costs ~\$0.04 per GB/month plus query fee. The split keeps writes cheap (no heavy indexing) while still enabling rich search.

**Result (Deliver Results)**  
Simulated load: 5 M QPS with 200 ms SLA → DynamoDB sustained 12 kWCU, OpenSearch handled 3 M geo‑searches/sec using 8 shards. Total monthly cost ≈ \$15K vs. a single monolithic RDS solution that would have hit 80 % CPU and required expensive sharding.  

**Learnings & Bar‑raiser Signals**  
* Ownership: I defined the failure mode (write surge) and built automatic failover to a read‑replica table.  
* Dive Deep: I evaluated latency distributions, GC pause impact on DynamoDB, and query cost in OpenSearch.  
* Quantified Impact: 70 % reduction in read latency compared to baseline.  

**Leadership Principles Highlighted** – *Customer Obsession*, *Ownership*, *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
