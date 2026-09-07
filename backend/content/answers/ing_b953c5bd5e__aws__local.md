---
qid: ing_b953c5bd5e__aws__local
question: 'Explain: NoSQL DBs — Types of Databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 446
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:22:59-05:00'
sources: []
---

**Situation / Task**  
While launching a real‑time recommendation engine for an e‑commerce catalog, I had to decide how to store user clickstreams and product metadata at scale. The goal was 99.99 % availability with <50 ms latency under 10 M requests/day.

**Action**  
I evaluated the three main NoSQL families—document (MongoDB, DynamoDB), key‑value (Redis, DynamoDB), and wide‑column (Cassandra, DynamoDB). I chose **Amazon DynamoDB** for its managed scalability and built‑in global replication.  

*Design:*  
- **Document model** for product catalog: flexible schema, nested attributes.  
- **Key‑value table** for user session tokens, using LRU caching in Amazon ElastiCache (Redis) to keep hot data <10 µs.  
- **Wide‑column** style via DynamoDB’s secondary indexes for clickstream analytics, enabling efficient scans on time windows without full table reads.

*Why DynamoDB?*  
- **Scalability:** automatic sharding; handled 15× traffic spike during a flash sale with no throttling.  
- **Availability:** multi‑AZ provisioned capacity; maintained 99.999 % SLA.  
- **Cost:** On‑demand pricing + reserved capacity reduced spend by 32 % versus self‑managed Cassandra cluster.

**Result**  
The system processed 12 M events/day with <45 ms latency, driving a 18 % lift in conversion rate during peak periods.  

**Learning** – *Ownership & Dive Deep*: I benchmarked each engine under realistic workloads, documented trade‑offs (e.g., write amplification in Cassandra vs. provisioned throughput in DynamoDB), and iterated the data model until it met both performance and cost targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
