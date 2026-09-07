---
qid: vq_e3640c3101__faang__local
question: WHAT ARE THE DIFFERENT TYPES OF INDEXES?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 599
total_tokens: 832
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:39:47-05:00'
sources: []
---

**1️⃣ Clarify**  
*Question:* “What are the different types of indexes?”  
Assumptions: We’re speaking about **database indexing** (not file system or search‑engine), and we want a concise taxonomy that covers common relational DBMSs.

---

**2️⃣ Approach**  
I’ll classify indexes by (a) *storage structure*, (b) *data access pattern*, and (c) *use‑case*. For each, I’ll mention key properties, pros/cons, and typical scenarios.  

---

**3️⃣ Depth**

| Type | Structure | Typical Use | Pros | Cons |
|------|-----------|-------------|------|------|
| **B‑Tree / B+Tree** | Balanced tree of sorted keys | Range queries, equality lookups | O(log n) access; works for wide range of workloads | Requires disk I/O; heavy on writes (rebalancing) |
| **Hash Index** | Hash table mapping key → row(s) | Exact‑match lookups only | O(1) average lookup | No ordering; poor for ranges; costly rebuilds on resize |
| **Bitmap Index** | Bit vector per distinct value | Low‑cardinality columns (e.g., gender, status) | Compact; fast AND/OR of predicates | Expensive updates; not suited to high cardinality |
| **Full‑Text Index** | Inverted list of terms → document IDs | Text search (LIKE / MATCH … AGAINST) | Handles fuzzy queries, relevance ranking | Large storage; slower updates |
| **Spatial Index (R‑Tree/Quad‑Tree)** | Hierarchical bounding boxes | Geospatial ranges & nearest‑neighbor | Efficient spatial predicates | Complex implementation; not all RDBMS support |
| **Clustered vs. Non‑clustered** | Clustering stores data physically in index order | Clustered: primary key, reduces I/O for range scans | Single copy of data | Only one clustered index per table; writes slower |
| **Composite / Multi‑column** | Index on a tuple of columns | Queries filtering on multiple predicates | Covers more queries | Larger size; cardinality matters |

---

**4️⃣ Edge Cases**  
*Very high write throughput* → prefer hash or skip indexes.  
*Low cardinality* → bitmap is great; otherwise it bloat.  
*Large tables with many updates* → B‑Tree rebalancing can become a bottleneck.

---

**5️⃣ Optimize & Communicate**  
I’d recommend starting with **B‑Trees** for most workloads, adding **hash indexes** only when exact lookups dominate, and considering **bitmap** or **full‑text** for specialized columns. I’d also emphasize monitoring query plans to validate index effectiveness and iteratively drop unused ones.

*Word count: ~215*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
