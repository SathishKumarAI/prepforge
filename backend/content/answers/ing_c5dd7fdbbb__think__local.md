---
qid: ing_c5dd7fdbbb__think__local
question: 'Explain: Database Design — How to Ace System Design Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 419
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:02:26-05:00'
sources: []
---

**1️⃣ Clarify the goal & constraints**  
*Ask:* What kind of system is being designed (e.g., e‑commerce catalog, social feed)? Which performance metrics matter most—latency, throughput, consistency? Are there known data volumes or growth rates?  
State assumptions: a single region, moderate write traffic, eventual consistency acceptable for reads.

**2️⃣ Adopt a layered mental model**  
1. *Requirements* → functional & non‑functional.  
2. *Core entities & relationships* (tables, indexes).  
3. *Data access patterns* (queries, joins).  
4. *Scalability strategy* (sharding, replication).  
5. *Consistency & durability trade‑offs*.  

**3️⃣ Step‑by‑step reasoning**  
- List key tables and primary keys.  
- For each query type, decide whether a single table or denormalized view suffices.  
- Identify hot spots; choose sharding key (e.g., user ID).  
- Pick storage engine: relational for ACID, NoSQL for massive scale.  
- Add indexes that support most frequent reads.  
- Plan backups and disaster‑recovery paths.

**4️⃣ Avoid common traps**  
- Don’t over‑normalize to the point where joins become bottlenecks.  
- Beware of “magic” primary keys; use natural or composite keys when they aid partitioning.  
- Don’t ignore write amplification from too many indexes.  
- Resist adding caching layers before understanding read/write ratios.

**5️⃣ Sanity‑check & verbalize**  
Run through a sample transaction: insert → update → query, noting latency and consistency. Explain why each design choice (e.g., sharding on user ID) satisfies the earlier constraints. If a step feels arbitrary, revisit the requirement list to justify it. This disciplined walk‑through demonstrates both analytical rigor and communication skills—exactly what interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
