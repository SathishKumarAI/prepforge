---
qid: ing_5cb06f324e__faang__local
question: 'Explain: Cardinality in Time Series Databases — What Is Cardinality in
  a Database? - SolarWinds Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 534
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:19:10-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to explain *cardinality* as it appears in time‑series databases (TSDBs).  
- **Cardinality**: the number of distinct keys/labels a metric can take.  
- In TSDB context, higher cardinality means more unique series per metric, which affects storage and query performance.  
Assumptions to confirm: we’re speaking about Prometheus/SolarWinds‑style TSDBs where metrics are identified by name + label set.

**2️⃣ Approach**  
1. Define generic database cardinality.  
2. Map that definition onto time‑series data (metric name + labels).  
3. Discuss why high cardinality matters: memory, indexing, compression.  
4. Provide practical mitigation strategies.

**3️⃣ Depth**  
- *Generic*: Cardinality = count of unique values a column can take.  
- *TSDB*: A series is uniquely identified by its **metric name + label set**. Cardinality is the number of distinct such combinations.  
  - Example: `cpu_usage{host="A",core=1}` vs `{host="B",core=2}` → two series, cardinality = 2 for metric `cpu_usage`.  
- Impact:  
  - **Memory**: TSDBs keep an in‑memory index of all series; each unique series adds overhead.  
  - **Write latency**: New series require hash table updates and potential disk writes.  
  - **Query speed**: High cardinality can lead to long aggregation times (e.g., `sum by(host)` over thousands of series).  
- Mitigations: label filtering, dropping rarely used labels, using “aggregation rules” or “downsampling”, employing sparse storage.

**4️⃣ Edge Cases**  
- *Zero cardinality*: metric never emitted → no series.  
- *Dynamic labels*: e.g., `user_id` in a SaaS app can explode cardinality; need to bucket or drop.  
- *Time‑windowed metrics*: Cardinality may shrink if old series expire.

**5️⃣ Optimize & Communicate**  
I’d finish by summarizing: “In TSDBs, cardinality is the count of unique metric‑label combinations; keeping it low preserves memory and query performance.” I would also mention that SolarWinds’ blog highlights best practices like label pruning and aggregation to control cardinality. This structured explanation demonstrates clear problem framing, technical depth, and actionable insight—key for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
