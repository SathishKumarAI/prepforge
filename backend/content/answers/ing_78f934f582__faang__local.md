---
qid: ing_78f934f582__faang__local
question: 'Explain: So DynamoDB the items have to have — AWS re:Invent 2021 - Which
  NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 450
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:25:21-05:00'
sources: []
---

**Clarify**  
The interviewer wants to know what a “DynamoDB item” looks like and why every table requires a *partition key* (and optionally a sort key). I’ll confirm that we’re talking about AWS‑managed NoSQL, not a self‑hosted solution.

**Approach**  
1. Restate the core requirement: each item must have a unique identifier composed of keys.  
2. Explain the two types of keys and how they map to the physical storage.  
3. Touch on secondary indexes if relevant.

**Depth**  
- **Partition key (hash key)** – mandatory; values are hashed to determine which partition holds the item. All items with the same partition key share a logical “bucket.”  
- **Sort key (range key)** – optional; when present, it orders items within that partition and enables range queries (`BETWEEN`, `>`, `<`).  
- An *item* is essentially a JSON‑like document: `{ PK: "USER#123", SK: "ORDER#456", attributes… }`.  
- The combination of PK+SK (if SK exists) must be unique per table.  
- DynamoDB automatically splits/replicates partitions; you don’t need to design the partition key for sharding—just make it high‑cardinality and evenly distributed.

**Edge Cases**  
- **Hot partitions**: a low‑entropy PK (e.g., timestamp only) can overload one node.  
- **Empty sort keys**: if SK is omitted, all items share the same partition but still need unique PKs.  
- **Large attribute values**: exceeding 400 KB limits causes write failures.

**Optimize & Communicate**  
I’d highlight that choosing a composite key (PK+SK) lets you model one‑to‑many relationships and run efficient queries without scans, which is the main performance advantage of DynamoDB over other NoSQL options. I’d also mention how secondary indexes can be added later if new query patterns emerge. This shows I understand both design intent and practical trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
