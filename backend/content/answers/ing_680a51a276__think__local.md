---
qid: ing_680a51a276__think__local
question: 'Explain: Indexes — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 497
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:54:46-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Confirm whether “Indexes” refers to database indexing or data‑structure indexes in code.  
   - Assume a typical URL shortener service: many-to-one mapping, high read/write throughput, global scale.  
   - Note constraints: low latency (<10 ms), 99.9% availability, eventual consistency for analytics.

**2. Adopt a layered mental model**  
   - *Data‑model layer*: entity design (short_code ↔ long_url).  
   - *Storage layer*: choice of DB (relational vs NoSQL) and indexing strategy.  
   - *API layer*: request handling, routing, rate‑limiting.  
   - *Scalability & fault‑tolerance*: sharding, replication, caching.

**3. Step‑by‑step reasoning**  
   1. Map the primary key: `short_code` (unique string).  
   2. Decide on a secondary index for reverse lookup (`long_url → short_code`) if needed.  
   3. Choose storage: e.g., DynamoDB with partition key = `short_code`, global secondary index (GSI) on `long_url`.  
   4. Evaluate write amplification vs read speed; add in‑memory cache (Redis) for hot URLs.  
   5. Plan sharding strategy if using a relational DB (hash on `short_code`).  
   6. Design failover: read replicas, automated backups.

**4. Common traps to avoid**  
   - Over‑indexing: each index incurs write overhead; keep only necessary ones.  
   - Ignoring key distribution: poor hash functions cause hotspotting.  
   - Assuming ACID guarantees when eventual consistency suffices (and vice versa).  

**5. Sanity‑check & verbalize**  
   - Verify that each request path hits at most one index lookup.  
   - Confirm that the chosen index supports both CRUD operations efficiently.  
   - Explain trade‑offs: e.g., using a GSI in DynamoDB costs extra provisioned capacity versus a composite key.  

By following this structured approach, you can articulate why certain indexes are chosen and how they fit into the overall system design of a URL shortener.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
