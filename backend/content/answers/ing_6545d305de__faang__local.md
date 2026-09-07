---
qid: ing_6545d305de__faang__local
question: 'Explain: How Indexes Work — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 437
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:39:45-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how database indexes work in the context of system design—i.e., why we use them, what they are, and how they influence query performance. I’ll assume a relational DBMS (PostgreSQL/MySQL) and focus on B‑tree indexes, the most common type.

---

**Approach**  
1. Define an index as a separate data structure that maps key values to row locations.  
2. Show the B‑tree layout: root → internal nodes → leaf pages holding keys + pointers.  
3. Walk through a query execution path: hash lookup → tree traversal → disk seeks.  
4. Contrast with full table scans.  

---

**Depth**  
*Index structure*: Each node holds sorted key ranges; leaves hold the actual row IDs (RID).  
*Lookup cost*: O(log n) comparisons + 1–2 page reads, far cheaper than scanning n rows.  
*Maintenance*: Inserts/deletes cause splits/merges; overhead is amortized but can affect write latency.  
*Types*: B‑tree (range queries), hash (point lookups), GiST/Gin (full‑text).  

---

**Edge Cases**  
- **Wide tables**: index size grows, leading to cache misses.  
- **Highly concurrent writes**: lock contention on pages.  
- **Non‑selective predicates**: indexes may be slower than scans.  
- **Composite keys**: order matters; indexing `A,B` can answer queries on `A` but not vice versa.  

---

**Optimize & Communicate**  
Recommend covering indexes to avoid lookups, use partial indexes for sparsely used predicates, and periodically rebuild fragmented indexes. In interviews, I’d illustrate with a simple query timeline diagram and quantify expected speed‑up (e.g., 10 k rows → 1 ms vs 50 ms). This showcases clear reasoning, depth, and practical trade‑offs—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
