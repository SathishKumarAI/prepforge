---
qid: ing_142aa326d7__think__local
question: 'Explain: Implement "top-k most frequent search queries" over a large query
  log, then tell me what breaks when the log becomes an unbounded stream across many
  machines.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 212
output_tokens: 418
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:02:32-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
- *What* is “top‑k most frequent search queries”? We need a count per query and the k highest counts.  
- *Scale*: “large log” → millions of rows; “unbounded stream across many machines” → data keeps arriving forever, sharded by host or time.  
- Assume no deletion of old entries unless explicitly required.

**2️⃣ Choose a mental model / framework**  
Use a **streaming frequency estimation** paradigm: maintain a global counter per query (or an approximate sketch). For distributed logs, apply a *map‑reduce* style aggregation: each machine does local counting → emits partial counts → a central reducer merges them.  

**3️⃣ Step‑by‑step reasoning**  
1. Ingest each query, increment its count in a hash map.  
2. Periodically (or on demand) extract the top‑k via a min‑heap of size k.  
3. For distributed logs: each node streams its local counts; an aggregator sums counts per key and runs the same top‑k extraction.  

**4️⃣ Common traps to avoid**  
- *Memory blowup*: keeping all keys in memory is infeasible for high cardinality.  
- *Latency spikes*: a full shuffle of all partial counts every time can overload the network.  
- *Stale data*: if you only keep recent counts, old queries will be lost, breaking the true top‑k.  

**5️⃣ Sanity‑check & communicate**  
Verify that: (a) local maps fit in memory; (b) aggregation scales linearly with partitions; (c) the algorithm tolerates out‑of‑order arrivals. Explain that when the stream is unbounded and distributed, the naïve approach fails because you cannot hold all counts forever and cannot afford a global shuffle each time—requiring approximate sketches or windowed counting instead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
