---
qid: ing_1800f2eeac__faang__local
question: 'Explain: Time-Based Data — Time-Based Data | Elasticsearch: The Definitive
  Guide [2.x] | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 641
total_tokens: 886
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:40:19-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewee is asked to describe *time‑based data* as it relates to Elasticsearch, referencing the “Time‑Based Data” section of the 2.x guide. I’ll restate: we need to explain what time‑based data means, why it matters in ES, how indices are structured for it, and typical patterns (daily/weekly shards). Clarifying assumptions:  
- We’re targeting a use‑case where each document has a timestamp field.  
- Indexing is performed at ingestion, not bulk reindexing later.  

**2️⃣ Approach**  
Outline the key points I’ll cover:  
1. Definition & motivation.  
2. Common index‑by‑time strategies (daily/weekly).  
3. Shard allocation and rollover.  
4. Lifecycle management with ILM.  
5. Query patterns and performance considerations.  

**3️⃣ Depth**  
- **Definition:** Time‑based data are records whose natural key is a timestamp—logs, metrics, events.  
- **Why it matters:** ES stores documents in indices; each index can hold ~50 GB of hot data before shard bloat hurts performance. Splitting by time keeps shards small and queryable.  
- **Indexing patterns:**  
  - *Daily*: `app-log-YYYY.MM.DD` → ~24‑hour window.  
  - *Weekly/Monthly*: larger retention windows, fewer indices.  
  Each index becomes a “shard group”; queries that filter on the timestamp can use index‑time filtering (index‑level pruning).  
- **Rollover & ILM:** The `rollover` API automatically creates a new index once size or document count thresholds are hit; ILM policies automate moving older indices to warm/hot tiers and finally delete them.  
- **Shard allocation:** Keep shards balanced by ensuring each time bucket has enough documents (~1–2 GB). Use the `shard.size` setting in ILM.  
- **Query performance:** With time filtering, ES can skip entire indices (index‑level pruning), dramatically reducing search cost.  

**4️⃣ Edge Cases**  
- *High cardinality timestamps*: if every doc has a unique timestamp, daily indices may be too small—use weekly or monthly instead.  
- *Out‑of‑order ingestion*: late data must go to the correct index; consider using the `index.routing.allocation.require._name` or reindexing.  
- *Retention mismatch*: if retention policy changes, ILM can’t shrink existing indices without reindexing.  

**5️⃣ Optimize & Communicate**  
I’d emphasize that a well‑designed time‑based scheme reduces shard count, improves query speed via index pruning, and simplifies lifecycle management. In an interview I’d finish by noting the trade‑off: more indices → more metadata overhead vs. fewer shards per index → larger shards that may hit GC pauses. This balanced view shows deep understanding of ES internals and practical deployment concerns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
