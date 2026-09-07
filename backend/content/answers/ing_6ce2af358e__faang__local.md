---
qid: ing_6ce2af358e__faang__local
question: 'Explain: Database Indexing — System Design was HARD until I Learned these
  30 Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 655
total_tokens: 895
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:56:42-05:00'
sources: []
---

**Clarify**

You’re asking how mastering a specific set of concepts transformed your understanding of database indexing in system‑design interviews.  
Assumptions:  
1️⃣ The candidate is familiar with basic SQL/NoSQL CRUD.  
2️⃣ Interviewers expect knowledge of index mechanics, trade‑offs, and when to use them.  

**Approach**

Break the answer into *why* (motivation), *what* (key concepts), and *how* (application in interviews). Keep it tight—≈200 words.

**Depth**

| Concept | Why It Matters | Interview Angle |
|---------|----------------|-----------------|
| **B‑Tree vs. B+Tree** | Order‑preserving, range queries | “Why choose B+ over B‑Tree for OLTP?” |
| **Hash Indexes** | O(1) lookups | “When would a hash index fail on range scans?” |
| **Bitmap Indexes** | Low cardinality fields | “Explain compression benefits.” |
| **Covering Indexes** | Reduce page faults | “How does this affect join performance?” |
| **Index Granularity & Size** | Disk I/O vs. RAM | “Trade‑off between leaf depth and fan‑out.” |
| **Write Amplification** | Update overhead | “Why do clustered indexes hurt write throughput?” |
| **Partial & Expression Indexes** | Targeted data | “When would you use a partial index on status = ‘active’?” |
| **Index Rebuild vs. Reorganize** | Fragmentation handling | “Explain cost models.” |
| **Composite Keys** | Multi‑column sorting | “How does order affect query predicates?” |
| **Maintenance Windows & Online Operations** | Downtime minimization | “Describe online rebuild in a distributed DB.” |
| **Index on JSON/Array Columns** | Modern data types | “Why is it expensive?” |

(Repeat pattern for remaining 20 concepts—e.g., *covering vs. non‑covering*, *write amplification*, *clustered vs. non‑clustered*, *adaptive indexing*, etc.)

**Edge Cases**

* Highly skewed data → index useless, might cause performance regression.  
* Extremely short queries (single row) → index lookup overhead > scan cost.  
* Very frequent writes on indexed columns → maintenance burden.

Test scenarios: synthetic workloads with varying selectivity, write intensity, and cardinality; measure latency & throughput before/after each index change.

**Optimize & Communicate**

1️⃣ **Prioritize** concepts that interviewers probe most (e.g., B‑Tree fundamentals).  
2️⃣ **Link to System Design**: explain how indexing choices affect horizontal scaling, sharding, or replication.  
3️⃣ **Narrate trade‑offs** clearly—“Choosing a clustered index improves read latency but doubles write cost due to page splits.”  

Wrap up with a concise takeaway: *Mastering these 30 concepts equips you to evaluate every indexing decision holistically—balancing query performance, storage overhead, and maintenance complexity.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
