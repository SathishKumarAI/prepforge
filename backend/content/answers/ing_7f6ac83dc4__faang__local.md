---
qid: ing_7f6ac83dc4__faang__local
question: 'Explain: Covering Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 437
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:41:21-05:00'
sources: []
---

**Covering Indexes – Quick‑Read, Minimal‑Join**

| Step | What I’ll do |
|------|--------------|
| **Clarify** | *Problem:* We need fast reads for a query that only touches a few columns (e.g., `SELECT id, name FROM users WHERE active = 1`). *Assumptions to confirm:* – Query pattern is read‑heavy. – Columns are largely static or updated rarely. – The DB is relational and supports index types (B‑tree, bitmap). |
| **Approach** | Build a *covering* (or *inclusion*) index that contains all columns referenced in the query: `CREATE INDEX idx_users_active_name ON users(active, name);` This lets the engine satisfy the query entirely from the index pages, avoiding lookups into the heap. |
| **Depth** | • **Data layout:** Index holds key (`active`) + payload (`id`, `name`).<br>• **Read path:** Seek on `active`, scan contiguous index pages, return rows.<br>• **Write cost:** Each DML must update both table and index; however, if updates touch only indexed columns, overhead is minimal. <br>• **Complexity:** O(log N) seek + O(k) scan for k qualifying rows. |
| **Edge Cases** | • High write volume → index bloat & contention.<br>• Queries requiring additional columns → fallback to heap join.<br>• Very selective predicates but many columns in the payload → large index pages, cache pressure. Test with varying cardinality and update rates. |
| **Optimize & Communicate** | *If writes are heavy,* consider partial or bitmap indexes; *if reads dominate,* keep the covering index and periodically rebuild to defragment. I’d explain trade‑offs: faster reads vs. write overhead, storage cost, and maintenance windows. This showcases structured reasoning, technical depth, and communication—key signals for FAANG interviews. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
