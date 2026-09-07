---
qid: ing_410c096ea7__faang__local
question: 'Explain: Change Data Capture Techniques — Database-Internals/ChangeDataCapture/Readme.md
  at main \u00b7 Anshul619/Database-Internals \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 502
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:15:21-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the “Change Data Capture” (CDC) techniques implemented in the `Database‑Internals/ChangeDataCapture` repo. I’ll assume we need to describe how CDC works at a low level, what mechanisms are used (e.g., binlogs, triggers), and why it matters for replication or analytics.

**Approach**  
1. Summarize CDC’s goal: capture row‐level changes as they happen.  
2. Identify the repo’s two main strategies: **Log‑Based** (reading binary logs) and **Trigger‑Based** (SQL triggers writing to a shadow table).  
3. Explain how each strategy maps to database internals, including transaction boundaries and ordering guarantees.  

**Depth**  
- *Log‑Based CDC*: The engine parses the MySQL binlog or PostgreSQL WAL entries, reconstructs DML operations (`INSERT`, `UPDATE`, `DELETE`), and emits them as JSON events. It preserves ACID by following commit markers, ensuring events reflect the exact order of commits. Complexity: O(number_of_events) with minimal overhead because it reads a write‑only stream.  
- *Trigger‑Based CDC*: For databases lacking reliable logs or when fine control is needed, triggers capture DML and append to an “audit” table with metadata (txn ID, timestamp). This adds one extra row per change but guarantees visibility even in read‑replica setups. Trade‑off: higher write latency and storage cost.  

**Edge Cases**  
- *Bulk loads*: Log‑based CDC may miss `LOAD DATA` unless the engine supports it; triggers capture every row.  
- *Transactional rollbacks*: Both strategies must ignore uncommitted changes—binlog readers skip before commit markers, while triggers rely on transaction isolation.  
- *Schema evolution*: Triggers break if columns change; log parsers adapt by reading schema snapshots.  

**Optimize & Communicate**  
I’d recommend a hybrid approach: use log‑based CDC for production and fallback to trigger‑based for legacy tables or when logs are unavailable. This balances performance (low overhead) with completeness (no missed changes). In an interview, I’d finish by noting how this feeds downstream systems like data warehouses or real‑time dashboards, tying back to the repo’s purpose.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
