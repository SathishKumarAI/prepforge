---
qid: ing_e6dc8eed23__fp__local
question: 'Explain: Build an in-memory key-value store with SET/GET/DELETE, then add
  transactions with BEGIN/COMMIT/ROLLBACK - including nested transactions.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 512
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:09:57-05:00'
sources: []
---

### Why an in‑memory store needs transactions

A key–value store is just a *mutable mapping* `M : K → V`.  
Clients issue **SET** (write), **GET** (read) and **DELETE** (erase).  
If several clients run concurrently or a client wants to try a series of writes that may later be discarded, the system must keep *consistent snapshots* of `M` without copying the whole map every time.  

The fundamental principle is **incremental state change**: a transaction records only what it modifies and can revert those changes in constant time.

### Core data structure

```text
base : Map<K,V>          // global store
stack : List<Diff>       // per‑transaction undo log
```

`Diff` holds `{key, oldValue}` where `oldValue = base.get(key)` or a sentinel for “not present”.  
On **SET**/**DELETE**, we push the diff onto `stack`, then apply the change to `base`.  
Because each diff knows the previous value, *ROLLBACK* pops diffs until the matching BEGIN and restores them.  

### Nested transactions

Each BEGIN pushes a marker (`null`) onto `stack`.  
When COMMIT is called, we simply remove the marker—no work needed because all changes are already in `base`.  
Rollback of an inner transaction pops and undoes only the diffs above its own marker.

This design guarantees:

1. **O(1)** SET/GET/DELETE (hash map access).
2. **O(number of changes)** rollback, independent of store size.
3. **Zero‑copy** snapshots—only diffs are stored.

### Non‑obvious insight

The *undo log* is more efficient than a copy‑on‑write snapshot because each key may be overwritten many times; storing every intermediate state would explode memory.  
By recording only the *first* previous value per transaction, we keep the log linear in the number of distinct keys touched, not in the number of operations.  
Thus the same structure supports arbitrary nesting while keeping space proportional to real modifications rather than operation count.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
