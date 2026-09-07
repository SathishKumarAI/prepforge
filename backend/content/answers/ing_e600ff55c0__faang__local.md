---
qid: ing_e600ff55c0__faang__local
question: 'Explain: Types of Pagination'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 572
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:33:07-05:00'
sources: []
---

**Clarify**  
The interviewer wants you to describe the different *pagination* strategies used when serving large datasets in ML pipelines or model-serving APIs (e.g., for data exploration dashboards). Confirm that we’re talking about **client‑side vs server‑side pagination**, and whether “cursor” based methods are included.

---

**Approach**  
1. Enumerate each pagination type.  
2. For each, explain how it works, its pros/cons in ML contexts (latency, data freshness, consistency).  
3. Touch on trade‑offs: indexing cost vs query speed, memory usage, and impact on training pipelines.

---

**Depth**  

| Type | Mechanism | Use‑case | Complexity / Trade‑offs |
|------|-----------|----------|------------------------|
| **Offset/Limit (Page Number)** | Server returns rows *n* to *n+limit*. | Simple UI tables; good for small, static datasets. | Requires full scan up to offset → O(n) time; stale data if underlying set changes. |
| **Cursor‑Based** | Server sends a opaque cursor pointing to last item; next page requested with it. | Streaming logs or recommendation feeds where order matters. | Constant O(1) per page; handles inserts/deletes gracefully; needs stable ordering key. |
| **Keyset Pagination** (a form of cursor) | Uses the last seen key (`WHERE id > last_id ORDER BY id LIMIT k`). | Large training data sharding; efficient for sorted feature tables. | Index‑friendly, no offset scans; fails if keys are non‑unique without tie‑breakers. |
| **Token Pagination** | Server issues a signed token that encodes state (e.g., page number + hash). | Secure APIs for model inference results. | Adds overhead to generate/validate tokens; protects against tampering. |

---

**Edge Cases**  
- *Concurrent modifications*: Offset can jump items; cursor must handle gaps.  
- *Non‑unique keys*: Keyset needs secondary tie‑breakers or composite cursors.  
- *Deep pagination*: Page numbers become large → performance degrades for offset.

---

**Optimize & Communicate**  
Recommend **keyset (cursor) pagination** for most ML serving scenarios because it scales with data size and keeps latency low. If the UI demands numbered pages, combine cursor logic under the hood but expose page numbers to the client. Explain trade‑offs clearly: “Offset is easy but becomes expensive as we scroll; keyset gives us consistent O(1) reads but requires a stable ordering column.” This shows you balance engineering constraints with product needs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
