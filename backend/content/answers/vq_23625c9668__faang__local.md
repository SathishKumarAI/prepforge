---
qid: vq_23625c9668__faang__local
question: Explain about a Clustered Index.?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 519
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:01:50-05:00'
sources: []
---

**Clustered Index – Structured FAANG‑style Answer**

---

### **1️⃣ Clarify**
> *“Explain what a clustered index is, how it works in a database table, and why you’d choose one over a non‑clustered index.”*  
Assumptions: We’re talking about relational DBMS (SQL Server/MySQL InnoDB), not a distributed file system.

---

### **2️⃣ Approach**
1. Define “index” vs. “clustered”.
2. Explain physical row ordering.
3. Show benefits and trade‑offs.
4. Contrast with non‑clustered index.
5. Mention use cases (range queries, primary keys).

---

### **3️⃣ Depth**
- **Definition**: A clustered index stores table rows *physically* in the order of the key columns. There is only one per table because data can be sorted on only one basis.
- **Structure**: B‑Tree where leaf nodes contain actual row data (or a pointer to it). Non‑leaf pages hold keys and child pointers.
- **Performance**:
  - *Seek* operations are fast because the data resides in contiguous pages.
  - Range queries (`BETWEEN`, `>=`) benefit from sequential I/O.
  - Insert/updates may cause page splits, leading to fragmentation.
- **Storage**: The clustered index is the table itself; no separate leaf level. Non‑clustered indexes contain row IDs or cluster keys as pointers.
- **When to use**: Primary keys, foreign key columns that are frequently queried, or columns used in ORDER BY/WHERE ranges.

---

### **4️⃣ Edge Cases**
- **High update workloads** → frequent page splits → consider a non‑clustered index.
- **Large tables with many inserts at random positions** → fragmentation; rebuild/reorganize needed.
- **Composite keys**: ordering is lexicographic; ensure most selective columns first.

---

### **5️⃣ Optimize & Communicate**
- *Explain trade‑offs*: cluster index improves read speed but can hurt writes.  
- *Show decision logic*: “If 90% of queries are point or range lookups on `id`, use clustered.”  
- *Narrate reasoning*: “I’d start with a clustered primary key, monitor fragmentation, and add non‑clustered indexes for columns that break the cluster order but still need fast lookup.”

---

**Word count: ~210 words**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
