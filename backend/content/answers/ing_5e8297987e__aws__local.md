---
qid: ing_5e8297987e__aws__local
question: 'Explain: Consistent hashing — Consistent Hashing Explained'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 448
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:59:23-05:00'
sources: []
---

**Consistent hashing** is a distribution scheme that maps keys (e.g., user IDs) to nodes in a cluster while minimizing data movement when the cluster scales.

---

### Situation  
At my previous role we built a real‑time recommendation engine that stored per‑user feature vectors on an ElasticCache‑Redis cluster. Adding or removing cache shards caused >70 % of keys to rehash, leading to spikes and cold starts.

### Task  
Redesign the sharding logic so that node changes affect <5 % of keys, keeping latency < 30 ms and cost <$200/day.

### Action  
1. **Design** – Adopt a *virtual ring* (1000 virtual nodes per physical shard). Each key hashes to an integer on the ring; it maps to the first clockwise node.  
2. **AWS services** –  
   - **Amazon ElastiCache for Redis** with auto‑scaling groups.  
   - **AWS Lambda + DynamoDB** to maintain a *hash‑node map* (immutable mapping stored in a read‑through cache).  
3. **Scalability & Availability** – The ring is replicated across AZs; failover reads from the nearest replica, keeping 99.9 % availability.  
4. **Cost trade‑off** – Adding virtual nodes increases memory overhead (~10 %) but reduces rehash cost by >90 %.  

### Result  
- Key movement dropped to **3 %** during node churn.  
- Latency stayed < 25 ms across 99th percentile.  
- Operational ops reduced from daily *key‑migration scripts* to a one‑time Lambda run, saving ~12 hrs/month (~$150).  

---

> **Bar‑raiser notes:**  
> - Demonstrated ownership by taking end‑to‑end responsibility for the sharding layer.  
> - Deep dive into ring mechanics and AWS service trade‑offs.  
> - Quantified impact (key movement %, latency, cost).  
> - Learned from earlier failures: moving to virtual nodes eliminated hot‑spoting and manual rebalancing.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
