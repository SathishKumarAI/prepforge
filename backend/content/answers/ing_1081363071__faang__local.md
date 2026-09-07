---
qid: ing_1081363071__faang__local
question: 'Explain: 👍 Advantages of Indexes — Database-Internals/DataStructures/Index.md
  at main \u00b7 Anshul619/Database-Internals \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 546
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:21:46-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the *advantages of indexes* in a database context (from the “Database‑Internals” repo). The goal is to outline why a DB engine uses an index, what trade‑offs it introduces, and how it impacts query performance.

---

### 1. Clarify
- **Assumptions**:  
  - The reader knows basic SQL operations (SELECT, JOIN).  
  - We’re focusing on B‑tree / B+‑tree indexes as the canonical example.  

### 2. Approach
I’ll first state the core benefit—speeding data retrieval—then enumerate concrete advantages, and finally discuss cost trade‑offs.

### 3. Depth
| Advantage | Detail |
|-----------|--------|
| **Fast lookups** | Indexes allow log₂(n) search time vs O(n) full scan. |
| **Efficient range queries** | B‑trees maintain sorted order → `BETWEEN`, `>`, `<` run in linear to result size, not table size. |
| **Join optimization** | Index on join columns lets the engine perform hash or merge joins with reduced I/O. |
| **Uniqueness enforcement** | Unique indexes guarantee no duplicate keys without scanning entire table. |
| **Ordering** | `ORDER BY` can be satisfied by walking an index instead of sorting a result set. |

*Complexity*: B‑tree lookup ≈ O(log n) disk pages; range scans ≈ O(log n + k).  
*Trade‑offs*: Indexes consume storage, slow writes (insert/update/delete must maintain the tree), and can fragment.

### 4. Edge Cases
- **Small tables**: full table scan may beat index overhead.  
- **Highly selective queries**: indexes shine; low selectivity may yield many pages → less benefit.  
- **Write‑heavy workloads**: frequent updates cause maintenance cost to dominate.

### 5. Optimize & Communicate
I’d explain that a DB engine automatically decides when an index is useful (cost‑based optimizer). For interviewers, highlight:
1. *Why* indexes matter (speed + correctness).  
2. *When* they’re worth it (large tables, selective predicates).  
3. *How* to balance read/write load (drop unused indexes, use covering indexes).

This structured walk‑through demonstrates clear problem framing, depth in technical detail, and awareness of real‑world trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
