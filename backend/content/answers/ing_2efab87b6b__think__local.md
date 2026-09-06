---
qid: ing_2efab87b6b__think__local
question: 'Explain: a hundred tokens per second is how — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 216
output_tokens: 507
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:46:02-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
- The question asks *why* “a hundred tokens per second” is significant for DynamoDB’s architecture.  
- Assume the audience knows basic DB concepts but not AWS internals.  
- Define “token”: a unit of work (e.g., read/write request) in DynamoDB’s partition‑based model.

**2️⃣ Mental model / framework**  
- Think of DynamoDB as a distributed key–value store split into *partitions* by hash keys.  
- Each partition can handle a limited throughput—roughly 10 k IOPS or ~200 MB/s, but this is per *token* (request) rather than raw bytes.  
- AWS uses “tokens” to quantify request weight: read/write capacity units.

**3️⃣ Step‑by‑step reasoning**  
1. **Capacity planning:** DynamoDB needs to guarantee latency ≤ 10 ms even under peak load.  
2. **Token budget:** Assign each partition a token budget (≈100 TPS).  
3. **Scaling rule:** When traffic exceeds the token budget, auto‑split the partition into two, redistributing keys.  
4. **Workload balance:** Tokens help decide which partitions to split or merge, ensuring no single node becomes a bottleneck.  
5. **Cost model:** Billing is based on provisioned capacity units; 100 TPS per partition translates directly into predictable cost.

**4️⃣ Common traps**  
- Confusing *tokens* with raw data size; they measure logical request weight, not bytes.  
- Assuming all partitions are equal—traffic can be skewed; DynamoDB’s token system mitigates this by dynamic re‑partitioning.  
- Ignoring latency requirements; the 100 TPS figure is chosen to keep tail latencies low.

**5️⃣ Sanity‑check & communicate**  
- Verify numbers: 100 TPS × 4 bytes (typical key) ≈ 400 B/s, well below hardware limits—so it’s a logical bound.  
- Explain in plain terms: “Think of each partition as a cashier line that can serve about 100 customers per second; if more come, we open another line.”  
- Conclude that the token‑per‑second metric is a design knob balancing performance, scalability, and cost for DynamoDB’s hyper‑scale architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
