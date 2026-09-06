---
qid: vq_cc9b3bef2a__faang__local
question: what is the role of combiner in hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 582
total_tokens: 816
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:34:02-05:00'
sources: []
---

**Clarify**  
The question asks about the *combiner* primitive in Hadoop MapReduce. It expects an explanation of its purpose, when it’s used, and how it differs from reducers.

---

### 1️⃣ Clarify  
> *What is a combiner?*  
> *When should we use one?*  
> *Does every job need one?*  
> *How does it affect correctness and performance?*

---

### 2️⃣ Approach  
Explain that a combiner is an optional, local‑reduce step executed on the mapper output before data is shuffled. Outline its role: reduce network traffic by aggregating intermediate key/value pairs locally.

---

### 3️⃣ Depth (Core Answer)  

- **Definition**: A combiner is a user‑defined function that has the same signature as a reducer (`map(String key, Iterable<Value> values)` → `context.write(key, aggregatedValue)`), but Hadoop may invoke it zero or more times on mapper output.  
- **Purpose**:  
  - *Network I/O reduction*: By collapsing multiple records with the same key into one per map task, fewer bytes are sent across the network to reducers.  
  - *CPU savings*: Less data for reducers to process.  
- **When it’s useful**:  
  - When intermediate values can be meaningfully aggregated locally (e.g., word counts).  
  - When the combiner logic is idempotent and commutative/associative, ensuring correctness regardless of how many times it's applied.  
- **Differences from Reducer**:  
  - Combiner runs on mapper side; reducer runs after shuffle.  
  - It may run zero or multiple times; output format must be compatible with the reducer’s input.  

---

### 4️⃣ Edge Cases  
- **Non‑idempotent combiners** can corrupt results (e.g., subtracting).  
- **Large intermediate values** might still cause memory pressure on mappers if combiner logic is heavy.  
- **Partitioning**: If a combiner emits keys that map to different reducers than the mapper’s partitioner expects, data may be mis‑distributed.

---

### 5️⃣ Optimize & Communicate  
Highlight that combiners are *performance hints*, not guarantees. Use them when you know your aggregation is associative/commutative; test with unit tests and profile shuffle traffic. Emphasize that a well‑chosen combiner can cut network I/O by an order of magnitude, but overusing it or misapplying it can degrade correctness or add overhead.

> **Bottom line:** A combiner is an optional local reducer that shrinks mapper output to reduce network load; use it only when its logic preserves the final result.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
