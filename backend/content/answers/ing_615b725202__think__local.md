---
qid: ing_615b725202__think__local
question: 'Explain: Choosing a Shard Key — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 488
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:26:57-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
* What is “sharding” in this context (horizontal partitioning of data)?  
* Is the question about MongoDB, Cassandra, or a generic distributed DB?  
* Assume we’re dealing with a key‑value store that can split collections into shards based on a chosen field.  

**2️⃣ Mental model / framework**  
Use the *Shard Key Selection Checklist*:  
- **Uniqueness & cardinality** – avoids hotspotting.  
- **Query patterns** – should align with most frequent predicates.  
- **Write distribution** – even spread of inserts/updates.  
- **Data size & growth** – anticipate future scaling needs.  

**3️⃣ Step‑by‑step reasoning**  
1. Identify the *most common query predicates* (e.g., `user_id`, `country`).  
2. Evaluate each candidate field for **selectivity**: high cardinality → better distribution.  
3. Check if the field is part of a **range query**; avoid fields that lead to large range scans on a single shard.  
4. Consider *write hotspots*: a low‑cardinality field (e.g., `status='active'`) will funnel all writes to one shard—bad.  
5. Factor in **future growth**: a field that might become sparse over time could cause uneven shard sizes.  
6. Decide on a single key or composite key if queries often combine fields.  

**4️⃣ Common traps to avoid**  
* Choosing a low‑cardinality field (e.g., `country`).  
* Ignoring write patterns and assuming read patterns dominate.  
* Forgetting that the shard key cannot change after data is distributed.  
* Overcomplicating with composite keys that add unnecessary join logic on reads.  

**5️⃣ Sanity check & communicate**  
* Re‑explain: “We pick a field that appears in most query predicates, has high uniqueness, and distributes writes evenly.”  
* Run a quick *mock distribution* (e.g., hash of `user_id` across 4 shards) to verify evenness.  
* Summarize the trade‑offs: better read locality vs. write hotspot risk, and note that the chosen key should be revisited if access patterns shift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
