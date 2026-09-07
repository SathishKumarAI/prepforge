---
qid: ing_e6dc8eed23__faang__local
question: 'Explain: Build an in-memory key-value store with SET/GET/DELETE, then add
  transactions with BEGIN/COMMIT/ROLLBACK - including nested transactions.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 527
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:36:27-05:00'
sources: []
---

**Clarify**  
We need a thread‑safe in‑memory KV store supporting `SET`, `GET`, `DELETE`. Additionally, we must add transactional semantics: `BEGIN` starts a transaction (possibly nested), `COMMIT` applies all changes to the parent context or base store, and `ROLLBACK` discards changes. Assume single process, no persistence, keys are strings, values are arbitrary objects.

**Approach**  
Use a stack of *layers*. The bottom layer is the real store (`map[string]interface{}`). Each `BEGIN` pushes a new empty map onto the stack. Operations consult the topmost layer first; if a key isn’t present, fall back to lower layers. On `SET`, record the value in the current layer; on `DELETE`, store a tombstone (e.g., `nil` or a special marker) in the current layer.

**Depth**  
- **GET(k)**: iterate from top to bottom; return first non‑tombstone value, else nil.  
- **SET(k,v)**: write into top layer.  
- **DELETE(k)**: write tombstone into top layer.  
- **BEGIN()**: push new empty map.  
- **COMMIT()**: pop top layer and merge its entries into the next layer (overwriting or adding). Complexity O(n) per commit where *n* is number of changes in that transaction.  
- **ROLLBACK()**: simply discard the top layer.  

All operations are O(1) amortized except `COMMIT`, which is proportional to changes made. This design naturally supports nesting because each commit pushes changes upward.

**Edge Cases**  
- Committing when no transaction exists → error.  
- Rolling back with no active transaction → error.  
- Deleting a key that doesn’t exist: tombstone still recorded to prevent parent visibility.  
- Deep nesting could cause O(depth) lookup cost; acceptable for typical use.

**Optimize & Communicate**  
To reduce lookup time, maintain a per‑layer *index* (hash map of keys seen in that layer). For `COMMIT`, we can iterate only over changed keys instead of the whole store. We’d explain this trade‑off: extra memory vs faster commits. In production, we might add reference counting or copy‑on‑write to handle large stores efficiently. This plan keeps reasoning clear, complexity transparent, and demonstrates structured problem solving expected at FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
