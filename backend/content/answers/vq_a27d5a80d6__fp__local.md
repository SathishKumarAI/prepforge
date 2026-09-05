---
qid: vq_a27d5a80d6__fp__local
question: WHAT ARE SOME DOWNSIDES OF USING INDEXES?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 315
total_tokens: 487
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:49:25-05:00'
sources: []
---

**Why indexes can backfire**

At its core, an index is a *secondary data structure* that trades space for speed.  
When you read from the table you get a “directed” lookup; when you write you must keep two structures in sync.

1. **Write amplification** – every insert, update or delete touches the base page and the B‑tree leaf nodes of each indexed column.  The cost grows with the number of indexes, often exceeding the I/O saved on reads.  
2. **Cache pollution** – indexes consume buffer pool slots that could otherwise hold hot table pages, especially in write‑heavy workloads where index pages are scattered across many blocks.  
3. **Fragmentation and rebuild overhead** – as rows move, the B‑tree becomes fragmented; periodic rebuilds or reorganizations become expensive and can lock tables for long periods.  
4. **Storage bloat & backup impact** – indexes add megabytes of data that must be stored, transmitted, and restored, inflating backup windows.  

The deeper principle is *information entropy*: an index reduces the uncertainty about row locations but increases the system’s total entropy because it duplicates information across multiple structures. A non‑obvious insight: in highly transactional OLTP systems, a single “covering” index that satisfies a query can be cheaper than many narrow indexes; the marginal benefit of each new index diminishes rapidly as the cost of keeping them consistent dominates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
