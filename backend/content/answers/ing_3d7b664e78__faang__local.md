---
qid: ing_3d7b664e78__faang__local
question: 'Explain: of event sourcing there''s two events going'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 414
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:06:41-05:00'
sources: []
---

**Clarify**  
The question asks for a concise explanation of *event sourcing* and why an object’s lifecycle is represented by **two distinct events** (e.g., `Created` and `Updated`). We’ll assume the context is a domain‑driven design where state changes are persisted as immutable event streams.

**Approach**  
1. Define event sourcing in one sentence.  
2. Explain the role of each event type.  
3. Show how the aggregate reconstructs state from the stream.  
4. Highlight benefits and trade‑offs.  

**Depth**  
Event sourcing stores every state change as an immutable record. The aggregate’s current state is rebuilt by replaying its event stream in order. A *`Created`* event captures the initial snapshot (e.g., `Order(id, customerId)`), while subsequent *`Updated`* events encode incremental changes (`AddItem`, `ChangeAddress`). Each event contains only the data that changed and a timestamp; no “old” values are stored. Rehydration is deterministic: apply `Created` → set base state; apply each `Updated` sequentially → final state.

**Edge Cases**  
- **Missing events**: replay fails – need versioning or snapshots.  
- **Concurrent updates**: require optimistic concurrency (event version).  
- **Large streams**: performance hits – use periodic snapshots to prune history.  

**Optimize & Communicate**  
To improve read latency, materialize a *read model* via event‑driven projections; this keeps the write path pure while serving queries efficiently. I would explain that two events (created + updated) keep the domain model simple and the event store lean, yet provide full auditability and rollback capability. This balances durability, consistency, and performance—key points interviewers look for in a FAANG‑style answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
