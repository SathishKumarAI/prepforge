---
qid: ing_bc5dbdcd95__think__local
question: What is a shard? — How many shards should I have in my Elasticsearch cluster?
  | Elastic Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 426
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:25:07-05:00'
sources: []
---

**1. Clarify the question and state assumptions**  
   - Confirm that “shard” refers to an **Elasticsearch index shard** (primary/replica).  
   - Assume the user wants practical guidance on *how many* shards to create, not a theoretical discussion of sharding in databases.

**2. Adopt the “Elastic‑cluster capacity model” framework**  
   - Total data size → number of primary shards × shard size ≈ node memory + disk limits.  
   - Use Elastic’s recommendation: **shard ≤ 50 GB** on average for optimal performance.  
   - Consider replica count, query load, and index refresh rate.

**3. Step‑by‑step reasoning**  
   a. Estimate total data volume (e.g., 10 TB).  
   b. Divide by desired shard size (≤50 GB) → ~200 shards.  
   c. Distribute across nodes: 200 shards ÷ number of nodes gives per‑node shard count; keep it under ~20–30 to avoid CPU/memory pressure.  
   d. Adjust for replicas (×2 if one replica).  
   e. Re‑evaluate after a few weeks of production traffic.

**4. Common traps to avoid**  
   - Over‑sharding: too many tiny shards inflate metadata and slow search.  
   - Under‑sharding: large shards (>50 GB) cause long recovery times.  
   - Ignoring node memory limits; each shard consumes ~1 GB of JVM heap for Lucene internals.

**5. Sanity‑check & communicate clearly**  
   - Verify the shard count by running `GET /_cat/shards?format=json`.  
   - Explain that “shard” is a *unit of storage and search*; more shards = more parallelism but also overhead.  
   - Suggest using dynamic index templates or rollover indices to maintain optimal shard sizes over time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
