---
qid: ing_d5989e27f4__think__local
question: 'Explain: Partition keys and request throttling — Choosing the Right DynamoDB
  Partition Key | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 426
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:02:00-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   - *Goal*: Help the student explain how partition keys affect request throttling in DynamoDB.  
   - *Assumptions*: The reader knows basic DynamoDB concepts (tables, items, primary key) but not the performance nuances.

**2️⃣ Adopt a “performance‑by‑partition” mental model**  
   - View each **partition key value** as a traffic lane.  
   - Recognize that read/write capacity is distributed across these lanes; uneven load → throttling.

**3️⃣ Step‑by‑step reasoning**  
   1. Start with the definition of a partition key and its role in sharding data.  
   2. Explain how DynamoDB maps key values to physical partitions.  
   3. Illustrate the capacity‑per‑partition model (RCU/WCU limits).  
   4. Show how skewed access patterns create “hot” partitions that hit their limits.  
   5. Contrast with a balanced key design that spreads traffic evenly, reducing throttles.  
   6. Mention best practices: randomization, hash functions, composite keys.

**4️⃣ Common traps to avoid**  
   - Mixing up *primary* vs *sort* key responsibilities.  
   - Assuming every partition gets the same capacity; it depends on provisioning and auto‑scaling.  
   - Overlooking secondary indexes—they have their own throttling behavior.  
   - Forgetting that global tables replicate keys across regions, adding complexity.

**5️⃣ Sanity‑check & verbalize**  
   - Run through a concrete example (e.g., “userId” vs “userId+timestamp”).  
   - Ask: *“Does this illustrate how uneven key distribution leads to throttling?”*  
   - Summarize with the core takeaway: choose a partition key that distributes traffic evenly across partitions, otherwise you’ll hit request limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
