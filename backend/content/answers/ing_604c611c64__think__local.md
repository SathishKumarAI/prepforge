---
qid: ing_604c611c64__think__local
question: 'Explain: Antipatterns for partition keys — Choosing the Right DynamoDB
  Partition Key | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 435
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:23:16-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
*What does “antipatterns for partition keys” mean?* I’ll assume the user wants a conceptual explanation (not code) of common mistakes when selecting a DynamoDB partition key, and why they’re problematic. I’ll also assume familiarity with DynamoDB basics but not deep expertise.

**2️⃣ Adopt a mental model**  
Think of a partition key as a *hash* that determines how data is spread across physical partitions. Good keys give uniform distribution and efficient queries; bad ones cause hot spots or over‑fetching. Frame the answer around three core properties: cardinality, access pattern alignment, and immutability.

**3️⃣ Step‑by‑step reasoning**  
1. Define what a partition key does in DynamoDB.  
2. List typical antipatterns (e.g., using a monotonically increasing ID, single static value, or a highly skewed attribute).  
3. Explain the consequences of each: hot partitions, throttling, high read/write costs.  
4. Contrast with recommended patterns (high cardinality, composite keys, time‑based sharding).  
5. Offer quick checks: “Does this key give me ~10 k items per partition?” “Will my queries filter on it?”

**4️⃣ Avoid common pitfalls**  
- Don’t mix up primary key vs sort key; the antipattern discussion is about the *partition* part.  
- Resist over‑engineering a “perfect” key—real systems tolerate some skew.  
- Beware of assuming the example fits all use cases; mention that workloads differ.

**5️⃣ Sanity‑check & communicate**  
Re‑read the outline to ensure each point follows logically and covers both why a pattern is bad and what to do instead. Speak in clear, non‑technical language when explaining impact (e.g., “hot partition” → “one node gets all traffic”). End with a quick takeaway: choose keys that spread load evenly and match query patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
