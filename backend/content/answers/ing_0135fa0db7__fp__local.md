---
qid: ing_0135fa0db7__fp__local
question: 'Explain: Communications — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 406
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:07:56-05:00'
sources: []
---

**Why a “paste‑bin” needs its own design layer**

The core problem is *transient, unstructured text sharing*—the same as a messaging queue but with an additional requirement: **quick lookup by URL and eventual decay**.  
1. **Write‑once, read‑many**: the system must accept a burst of writes (a user pastes code) and then serve many reads without re‑processing the data.  
2. **Low latency & high throughput**: the write path is a single append; the read path is an immutable key lookup.  
3. **Durability vs. cost**: data lives only minutes to days, so we can use cheaper, eventually consistent stores (e.g., DynamoDB with TTL) instead of strong‑consistency RDBMS.

The README maps these constraints onto concrete layers:

- **API layer** – stateless HTTP endpoints that accept a POST (create) and GET (retrieve).  
- **Storage layer** – key‑value store with TTL; the key is the UUID in the URL.  
- **Cache layer** – optional LRU cache for hot pastes to reduce storage hits.  
- **Background cleanup** – a scheduled job that scans for expired keys, ensuring data never persists longer than intended.

A subtle insight: *TTL can be enforced at the database level*, eliminating a separate purge service and guaranteeing consistency even under failure, because the key simply disappears when the clock rolls over. This leverages the storage system’s internal garbage‑collection logic, turning an operational chore into a declarative property of the data model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
